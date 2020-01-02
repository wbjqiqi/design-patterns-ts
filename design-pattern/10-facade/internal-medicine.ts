/* internal-medicine.ts */
export default class InternalMedicine {
    private static _instance: InternalMedicine;
    private isBusy: boolean;

    public static get instance() {
        if (!this._instance) {
            this._instance = new InternalMedicine();
        }
        return this._instance;
    }

    public isDepartmentBusy() {
        return this.isBusy;
    }

    public doGastroscope (person) {
        console.log('do gastroscope');
        return person
    }
}