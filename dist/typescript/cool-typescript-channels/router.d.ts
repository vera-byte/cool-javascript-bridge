export default class Router {
    private channelName;
    constructor();
    navigateTo(params: any): Promise<string>;
    redirectTo(params: any): Promise<string>;
    navigateBack(params: any): Promise<string>;
    closeCurrentPageToAppPage(params: any): Promise<string>;
    wakeUpApp(params: any): Promise<string>;
    openExternalLink(params: any): Promise<string>;
}
