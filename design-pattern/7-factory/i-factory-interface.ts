/* i-factory-interface.ts */
interface ICloseMakerFactory {
    makeClose(): IClothes
}

interface IClothes {
    name: string
    price: number
    note: string
}

export {
    ICloseMakerFactory,
    IClothes,
};