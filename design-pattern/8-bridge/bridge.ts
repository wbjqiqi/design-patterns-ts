/* bridge.ts */
import AbstractClothesClass from './abstract-clothes-class';
import JacketProducer from './clothes-producers/jacket-producer';
import ShirtProducer from './clothes-producers/shirt-producer';
import ClothesTypeEnum from './clothes-type-enum';
import ColorEnum from './color-enum';
import BlackColor from './color-types/black-color';
import WhiteColor from './color-types/white-color';

export default class CloseShop {
    private static _instance: CloseShop;

    public static get instance() {
        if (!this._instance) {
            this._instance = new CloseShop();
        }
        return this._instance;
    }

    public getClothes(type: ClothesTypeEnum, color: ColorEnum): AbstractClothesClass {
        let clothes: AbstractClothesClass;
        switch (type) {
            case ClothesTypeEnum.Jacket:
                clothes = new JacketProducer();
                break;
            case ClothesTypeEnum.Shirt:
                clothes = new ShirtProducer();
                break;
            default:
                throw new Error('not support type' + type)
        }
        switch (color) {
            case ColorEnum.White:
                clothes.setColor(new WhiteColor());
                break;
            case ColorEnum.Black:
                clothes = new ShirtProducer();
                clothes.setColor(new BlackColor());
                break;
            default:
                throw new Error('not support color' + color)
        }
        return clothes
    }
}
