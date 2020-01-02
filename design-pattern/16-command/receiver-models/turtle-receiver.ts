/* turtle-receiver.ts */
// 乌龟
import { ILeftReceiver, IRightReceiver } from './receiver-interface';
import { ITarget } from './target-interface';

export class TurtleReceiver implements IRightReceiver, ILeftReceiver {
    public turtle: ITarget;
    private rightLogs: number[] = [];
    private leftLogs: number[] = [];

    constructor (turtle: ITarget) {
        this.turtle = turtle;
    }

    private getPosition () {
        console.log(`Now turtle is at ${this.turtle.position}`);
    }

    public moveRight (step: number) {
        const moveStep = (parseInt(Math.random() * 30) + 10) * step;
        this.turtle.position += moveStep;
        this.rightLogs.unshift(moveStep);
        console.log(`Turtle move right ${moveStep}`);
        this.getPosition();
    }

    public rightUndo () {
        this.turtle.position -= Number(this.rightLogs[0]);
        this.rightLogs.shift();
        this.getPosition();
    }

    public moveLeft (step: number) {
        const moveStep = (parseInt(Math.random() * 30) + 10) * step;
        this.turtle.position -= moveStep;
        this.leftLogs.unshift(moveStep);
        console.log(`Turtle move left ${moveStep}`);
        this.getPosition();
    }

    public leftUndo () {
        this.turtle.position += this.leftLogs[0](this.leftLogs[0]);
        this.leftLogs.shift();
        this.getPosition();
    }
}