import Encoder from './encoder/encoder';
import JavaScriptMessage from './interface/java-script-message';
type MessageHandler = (params?: any) => any;
type Logger = (...args: any) => void;
declare class WebViewJavaScriptBridge {
    private callbackId;
    private callbacks;
    private handlers;
    private encoder;
    private logger?;
    constructor();
    sendMessage<Response>(message: JavaScriptMessage): Promise<Response>;
    registerMessageHandler(id: string, handler: MessageHandler): void;
    unregisterMessageHandler(id: string): void;
    setEncoder(encoder: Encoder): void;
    setLogger(logger: Logger): void;
    private _log;
    private _pushCallback;
    private _popCallback;
    private _receiveMessage;
}
declare const webViewJavaScriptBridge: WebViewJavaScriptBridge;
export default webViewJavaScriptBridge;
