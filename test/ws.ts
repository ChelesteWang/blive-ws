/**
 * 拉取直播间 websocket 数据作为测试数据
 */
import {convertToArrayBuffer, parseArrayBuffer} from "../src/deno/utils.ts"
import {config} from "../src/deno/const.ts"
import type {AuthorizeReplyMessageBody} from "../src/deno/types.d.ts"

const roomid = 7734200
const url = 'wss://tx-gz-live-comet-03.chat.bilibili.com:443/sub'
const key = 'MAwBpsZxgjg5qR8mUcl-yYUOybyDh_9RVEllkblmI1h3-3UiwbL89f7bPId_MTxLVG_8lWvHlUBqUU-Ua4zql3Ai2h0br-VUd6MuT6z5yNpLs9fYSlXsXDe4NCTq2y87HNeWY_48t5T4_qdxbXDAm78s'


export const ws = new WebSocket(url)
ws.binaryType = "arraybuffer"

// 心跳定时器
let HEART_BEAT_INTERVAL: number | undefined = undefined

ws.addEventListener('open', () => {
    console.log('🚀open')

    const auth = {
        uid: config.uid,
        roomid: roomid,
        protover: 3,
        buvid: config.buvid,
        platform: 'web',
        type: 2,
        key: key,
    }
    // 发送认证包
    console.log('发送认证包: ', auth)
    ws.send(convertToArrayBuffer(JSON.stringify(auth), 7))

})
ws.addEventListener('close', (event: CloseEvent) => {
    console.log('🚫close: ', event.reason)
    if (HEART_BEAT_INTERVAL !== undefined) {
        clearInterval(HEART_BEAT_INTERVAL)
    }
})
ws.addEventListener('error', (event: Event | ErrorEvent) => {
    console.log('💢error: ', (event as ErrorEvent).message)
})
ws.addEventListener('message', (event: MessageEvent) => {
    const packets = parseArrayBuffer(event.data)
    packets.forEach(packet => {
        if (packet.op === 8 && (packet.body as AuthorizeReplyMessageBody).code === 0) {
            // 认证成功
            console.log('🚀authorized')
            ws.send(convertToArrayBuffer('', 2))
            HEART_BEAT_INTERVAL = setInterval(() => {
                // 发送心跳包
                ws.send(convertToArrayBuffer('', 2))
            }, 30 * 1000)
        }
    })
})
