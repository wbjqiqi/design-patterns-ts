/* handler-abstract-class.ts */
export abstract class HandlerAbstractClass {
    protected name: string;

    protected higherLevel: HandlerAbstractClass;

    constructor (name: string) {
        this.name = name;
    }

    public setHigherLevel (higherLever: HandlerAbstractClass) {
        this.higherLevel = higherLever;
    }

    public abstract handlerMessage (money: number)
}
