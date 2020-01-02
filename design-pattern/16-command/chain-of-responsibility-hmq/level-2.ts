/* level-2.ts */
import { HandlerAbstractClass } from './handler-abstract-class';

export class Level2 extends HandlerAbstractClass {
    public handlerMessage(money: number) {
        if (money < 500) {
            console.log(`您消费${money}元，当前折扣为${this.name}折扣，还需支付${money * 0.8}元`);
        } else {
            this.higherLevel.handlerMessage(money);
        }
    }
}
