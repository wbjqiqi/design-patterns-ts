/* jacket-producer.ts */
import AbstractClothesClass from '../abstract-clothes-class';

export default class JacketProducer extends AbstractClothesClass {
    private jacket;

    constructor() {
        super();
        this.jacket = 'jacket';
    }

    public getClothes() {
        let color = this.color.getColor();
        console.log(color + 'jacket');
    }
}