/* pharmacy.ts */
export default class Pharmacy {
    private static _instance: Pharmacy;

    public static get instance() {
        if (!this._instance) {
            this._instance = new Pharmacy();
        }
        return this._instance;
    }

    public takeMedicine(prescription) {
        console.log('take the medicine in prescription');
        return 'medicine';
    }
}