import Encoder from './encoder';
import EncoderArgs from './encoder-args';
/// encode message to JSON-Uri format. scheme://host?args=json
export default class JSONUriEncoder implements Encoder {
  private scheme: string;
  private appPackageName: string;
  constructor(scheme = "webviewjsbridge", appPackageName = "") {
    this.scheme = scheme;
    this.appPackageName = appPackageName;
  }

  encode(args: EncoderArgs): string {
    const message = {
      channel: args.channel,
      action: args.action,
      params: args.params,
      callbackId: args.callbackId,
    };
    return `${this.scheme}://${this.appPackageName}?args=${encodeURIComponent(JSON.stringify(message))}`;
  }
}
