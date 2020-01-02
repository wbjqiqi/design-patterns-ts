/* right-command.ts */
// 向右移动类
import { IRightReceiver } from '../receiver-models/receiver-interface';
import { ICommand } from './command-interface';

export class RightCommand implements ICommand {
    protected receivers: IRightReceiver[] = [];

    public addReceiver (receiver: IRightReceiver) {
        this.receivers.push(receiver);
        return this;
    }

    public removeReceiver (receiver: IRightReceiver) {
        const index = this.receivers.findIndex(item => item === receiver);
        if (index !== -1) {
            this.receivers.splice(index, 1);
        }
    }

    public execute (step: number) {
        this.receivers.map((receiver: IRightReceiver) => {
            receiver.moveRight(step);
        });
    }

    public undo () {
        this.receivers.map((receiver: IRightReceiver) => {
            receiver.rightUndo();
        });
    }
}