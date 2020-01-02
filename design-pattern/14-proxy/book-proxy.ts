import BookLibrary from './book-library';
import IBookLibrary from './i-book-library';

export default class BookProxy implements IBookLibrary {
    private readonly bookLibrary: BookLibrary;
    private readonly isAdmin: boolean;

    constructor(isAdmin?: boolean) {
        this.isAdmin = isAdmin;
        // 给出提示消息
        console.log('正在创建中，请等待');
        this.bookLibrary = new BookLibrary();
        console.log('创建完成');
    }

    public getBook(bookName: string) {
        return this.bookLibrary.getBook(bookName);
    }

    public addBook(bookName: string) {
        if (!this.isAdmin) {
            throw new Error('Sorry, you have no right to operate');
        }
        return this.bookLibrary.addBook(bookName);
    }

    public removeBook(bookName: string) {
        if (!this.isAdmin) {
            throw new Error('Sorry, you have no right to operate');
        }
        return this.bookLibrary.removeBook(bookName);
    }
}