/* rabbit-receiver.ts */
// 兔子
import { ILeftReceiver, IRightReceiver } from './receiver-interface';
import { ITarget } from './target-interface';

export class RabbitReceiver implements IRightReceiver, ILeftReceiver {
    public rabbit: ITarget;
    private rightLogs: number[] = [];
    private leftLogs: number[] = [];

    constructor (rabbit: ITarget) {
        this.rabbit = rabbit;
    }

    private getPosition () {
        console.log(`Now rabbit is at ${this.rabbit.position}`);
    }

    public moveRight (step: number) {
        const moveStep = parseInt(Math.random() * 60) * step;
        this.rabbit.position += moveStep;
        this.rightLogs.unshift(moveStep);
        console.log(`Rabbit move right ${moveStep}`);
        this.getPosition();
    }

    public rightUndo () {
        this.rabbit.position -= Number(this.rightLogs[0]);
        this.rightLogs.shift();
        this.getPosition();
    }

    public moveLeft (step: number) {
        const moveStep = parseInt(Math.random() * 60) * step;
        this.rabbit.position -= moveStep;
        this.leftLogs.unshift(moveStep);
        console.log(`Rabbit move left ${moveStep}`);
        this.getPosition();
    }

    public leftUndo () {
        this.rabbit.position += Number(this.leftLogs[0]);
        this.leftLogs.shift();
        this.getPosition();
    }
}