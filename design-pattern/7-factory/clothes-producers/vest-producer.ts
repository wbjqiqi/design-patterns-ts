/* vest-producer.ts */
import { IClothes, ICloseMakerFactory } from '../i-factory-interface';

export default class VestProducer implements ICloseMakerFactory {
    makeClose(): IClothes {
        return {
            name: 'vest',
            price: 10,
            note: 'The process can be complex',
        };
    }
}