/* client.ts */
import { LeftCommand } from './command-models/left-command';
import { RightCommand } from './command-models/right-command';
import { MoveInvoker } from './move-invoker';
import { RabbitReceiver } from './receiver-models/rabbit-receiver';
import { ITarget } from './receiver-models/target-interface';
import { TurtleReceiver } from './receiver-models/turtle-receiver';

export class Client {
    public rabbit: ITarget = {
        name: 'rabbit',
        position: 0
    };
    public turtle: ITarget = {
        name: 'turtle',
        position: 0
    };
    public invoker: MoveInvoker;

    constructor () {
        const rightCommand = new RightCommand();
        const leftCommand = new LeftCommand();
        rightCommand.addReceiver(new RabbitReceiver(this.rabbit)).addReceiver(new TurtleReceiver(this.turtle));
        leftCommand.addReceiver(new RabbitReceiver(this.rabbit)).addReceiver(new TurtleReceiver(this.turtle));
        this.invoker = new MoveInvoker({rightCommand, leftCommand});
    }

    public moveRight (step: number) {
        this.invoker.moveRight(step);
        return this;
    }

    public moveLeft (step: number) {
        this.invoker.moveLeft(step);
        return this;
    }

    public getLogs () {
        const logs = this.invoker.logs;
        logs.map((log) => console.log(`${log.name}-${log.step}`));
        return this;
    }

    public undo () {
        this.invoker.undo();
        return this;
    }
}
new Client().moveRight(1).moveRight(1).undo().moveRight(2);