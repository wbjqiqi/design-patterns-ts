/* client.ts */
import { Level1 } from './level-1';
import { Level2 } from './level-2';
import { Level3 } from './level-3';
import { Level4 } from './level-4';

export class Client {
    public static getDiscount(money: number) {
        const level4 = new Level4('钻石');
        const level3 = new Level3('铂金');
        const level2 = new Level2('黄金');
        const level1 = new Level1('普通');
        level2.setHigherLevel(level3);
        level1.setHigherLevel(level2);
        level1.handlerMessage(money);
    }
}
Client.getDiscount(1176);
