/* folder.ts */
import { BasicFolder } from './basic-file-folder';

export default class SystemFolder extends BasicFolder{
    constructor(name){
        super();
        this.name = name;
    }
}