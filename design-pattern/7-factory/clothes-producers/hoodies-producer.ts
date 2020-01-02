/* hoodies-producer.ts */
import { IClothes, ICloseMakerFactory } from '../i-factory-interface';

export default class HoodiesProducer implements ICloseMakerFactory {
    makeClose(): IClothes {
        return {
            name: 'hoodies',
            price: 30,
            note: 'The process can be complex',
        };
    }
}