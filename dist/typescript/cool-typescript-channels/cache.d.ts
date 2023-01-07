export default class Cache {
    private channelName;
    constructor();
    easyStorageCache(): Promise<string>;
    sqliteStorageCache(): Promise<string>;
}
