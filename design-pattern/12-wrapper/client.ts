/* client.ts */
import { Clothes } from './clothes-class';
import { BlackClothes, WhiteClothes } from './color-class';
import IClothes from './i-clothes';

class Client {
    public getBlackClothesAndWhiteClothes () {
        const clothes: IClothes = new Clothes();
        const whiteClothes: WhiteClothes = new WhiteClothes(clothes);
        whiteClothes.setColor();
        whiteClothes.whiteFun();
        const blackClothes: BlackClothes = new BlackClothes(clothes);
        blackClothes.setColor();
        blackClothes.blackFun();
    }
}

new Client().getBlackClothesAndWhiteClothes();