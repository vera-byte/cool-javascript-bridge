export default class Payment {
    private channelName;
    constructor();
    wxPay(params: any): Promise<string>;
    aliPay(params: any): Promise<string>;
    unionPay(params: any): Promise<string>;
    balancePay(params: any): Promise<string>;
}
