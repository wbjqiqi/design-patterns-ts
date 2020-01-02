/* client.ts */
import { ImageFile, TextFile } from './files';
import SystemFolder from './folder';

export default class Client {
    public static initTree (): SystemFolder {
        let folder1: SystemFolder = new SystemFolder('根文件夹');
        let folder2: SystemFolder = new SystemFolder('图像文件夹');
        let folder3: SystemFolder = new SystemFolder('文本文件夹');

        let image1: ImageFile = new ImageFile('a.jpg');
        let image2: ImageFile = new ImageFile('b.jpg');

        let text1: TextFile = new TextFile('a.txt');
        let text2: TextFile = new TextFile('b.txt');

        folder2.add(image1).add(image2);
        folder3.add(text1).add(text2);
        folder1.add(folder2).add(folder3);

        return folder1;
    }
}
const tree = Client.initTree();
const aJpg = tree.getFileDeep('a.jpg');
console.log(aJpg);
