export default class TimeHelper {
    private static _instance: TimeHelper = new TimeHelper();

    constructor() {
        return TimeHelper._instance;
    }

    public static getInstance() {
        return this._instance;
    }

    public get nowTime() {
        let hours = new Date().getHours();
        if (hours <= 9) {
            return this._morning();
        } else if (hours <= 13) {
            return this._noon();
        } else if (hours <= 18) {
            return this._afternoon();
        } else if (hours <= 23) {
            return this._evening();
        }
    }

    private _morning() {
        return {
            time: 'morning',
            toDo: 'reading',
        };
    }

    private _noon() {
        return {
            time: 'noon',
            toDo: 'sleeping',
        };
    }

    private _afternoon() {
        return {
            time: 'afternoon',
            toDo: 'working',
        };
    }

    private _evening() {
        return {
            time: 'evening',
            toDo: 'running',
        };
    }
}
TimeHelper.getInstance().nowTime