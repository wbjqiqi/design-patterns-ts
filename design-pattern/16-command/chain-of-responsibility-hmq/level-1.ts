/* level-1.ts */
import { HandlerAbstractClass } from './handler-abstract-class';

export class Level1 extends HandlerAbstractClass {
    public handlerMessage(money: number) {
        if (money < 100) {
            console.log(`您消费${money}元，当前折扣为${this.name}折扣，还需支付${money}元`);
        } else {
            this.higherLevel.handlerMessage(money);
        }
    }
}
