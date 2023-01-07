import Encoder from './encoder';
import EncoderArgs from './encoder-args';
export default class JSONUriEncoder implements Encoder {
    private scheme;
    private appPackageName;
    constructor(scheme?: string, appPackageName?: string);
    encode(args: EncoderArgs): string;
}
