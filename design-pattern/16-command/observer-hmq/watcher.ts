import Dep from './dep';

/**
 * watcher是观察者，他会收到发布者dep的消息而执行更新。
 */
export default class Watcher {
    private env: any;
    private cb: Function;
    private value: any;

    constructor(env: any, value: any, cb: Function) {
        this.env = env;
        this.cb = cb;
        this.value = value;
    }

    get () {
        /**
         * 将dep的上下文设置成这个watcher
         * 为了让这个watcher里面引用的所有依赖改变时都通知到该watcher执行更新
         * 与observer.ts的get方法配合查看
         */
        Dep.target = this;
        let value;
        value = {}; // 获取最新的值
        return value
    }

    update () {
        this.run()
    }

    run () {
        const value = this.get();
        const oldValue = this.value;
        this.value = value;
        this.cb.call(this.env, value, oldValue);
    }

    addDep (dep: Dep) {
        dep.addSub(this)
    }
}