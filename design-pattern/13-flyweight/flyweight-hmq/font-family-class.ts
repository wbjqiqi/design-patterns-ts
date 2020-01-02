/* font-family-class.ts */
import { FontFamilyEnum } from './models/font-family-enum';
import IFontFamily from './models/font-family-interface';

export default class FontFamilyClass implements IFontFamily{
    public fontFamily: FontFamilyEnum;

    constructor(type: FontFamilyEnum) {
        this.fontFamily = type;
    }
}