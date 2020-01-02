import AbstractClothesClass from './abstract-clothes-class';
import CloseShop from './bridge';
import ShirtProducer from './clothes-producers/shirt-producer';
import ClothesTypeEnum from './clothes-type-enum';
import ColorEnum from './color-enum';

const clothes: AbstractClothesClass = CloseShop.instance.getClothes(ClothesTypeEnum.Shirt, ColorEnum.Black);
clothes.getClothes();
const shirt: ShirtProducer = clothes as ShirtProducer;
if (!(shirt instanceof ShirtProducer)) {
    throw new Error('it is not a shirt')
}
// shirt.getShirt();

interface IAdd<T> {
    add(b: T);
}

class MyClass implements IAdd<MyClass> {
    private data: number;
    constructor(data: number) {
        this.data = data;
    }

    public add(b: MyClass): MyClass {
        return new MyClass(this.data += b.data);
    }
}


const add = <TemplateType>(a: TemplateType, b: TemplateType) => {
    return a + b;
};

const add2 = <TemplateType extends IAdd>(a: TemplateType, b: TemplateType) => {
    return a.add(b);
};

const three = add<number>(1, 2); // 3
console.log(three);
const oneTwoString = add<string>('1', '2'); // 122
console.log(oneTwoString);
const myClassAdd = add2<MyClass>(new MyClass(1), new MyClass(2));