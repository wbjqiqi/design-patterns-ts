/* character-registry.ts */
import FontFamilyClass from '../font-family-class';
import LanguageClass from '../language-class';
import { FontFamilyEnum } from '../models/font-family-enum';
import IFontFamily from '../models/font-family-interface';

export default class CharacterRegistry {
    private static _instance: CharacterRegistry;
    private _language: LanguageClass;
    private _fontFamilyMap: Map<FontFamilyEnum, IFontFamily> = new Map();

    public static get instance() {
        if (!this._instance) {
            this._instance = new CharacterRegistry();
        }
        return this._instance;
    }

    public get language() {
        if (!this._language) {
            // 懒汉策略，延时创建对象
            this._language = new LanguageClass('Chinese', '中文');
        }
        return this._language;
    }

    public getFontFamilyByType(type: FontFamilyEnum) {
        // 懒汉策略，延时创建对象
        if (!this._fontFamilyMap.has(type)) {
            this._fontFamilyMap.set(type, new FontFamilyClass(type));
        }
        return this._fontFamilyMap.get(type);
    }
}