import Watcher from './watcher';

let uid = 0;

/**
 * 每一个observer都会创建一个或多个dep
 * 每一个dep都是一个发布者
 * observer的值改变时通知对应的dep去发布消息给他的订阅者们
 */
export default class Dep {
    public static target: Watcher;
    private id: number;
    private subs: Array<Watcher>;

    constructor () {
        this.id = uid++;
        this.subs = [];
    }

    public addSub (sub: Watcher) {
        this.subs.push(sub)
    }

    public removeSub (sub: Watcher) {
        remove(this.subs, sub)
    }

    public depend () {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    public notify () {
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}

function remove(list, item) {
    const index = list.findIndex((ele) =>
        ele === item
    );
    if (index !== -1) {
        list.splice(index, 1);
    }
}