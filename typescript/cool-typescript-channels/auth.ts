import _r from "../webview-javascript-bridge";


// 授权通道
export default class Auth {
    // 通道名车
    private channelName: string;
    // 给channelName赋值
    constructor() {
        this.channelName = "auth";
    }
    // 获取用户访问令牌
    public async getCoolAppAccessToken(params: any): Promise<CoolAppAccessToken> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "getCoolAppAccessToken"
        })
    };

    // 获取用户信息
    public async getUserProfile(): Promise<UserProfile> {
        return await _r.sendMessage({
            channel: this.channelName,
            action: "getUserProfile"
        })
    };
    // 获取用户收获地址
    public async getUserAddress(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "getUserAddress"
        })
    }

}