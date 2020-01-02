/* left-command.ts */
// 向左移动类
import { ILeftReceiver } from '../receiver-models/receiver-interface';
import { ICommand } from './command-interface';

export class LeftCommand implements ICommand {
    protected receivers: ILeftReceiver[] = [];

    public addReceiver (receiver: ILeftReceiver) {
        this.receivers.push(receiver);
        return this;
    }

    public removeReceiver (receiver: ILeftReceiver) {
        const index = this.receivers.findIndex(item => item === receiver);
        if (index !== -1) {
            this.receivers.splice(index, 1);
        }
    }

    public execute (step: number) {
        this.receivers.map((receiver: ILeftReceiver) => {
            receiver.moveLeft(step);
        });
    }

    public undo () {
        this.receivers.map((receiver: ILeftReceiver) => {
            receiver.leftUndo();
        });
    }
}