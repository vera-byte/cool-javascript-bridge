
import _r from "../webview-javascript-bridge";

export default class System {
    // 通道名
    private channelName: string;
    // 给channelName赋值
    constructor() {
        this.channelName = "system";
    }
    // 获取设备信息
    public async getDeviceInfo(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "deviceInfo"
        })
    }
    // 获取系统信息
    public async getSystemInfo(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "systemInfo"
        })
    }
    // 获取网络状态
    public async getNetworkStatus(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "networkStatus"
        })
    }
    // 获取App基础信息
    public async getAppBaseInfo(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "appBaseInfo"
        })
    }
    // 获取App版本信息
    public async getAppVersionInfo(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "appVersionInfo"
        })
    }
    // 获取App支持的功能
    public async getAppSupportFeatures(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "appSupportFeatures"
        })
    }
    // 获取App授权设置
    public async getAppAuthSetting(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "appAuthSetting"
        })
    }
    // 获取系统设置
    public async getSystemSetting(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "systemSetting"
        })
    }
    // 获取系统剪贴板内容
    public async getClipboardData(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "clipboardData"
        })
    }
    // 设置系统剪贴板内容
    public async setClipboardData(): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "clipboardData"
        })
    }
    /**
     * @description: 拨打电话
     * @param {number} phoneNumber 电话号码
     * @example: await _r.system.makePhoneCall(10086)
    */
    public async makePhoneCall(phoneNumber: number): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params: phoneNumber,
            action: "makePhoneCall"
        })
    }
}