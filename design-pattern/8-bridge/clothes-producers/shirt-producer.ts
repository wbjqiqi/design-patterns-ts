/* shirt-producer.ts */
import AbstractClothesClass from '../abstract-clothes-class';

export default class ShirtProducer extends AbstractClothesClass {
    public getClothes() {
        let color = this.color.getColor();
        console.log(color + 'shirt');
    }
}