/* define-reactive.ts */
import Dep from './dep';

/**
 * 将可配置的对象设置成__ob__对象
 * get方法和set方法添加观察者模式
 */
export function defineReactive (obj: Object, key: string, val?: any,) {
    const dep = new Dep();

    // 只设置可配置的对象
    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return
    }

    const getter = property && property.get;
    if (!getter && arguments.length === 2) {
        val = obj[key]
    }

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            const value = getter ? getter.call(obj) : val;
            /**
             * 如果在某一个watcher的上下文调用到了这个对象
             * 那么这个watcher订阅这个对象改变的消息
             * 这个对象改变的时候watcher执行更新函数
             */
            if (Dep.target) {
                dep.depend();
            }
            return value
        },
        set: function reactiveSetter (newVal) {
            const value = getter ? getter.call(obj) : val;
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            val = newVal;
            // 对象改变，让发布者通知所有订阅者
            dep.notify()
        }
    })
}