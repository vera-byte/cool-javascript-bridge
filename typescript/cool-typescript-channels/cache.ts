import _r from "../webview-javascript-bridge";

// 缓存通道
export default class Cache {
    // 通道名车
    private channelName: string;
    // 给channelName赋值
    constructor() {
        this.channelName = "cache";
    }

    // 简易存储缓存
    public async easyStorageCache(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "easyStorageCache"
        })
    };

    // SQLite存储缓存
    public async sqliteStorageCache(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "easyStorageCache"
        })
    };
}