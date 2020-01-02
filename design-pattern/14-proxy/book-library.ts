/* book-library.ts */
import IBookLibrary from './i-book-library';

export default class BookLibrary implements IBookLibrary{
    // 实例可能占用内存较多
    private static bookList: string[];

    constructor() {
        if (!BookLibrary.bookList) {
            BookLibrary.bookList = [];
            // 创建实例时间长
            const time = Date.now() + 10000;
            while (Date.now() < time) {};
            BookLibrary.bookList.push('Harry Potter');
            BookLibrary.bookList.push('Animal Spirits');
            BookLibrary.bookList.push('Tuesdays with Morrie');
        }
    }

    public getBook(bookName: string) {
        const index = BookLibrary.bookList.findIndex(book => book === bookName);
        if (index !== -1) {
            return BookLibrary.bookList[index];
        } else {
            throw new Error(`can not find ${bookName}`);
        }
    }

    public addBook(bookName: string) {
        const index = BookLibrary.bookList.findIndex(book => book === bookName);
        if (index !== -1) {
            throw new Error(`already has ${bookName}`);
        } else {
            BookLibrary.bookList.push(bookName);
        }
    }

    public removeBook(bookName: string) {
        const index = BookLibrary.bookList.findIndex(book => book === bookName);
        if (index !== -1) {
            BookLibrary.bookList.splice(index, 1);
        } else {
            throw new Error(`can not find ${bookName}`);
        }
    }
}