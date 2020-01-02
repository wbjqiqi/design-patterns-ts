/* save-characters.ts */
import FlyweightCharacterClass from './flyweight-way/flyweight-character-class';
import ICharacterInterface from './models/character-interface';
import { FontFamilyEnum } from './models/font-family-enum';
import NormalCharacterClass from './normal-way/normal-character-class';

export default class SaveCharacters {
    public static normalWay() {
        const charactersList: ICharacterInterface[] = [];
        for (let i = 0; i < 200000; i++) {
            // 模拟随机生成类型
            const type = Math.random() > 0.5 ? FontFamilyEnum.Song : FontFamilyEnum.You;
            charactersList.push(new NormalCharacterClass(i, type));
        }
        return charactersList;
    }

    public static flyweightWay() {
        const charactersList: ICharacterInterface[] = [];
        for (let i = 0; i < 200000; i++) {
            // 模拟随机生成类型
            const type = Math.random() > 0.5 ? FontFamilyEnum.Song : FontFamilyEnum.You;
            charactersList.push(new FlyweightCharacterClass(i, type));
        }
        return charactersList;
    }
}
const normalWayCharacters = SaveCharacters.normalWay();
const flyweightWayCharacters = SaveCharacters.flyweightWay();
console.log(normalWayCharacters, flyweightWayCharacters);