/* lazy-load.ts */
import ICarShop from './i-car-shop';

class CarShop implements ICarShop {
    private static _instance: CarShop;

    public static get instance() {
        if (!this._instance) {
            this._instance = new CarShop();
        } else {
            console.log('lazy loading singleton has created')
        }
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