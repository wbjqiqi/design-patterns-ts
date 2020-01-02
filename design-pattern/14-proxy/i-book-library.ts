/* i-book-library.ts */
export default interface IBookLibrary {
    getBook: (bookName: string) => any;
    addBook: (bookName: string) => any;
    removeBook: (bookName: string) => any;
}