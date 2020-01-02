/* level-4.ts */
import { HandlerAbstractClass } from './handler-abstract-class';

export class Level4 extends HandlerAbstractClass {
    public handlerMessage(money: number) {
        console.log(`您消费${money}元，当前折扣为${this.name}折扣，还需支付${money * 0.6}元`);
    }
}
