/* observer.ts */
import { defineReactive } from './define-reactive';
import Dep from './dep';

function def(obj: Object, key: string, val: any) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: false,
        writable: true,
        configurable: true
    })
}

/**
 * 重写设置__ob__对象
 * 增加观察者模式
 */
export default class Observer {
    value: any;
    dep: Dep;

    // 这里只演示值为对象情况
    constructor (value: Object) {
        this.value = value;
        this.dep = new Dep();
        def(value, '__ob__', this);
        this.walk(value)
    }

    walk (obj: Object) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
}