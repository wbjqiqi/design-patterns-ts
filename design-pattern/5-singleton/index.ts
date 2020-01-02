/* index.ts */
/*
 普通单体模式(normal)
 */
import CarShopN from './singleton';

/* module A */
const bus = (function () {
    const carShopA = CarShopN.getInstance();
    return carShopA.bus();
}());

/* module B */
const babyCar = (function () {
    const carShopB = CarShopN.getInstance();
    return carShopB.babyCar();
}());

/*
 惰性加载(lazy loading)
 */
import CarShopL from './lazy-load';

/* module C */
const crossCountryCar = (function () {
    return CarShopL.instance.crossCountryCar();
}());

/* module D */
const minibus = (function () {
    return CarShopL.instance.minibus();
}());