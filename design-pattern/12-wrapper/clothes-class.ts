/* clothes-class.ts */
import IClothes from './i-clothes';

export class Clothes implements IClothes {
    public color: string;
    public type: string;

    public setColor (color) {
        this.color = color;
    }

    public setType (type) {
        this.type = type;
    }
}

export class ChangeColor implements IClothes {
    public clothes: IClothes;

    constructor (clothes: IClothes) {
        // 对原对象进行'引用'
        this.clothes = clothes;
    }

    public setColor (color) {
        console.log('will be overridden')
    }

    public setType (type) {
        // 将操作转发给原对象
        this.clothes.setType(type);
    }
}