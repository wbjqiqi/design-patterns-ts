/* cashier.ts */
export default class Cashier {
    private static _instance: Cashier;

    public static get instance() {
        if (!this._instance) {
            this._instance = new Cashier();
        }
        return this._instance;
    }

    public payTheBill (money) {
        return 'success'
    }
}
