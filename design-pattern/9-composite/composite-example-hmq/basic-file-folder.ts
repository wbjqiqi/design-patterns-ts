/* basic-file-folder.ts */
import { AbstractNode } from './abstract-node';
import { NodeTypeEnum } from './node-type-enum';

export abstract class BasicFile extends AbstractNode {
    public add (file: BasicFile): BasicFile {
        console.error('文件类型不支持添加');
        return this;
    }

    public getFileDeep (name: string): BasicFile {
        if (name === this.name) {
            return this;
        }
        return null;
    }
}

export abstract class BasicFolder extends AbstractNode {
    protected constructor () {
        super();
        this.type = NodeTypeEnum.Folder;
        this.children = [];
    }

    public add (file: AbstractNode): BasicFolder {
        this.children.push(file);
        return this;
    }

    public getFileDeep (name: string): AbstractNode {
        if (this.name === name) {
            return this;
        }
        for (let index = 0; index < this.children.length; index++) {
            const node = this.children[index].getFileDeep(name);
            if (node) {
                return node;
            }
        }
        return null;
    }
}