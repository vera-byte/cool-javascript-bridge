'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class JSONUriEncoder {
    constructor(scheme = "webviewjsbridge", host = "stormyang.cn") {
        this.scheme = scheme;
        this.host = host;
    }
    encode(args) {
        const message = {
            channel: args.channel,
            action: args.action,
            params: args.params,
            callbackId: args.callbackId,
        };
        return `${this.scheme}://${this.host}?args=${encodeURIComponent(JSON.stringify(message))}`;
    }
}

class WebViewJavaScriptBridge {
    constructor() {
        this.callbackId = 1;
        this.callbacks = new Map();
        this.handlers = new Map();
        this.encoder = new JSONUriEncoder();
    }
    sendMessage(message) {
        return new Promise((resolve, reject) => {
            if (!message.action || message.action.length <= 0) {
                reject('action is invalid');
                return;
            }
            const channel = message.channel || 'default';
            const channelImp = window[channel];
            if (channelImp === null || channelImp === undefined) {
                reject(`
        channel named "${channel}" not found in flutter. please add channel:
        WebView(
          url: ...,
          ...
          javascriptChannels: {
            JavascriptChannel(
              name: "${channel}",
              onMessageReceived: (message) {
                (instance of WebViewFlutterJavaScriptBridge).parseJavascriptMessage(message);
              },
            ),
          },
        )
        `);
                return;
            }
            const callbackId = this._pushCallback(resolve);
            const encoded = this.encoder.encode({
                channel,
                action: message.action,
                params: message.params,
                callbackId,
            });
            if (!encoded) {
                reject(`Unable build message. (channel: ${channel}, action: ${message.action}, params: ${message.params})`);
                return;
            }
            this._log('sending message:', encoded);
            channelImp.postMessage(encoded);
        });
    }
    registerMessageHandler(id, handler) {
        if (id === null || id === undefined) {
            return;
        }
        if (typeof handler === 'function') {
            this.handlers.set(id, handler);
        }
        else {
            this.unregisterMessageHandler(id);
        }
    }
    unregisterMessageHandler(id) {
        this.handlers.delete(id);
    }
    setEncoder(encoder) {
        this.encoder = encoder;
    }
    setLogger(logger) {
        this.logger = logger;
    }
    _log(...args) {
        var _a;
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.call(this.logger, ...args);
    }
    _pushCallback(cb) {
        const id = this.callbackId++;
        const key = `cb_${id}`;
        this.callbacks.set(key, cb);
        return key;
    }
    _popCallback(id) {
        if (this.callbacks.has(id)) {
            const cb = this.callbacks.get(id);
            this.callbacks.delete(id);
            return cb;
        }
    }
    _receiveMessage(message) {
        this._log(`receive message, id: ${message.id}, callbackId: ${message.callbackId}, params:`, message.params);
        if (message.callbackId) {
            const cb = this._popCallback(message.callbackId);
            if (cb) {
                cb(message.params);
            }
            return;
        }
        const key = message.id;
        if (key) {
            const func = this.handlers.get(key);
            if (typeof func !== 'function') {
                return `no handler for message: ${message.id}`;
            }
            const ret = func(message.params);
            return ret ? JSON.stringify(ret) : ret;
        }
    }
}
const webViewJavaScriptBridge = new WebViewJavaScriptBridge();
window.webViewJavaScriptBridge = webViewJavaScriptBridge;

class UriEncoder {
    constructor(scheme = 'webviewjsbridge') {
        this.scheme = scheme;
    }
    encode(args) {
        let message = `${this.scheme}://${args.channel}/${args.action}`;
        const query = [];
        if (args.params) {
            const argsJSON = encodeURIComponent(JSON.stringify(args.params));
            query.push({ key: 'args', value: argsJSON });
        }
        if (args.callbackId) {
            query.push({ key: 'callbackId', value: args.callbackId });
        }
        if (query.length > 0) {
            message += '?';
            message += query.map((pair) => `${pair.key}=${pair.value}`).join('&');
        }
        return message;
    }
}

class JSONEncoder {
    encode(args) {
        const message = {
            channel: args.channel,
            action: args.action,
            params: args.params,
            callbackId: args.callbackId,
        };
        return JSON.stringify(message);
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class Auth {
    constructor() {
        this.channelName = "auth";
    }
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "accessToken"
            });
        });
    }
    ;
    getUserProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "userProfile"
            });
        });
    }
    ;
}

class System {
    constructor() {
        this.channelName = "system";
    }
    getDeviceInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "deviceInfo"
            });
        });
    }
    getSystemInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "systemInfo"
            });
        });
    }
    getNetworkStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "networkStatus"
            });
        });
    }
    getAppBaseInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "appBaseInfo"
            });
        });
    }
    getAppVersionInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "appVersionInfo"
            });
        });
    }
    getAppSupportFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "appSupportFeatures"
            });
        });
    }
    getAppAuthSetting() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "appAuthSetting"
            });
        });
    }
    getSystemSetting() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "systemSetting"
            });
        });
    }
    getClipboardData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "clipboardData"
            });
        });
    }
    setClipboardData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "clipboardData"
            });
        });
    }
    makePhoneCall(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                params: phoneNumber,
                action: "makePhoneCall"
            });
        });
    }
}

class Router {
}

class Interact {
    constructor() {
        this.channelName = "interact";
    }
    showToast() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showToast"
            });
        });
    }
    ;
    showLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showLoading"
            });
        });
    }
    hideLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "hideLoading"
            });
        });
    }
    showActionSheet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showActionSheet"
            });
        });
    }
    showShareMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showShareMenu"
            });
        });
    }
    hideShareMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "hideShareMenu"
            });
        });
    }
    showNavigationBarLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showNavigationBarLoading"
            });
        });
    }
    hideNavigationBarLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "hideNavigationBarLoading"
            });
        });
    }
    setNavigationBarTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "setNavigationBarTitle"
            });
        });
    }
    setNavigationBarColor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "setNavigationBarColor"
            });
        });
    }
    showNavigationBar() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showNavigationBar"
            });
        });
    }
    hideNavigationBar() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "hideNavigationBar"
            });
        });
    }
    showCapsuleButton() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "showCapsuleButton"
            });
        });
    }
    hideCapsuleButton() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "hideCapsuleButton"
            });
        });
    }
    chooseImage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "chooseImage"
            });
        });
    }
    chooseVideo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "chooseVideo"
            });
        });
    }
    getLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield webViewJavaScriptBridge.sendMessage({
                channel: this.channelName,
                action: "getLocation"
            });
        });
    }
}

class Payment {
}

const coolAppAuth = new Auth();
const coolAppSyetem = new System();
const coolAppRouter = new Router();
const coolAppCache = new Cache();
const coolAppInteract = new Interact();
const coolPayment = new Payment();

exports.JSONEncoder = JSONEncoder;
exports.JSONUriEncoder = JSONUriEncoder;
exports.UriEncoder = UriEncoder;
exports.coolAppAuth = coolAppAuth;
exports.coolAppCache = coolAppCache;
exports.coolAppInteract = coolAppInteract;
exports.coolAppRouter = coolAppRouter;
exports.coolAppSyetem = coolAppSyetem;
exports.coolPayment = coolPayment;
exports.webViewJavaScriptBridge = webViewJavaScriptBridge;
//# sourceMappingURL=index.cjs.js.map
