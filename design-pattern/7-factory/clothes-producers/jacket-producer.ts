/* jacket-producer.ts */
import { IClothes, ICloseMakerFactory } from '../i-factory-interface';

export default class JacketProducer implements ICloseMakerFactory {
    makeClose(): IClothes {
        return {
            name: 'jacket',
            price: 25,
            note: 'The process can be complex',
        };
    }
}