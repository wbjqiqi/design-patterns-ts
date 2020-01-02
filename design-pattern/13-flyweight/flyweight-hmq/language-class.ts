/* language-class.ts */
import ILanguage from './models/language-interface';

export default class LanguageClass implements ILanguage{
    public type: string;
    public name: string;

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
    }
}