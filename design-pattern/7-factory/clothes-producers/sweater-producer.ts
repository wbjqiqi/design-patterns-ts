/* sweater-producer.ts */
import { IClothes, ICloseMakerFactory } from '../i-factory-interface';

export default class SweaterProducer implements ICloseMakerFactory {
    makeClose(): IClothes {
        return {
            name: 'sweater',
            price: 15,
            note: 'The process can be complex',
        };
    }
}