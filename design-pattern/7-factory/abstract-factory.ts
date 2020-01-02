/* abstract-factory.ts */
import HoodiesProducer from './clothes-producers/hoodies-producer';
import JacketProducer from './clothes-producers/jacket-producer';
import ShirtProducer from './clothes-producers/shirt-producer';
import SweaterProducer from './clothes-producers/sweater-producer';
import VestProducer from './clothes-producers/vest-producer';
import ClothesTypeEnum from './clothes-type-enum';
import { ICloseMakerFactory } from './i-factory-interface';

class AbstractFactory {
    private static _instance: AbstractFactory;
    private closeTypeAnalyzerMapping: Map<ClothesTypeEnum, ICloseMakerFactory>;

    constructor() {
        this.closeTypeAnalyzerMapping.set(ClothesTypeEnum.Vest, new VestProducer());
        this.closeTypeAnalyzerMapping.set(ClothesTypeEnum.Hoodies, new HoodiesProducer());
        this.closeTypeAnalyzerMapping.set(ClothesTypeEnum.Jacket, new JacketProducer());
        this.closeTypeAnalyzerMapping.set(ClothesTypeEnum.Shirt, new ShirtProducer());
        this.closeTypeAnalyzerMapping.set(ClothesTypeEnum.Sweater, new SweaterProducer());
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new AbstractFactory();
        }
        return this._instance;
    }

    public makeCloseTypeAnalyzer(type: ClothesTypeEnum): ICloseMakerFactory {
        if (this.closeTypeAnalyzerMapping.has(type)) {
            return this.closeTypeAnalyzerMapping.get(type);
        } else {
            throw new Error('our factory don\'t have this type');
        }
    }
}
const vest = AbstractFactory.instance.makeCloseTypeAnalyzer(ClothesTypeEnum.Vest).makeClose();