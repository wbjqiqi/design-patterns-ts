/* level-3.ts */
import { HandlerAbstractClass } from './handler-abstract-class';

export class Level3 extends HandlerAbstractClass {
    public handlerMessage (money: number) {
        if (money < 1000) {
            console.log(`您消费${money}元，当前折扣为${this.name}折扣，还需支付${money * 0.7}元`);
        } else {
            this.higherLevel.handlerMessage(money);
        }
    }
}
