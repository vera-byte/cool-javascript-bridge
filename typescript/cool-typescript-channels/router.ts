import _r from "../webview-javascript-bridge";

// 路由通道
export default class Router {
    // 通道名车
    private channelName: string;
    // 给channelName赋值
    constructor() {
        this.channelName = "router";
    }
    // 跳转到指定页面
    public async navigateTo(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "navigateTo"
        })
    }
    // 重定向到指定页面
    public async redirectTo(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "redirectTo"
        })
    }
    // 返回上一页
    public async navigateBack(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "navigateBack"
        })
    }
    // 关闭当前页面，跳转到应用内的某个页面
    public async closeCurrentPageToAppPage(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "closeCurrentPageToAppPage"
        })
    }
    // 唤醒App
    public async wakeUpApp(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "wakeUpApp"
        })
    }
    // 打开外部链接
    public async openExternalLink(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "openExternalLink"
        })
    }
}