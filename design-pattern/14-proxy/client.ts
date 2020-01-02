/* client.ts */
import BookProxy from './book-proxy';

export default class Client {
    public static userTest() {
        const proxy = new BookProxy();
        return proxy.getBook('Animal Spirits');
    }

    public static adminTest() {
        const proxy = new BookProxy(true);
        proxy.getBook('Animal Spirits');
        proxy.addBook('Lord of the flies');
    }
}
//Client.userTest();

Client.adminTest();
