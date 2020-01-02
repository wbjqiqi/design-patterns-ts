/* abstract-clothes-class.ts */
import ColorInterface from './color-interface';

export default abstract class AbstractClothesClass {
    protected color: ColorInterface;

    public setColor(color: ColorInterface) {
        this.color = color;
    }

    public abstract getClothes: Function;
}
