/* files.ts */
import { BasicFile } from './basic-file-folder';
import { NodeTypeEnum } from './node-type-enum';

export class ImageFile extends BasicFile {
    constructor (name: string) {
        super();
        this.name = name;
        this.type = NodeTypeEnum.ImageFile;
    }
}

export class TextFile extends BasicFile {
    constructor (name: string) {
        super();
        this.name = name;
        this.type = NodeTypeEnum.TextFile;
    }
}