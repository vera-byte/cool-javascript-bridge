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

    /**
     * @desc 打开车辆详情页
     * @example coolAppRouter.openToCarDetails({carId: "202302051545117"});
     * */
    public async openToCarDetails(params: OpenCar): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "openToCarDetails"
        })
    }

    /**
    * @desc 打开车辆详情页
    * @example coolAppRouter.openToPurchaseDetails({id: "202302051545117"});
    * */
    public async openToPurchaseDetails(params: OpenPurchase): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "openToPurchaseDetails"
        })
    }

    /**
    * @desc 发布车源
    * @example coolAppRouter.releaseCar();
    * */
    public async releaseCar(): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "releaseCar"
        })
    }


    /**
     * @desc 重定向到登录
     * @example coolAppRouter.redirectToLogin();
     * */
    public async redirectToLogin(): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "redirectToLogin"
        })
    }

    /**
     * @desc 返回上一页
     * @example coolAppRouter.navigateBack();
     * */
    public async navigateBack(): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "navigateBack",

        })
    }

    /**
     * @desc 微聊
     * @example coolAppRouter.microChat({carId: "202302051545117",userId: "3323423"});
     * */
    public async microChat(params: openMicroChat): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "microChat",
            params,

        })
    }
}