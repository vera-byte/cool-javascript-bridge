export default class System {
    private channelName;
    constructor();
    getDeviceInfo(): Promise<string>;
    getSystemInfo(): Promise<string>;
    getNetworkStatus(): Promise<string>;
    getAppBaseInfo(): Promise<string>;
    getAppVersionInfo(): Promise<string>;
    getAppSupportFeatures(): Promise<string>;
    getAppAuthSetting(): Promise<string>;
    getSystemSetting(): Promise<string>;
    getClipboardData(): Promise<string>;
    setClipboardData(): Promise<string>;
    makePhoneCall(phoneNumber: number): Promise<string>;
}
