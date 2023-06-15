interface Book {
    id: number
    title: string
    description: string
    authors: string
    favorite: string
    fileCover: string
    fileName: string
}

abstract class BooksRepository{
    abstract createBook(book: Book): void
    abstract getBook(id: number): Book | undefined
    abstract getBooks(): Book[]
    abstract updateBook(id: number, book: Book): void
    abstract deleteBook(id: number): void
}