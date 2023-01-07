import webViewJavaScriptBridge from './webview-javascript-bridge';
import UriEncoder from './encoder/uri-encoder';
import JSONEncoder from './encoder/json-encoder';
import JSONUriEncoder from './encoder/json-uri-encoder';
export { webViewJavaScriptBridge, UriEncoder, JSONEncoder, JSONUriEncoder };
// 导出Cool相关的通道
import Auth from './cool-typescript-channels/auth';
import System from './cool-typescript-channels/system';
import Router from './cool-typescript-channels/router';
import Interact from './cool-typescript-channels/interact';
import Payment from './cool-typescript-channels/payment';
import Cache from './cool-typescript-channels/cache';
// App授权相关
const coolAppAuth = new Auth();
// App系统相关
const coolAppSyetem = new System();
// App路由相关
const coolAppRouter = new Router();
// App缓存相关
const coolAppCache = new Cache();
// App交互相关
const coolAppInteract = new Interact();
// App支付相关
const coolAppPayment = new Payment()
export { coolAppAuth, coolAppSyetem, coolAppRouter, coolAppCache, coolAppInteract, coolAppPayment, };
// cool end;