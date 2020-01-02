/* move-invoker.ts */
import { CommandClass } from './command-models/command-class';
import { LeftCommand } from './command-models/left-command';
import { RightCommand } from './command-models/right-command';

export class CommandLogModel {
    id: number;
    name: CommandClass;
    step: number;
}

export class MoveInvoker {
    private rightCommand: RightCommand;
    private leftCommand: LeftCommand;

    public logs: CommandLogModel[] = [];

    constructor (commands: { rightCommand: RightCommand, leftCommand: LeftCommand }) {
        this.rightCommand = commands.rightCommand;
        this.leftCommand = commands.leftCommand;
    }

    public moveRight (step: number) {
        console.log(`Do right command with step ${step}`);
        this.rightCommand.execute(step);
        this.logs.unshift({
            id: Date.now(),
            name: CommandClass.GO_RIGHT,
            step: step
        });
    }

    public moveLeft (step: number) {
        console.log(`Do left command with step ${step}`);
        this.leftCommand.execute(step);
        this.logs.unshift({
            id: Date.now(),
            name: CommandClass.GO_LEFT,
            step: step
        });
    }

    public undo () {
        console.log(`Do undo command`);
        if (this.logs.length) {
            const commandLog = this.logs[0];
            switch (commandLog.name) {
                case CommandClass.GO_RIGHT:
                    this.rightCommand.undo();
                    break;
                case  CommandClass.GO_LEFT:
                    this.leftCommand.undo();
                    break;
                default:
            }
            this.logs.shift();
        }
    }
}