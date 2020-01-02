/* docker-office.ts */
export default class DoctorOffice {
    private static _instance: DoctorOffice;
    private isBusy: boolean;

    public static get instance() {
        if (!this._instance) {
            this._instance = new DoctorOffice();
        }
        return this._instance;
    }

    public isDoctorBusy() {
        return this.isBusy;
    }

    public async seeAStomachProblem(person, cases) {
        return new Promise((resolve, reject) => {
            this.isBusy = true;
            console.log('check the condition');
            console.log('write report to cases', cases);
            console.log('list the prescription');
            this.isBusy = false;
            resolve('prescription');
        });
    }
}