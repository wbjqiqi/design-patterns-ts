/* normal-character-class.ts */
import ICharacterInterface from '../models/character-interface';
import FontFamilyClass from '../font-family-class';
import { FontFamilyEnum } from '../models/font-family-enum';
import IFontFamily from '../models/font-family-interface';
import LanguageClass from '../language-class';
import ILanguage from '../models/language-interface';

export default class NormalCharacterClass implements ICharacterInterface {
    // 文字固定是中文
    public language: ILanguage = new LanguageClass('Chinese', '中文');
    public index: number;
    public fontFamily: IFontFamily;

    constructor(index: number, type: FontFamilyEnum) {
        this.index = index;
        this.fontFamily = new FontFamilyClass(type);
    }
}