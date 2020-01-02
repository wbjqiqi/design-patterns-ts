/* abstract-node.ts */
import { NodeTypeEnum } from './node-type-enum';

export abstract class AbstractNode {
    protected name: string;
    protected type: NodeTypeEnum;
    protected children: AbstractNode[];

    public abstract add(node: AbstractNode): AbstractNode;
    public abstract getFileDeep(name: string): AbstractNode;
}