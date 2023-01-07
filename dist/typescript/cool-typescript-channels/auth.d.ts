export default class Auth {
    private channelName;
    constructor();
    getCoolAppAccessToken(params: any): Promise<CoolAppAccessToken>;
    getUserProfile(params: any): Promise<string>;
    getUserAddress(params: any): Promise<string>;
}
