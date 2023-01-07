export default class Interact {
    private channelName;
    constructor();
    showToast(params: CoolAppShowToast): Promise<string>;
    showLoading(params: CoolAppShowLoading): Promise<string>;
    hideLoading(): Promise<string>;
    showActionSheet(): Promise<string>;
    showShareMenu(): Promise<string>;
    hideShareMenu(): Promise<string>;
    showNavigationBarLoading(): Promise<string>;
    hideNavigationBarLoading(): Promise<string>;
    setNavigationBarTitle(): Promise<string>;
    setNavigationBarColor(): Promise<string>;
    showNavigationBar(): Promise<string>;
    hideNavigationBar(): Promise<string>;
    showCapsuleButton(): Promise<string>;
    hideCapsuleButton(): Promise<string>;
    chooseImageAutoUpload(params: ChooseImageAutoUploadReq): Promise<ChooseImageAutoUploadRes[]>;
    chooseVideoAutoUoload(params?: {
        maxAssets: number;
    }): Promise<string>;
    getLocation(): Promise<Location>;
    chooseLocation(): Promise<MapPoi>;
}
