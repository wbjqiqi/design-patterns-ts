/* singleton.ts */
import ICarShop from './i-car-shop';

class CarShop implements ICarShop {
    private static _instance: CarShop = new CarShop();

    public static getInstance() {
        return this._instance;
    }

    public bus(): string {
        return 'bus';
    }

    public babyCar(): string {
        return 'babyCar';
    }

    public minibus(): string {
        return 'minibus';
    }

    public crossCountryCar(): string {
        return 'crossCountryCar';
    }
}

export default CarShop;