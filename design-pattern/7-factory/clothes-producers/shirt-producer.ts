/* shirt-producer.ts */
import { IClothes, ICloseMakerFactory } from '../i-factory-interface';

export default class ShirtProducer implements ICloseMakerFactory {
    makeClose(): IClothes {
        return {
            name: 'shirt',
            price: 20,
            note: 'The process can be complex',
        };
    }
}