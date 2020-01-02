/* flyweight-character-class.ts */
import ICharacterInterface from '../models/character-interface';
import { FontFamilyEnum } from '../models/font-family-enum';
import IFontFamily from '../models/font-family-interface';
import ILanguage from '../models/language-interface';
import CharacterRegistry from './character-registry';

export default class FlyweightCharacterClass implements ICharacterInterface {
    public language: ILanguage = CharacterRegistry.instance.language;
    public index: number;
    public fontFamily: IFontFamily;

    constructor(index: number, type: FontFamilyEnum) {
        this.index = index;
        this.fontFamily = CharacterRegistry.instance.getFontFamilyByType(type);
    }
}