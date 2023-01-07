import _r from "../webview-javascript-bridge";

// 支付通道
export default class Payment {
    // 通道名车
    private channelName: string;
    // 给channelName赋值
    constructor() {
        this.channelName = "payment";
    }
    // 微信支付
    public async wxPay(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "wxPay"
        })
    }
    // 支付宝支付
    public async aliPay(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "aliPay"
        })
    }
    // 银联支付
    public async unionPay(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "unionPay"
        })
    }
    // 余额支付
    public async balancePay(params: any): Promise<string> {
        return await _r.sendMessage({
            channel: this.channelName,
            params,
            action: "balancePay"
        })
    }

}