/* character-interface */
import IFontFamily from './font-family-interface';
import ILanguage from './language-interface';

export default interface ICharacterInterface {
    index: number;
    language: ILanguage;
    fontFamily: IFontFamily;
}