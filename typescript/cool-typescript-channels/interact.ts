import _r from "../webview-javascript-bridge";


// 交互通道
export default class Interact {
    // 通道名
    private channelName: string;
    // 给channelName赋值
    constructor() {
        this.channelName = "interact";
    }

    // showAppBar
    public async showAppBar(): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showAppBar",
        })
    };

    // showAppBar
    public async hideAppBar(): Promise<void> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "hideAppBar",
        })
    };

    // showToast
    public async showToast(params: CoolAppShowToast): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showToast",
            params
        })
    };
    // showLoading
    public async showLoading(params: CoolAppShowLoading): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showLoading",
            params
        })
    }
    // hideLoading
    public async hideLoading(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "hideLoading"
        })
    }
    // showActionSheet
    public async showActionSheet(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showActionSheet"
        })
    }
    // showShareMenu
    public async showShareMenu(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showShareMenu"
        })
    }
    // hideShareMenu
    public async hideShareMenu(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "hideShareMenu"
        })
    }
    // showNavigationBarLoading
    public async showNavigationBarLoading(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showNavigationBarLoading"
        })
    }
    // hideNavigationBarLoading
    public async hideNavigationBarLoading(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "hideNavigationBarLoading"
        })
    }
    // setNavigationBarTitle
    public async setNavigationBarTitle(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "setNavigationBarTitle"
        })
    }
    // setNavigationBarColor
    public async setNavigationBarColor(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "setNavigationBarColor"
        })
    }
    // 显示导航栏
    public async showNavigationBar(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showNavigationBar"
        })
    }
    // 隐藏导航栏
    public async hideNavigationBar(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "hideNavigationBar"
        })
    }
    // 显示胶囊按钮
    public async showCapsuleButton(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "showCapsuleButton"
        })
    }
    // 隐藏胶囊按钮
    public async hideCapsuleButton(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "hideCapsuleButton"
        })
    }

    // 选择图片并上传
    public async chooseImageAutoUpload(params: ChooseImageAutoUploadReq): Promise<ChooseImageAutoUploadRes[]> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "chooseImageAutoUpload",
            params
        })
    }
    // 选择视频
    public async chooseVideoAutoUoload(params?: { maxAssets: number }): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "chooseVideoAutoUpload",
            params
        })
    }

    // 获取定位
    public async getLocation(): Promise<Location> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "getLocation"
        })
    }

    // 打开地图选择位置
    public async chooseLocation(): Promise<MapPoi> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "chooseLocation"
        })
    }


}