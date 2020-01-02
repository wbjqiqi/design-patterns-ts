/* color-class.ts */
import { ChangeColor } from './clothes-class';
import IClothes from './i-clothes';

export class WhiteClothes extends ChangeColor {
    constructor (clothes: IClothes) {
        super(clothes);
    }

    public setColor () {
        this.clothes.setColor('white');
    }

    // 在装饰类中添加更多方法
    public whiteFun () {
        console.log('This is white function');
    }
}

export class BlackClothes extends ChangeColor {
    constructor (clothes: IClothes) {
        super(clothes);
    }

    public setColor () {
        this.clothes.setColor('black');
    }

    public blackFun () {
        console.log('This is black function')
    }
}