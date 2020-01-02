/* simple-factory.ts */
import CloseTypeEnum from './clothes-type-enum';

export default class SimpleFactory {
    private static _instance: SimpleFactory;

    public static get instance() {
        if (!this._instance) {
            this._instance = new SimpleFactory();
        }
        return this._instance;
    }

    public createClose(closeType: CloseTypeEnum): string {
        let closeName: string = null;
        switch (closeType) {
            case CloseTypeEnum.Sweater:
                closeName = 'sweater';
                break;
            case CloseTypeEnum.Shirt:
                closeName = 'shirt';
                break;
            case CloseTypeEnum.Jacket:
                closeName = 'jacket';
                break;
            default :
                throw new Error('can\'t find type' + closeType);
        }
        this.washingsClose(closeName);
        this.packagingClose(closeName);
        return closeName;
    }

    public washingsClose(clothes: string) {
    }

    public packagingClose(clothes: string) {
    }
}