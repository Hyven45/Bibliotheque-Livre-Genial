let library = [];

function addBook(book) {
    library.push(book);
}

function getAvailableBooks() {
    library.forEach(book => {
        if (!book.borrowed) {
            console.log(book);
        }
    });
}

function searchByTitle(title) {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        if (book.title.toLowerCase().trim() === title.toLowerCase().trim()) {
            return book;
        }
    }
}

addBook({
    title: 'Le Hobbit de Gollum',
    author: 'Tolkien',
    publicationYear: 2019,
    borrowed: false,
});

addBook({
    title: 'pokemon',
    author: 'hakira',
    publicationYear: 2024,
    borrowed: true,
});

addBook({
    title: 'Harry potter',
    author: 'JK Rowling',
    publicationYear: 2000,
    borrowed: true,
});

console.table(library);

console.log("Nos livres disponibles");
getAvailableBooks();

console.log("Le livre que vous recherchez est");
console.log(searchByTitle('pokemon'));
