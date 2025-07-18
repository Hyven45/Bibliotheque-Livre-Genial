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
    return null; // si pas trouvé
}

function borrowBook(title) {
    const book = library.find(b => b.title.toLowerCase().trim() === title.toLowerCase().trim());
    if (!book) {
        console.log(`Le livre "${title}" n'a pas été trouvé.`);
    } else if (book.borrowed) {
        console.log(`Le livre "${title}" est déjà emprunté.`);
    } else {
        book.borrowed = true;
        console.log(`Le livre "${title}" a bien été emprunté.`);
    }
}

function returnBook(title) {
    const book = library.find(b => b.title.toLowerCase().trim() === title.toLowerCase().trim());
    if (!book) {
        console.log(`Le livre "${title}" n'a pas été trouvé.`);
    } else if (!book.borrowed) {
        console.log(`Le livre "${title}" n'est pas emprunté.`);
    } else {
        book.borrowed = false;
        console.log(`Le livre "${title}" a bien été retourné.`);
    }
}

//pour cette section je suis aller voir des exemples sur internet
function searchBooks(criteria) {
    return library.filter(book => {
      let match = true;
      if (criteria.author) {
        match = match && book.author.toLowerCase().includes(criteria.author.toLowerCase().trim());
      }
      if (criteria.publicationYear) {
        match = match && book.publicationYear === criteria.publicationYear;
      }
      return match;
    });
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

addBook({
    title: 'Witcher',
    author: 'Tolkien encore',
    publicationYear: 2004,
    borrowed: false,
});

console.table(library);

console.log("Nos livres disponibles");
getAvailableBooks();

console.log("Le livre que vous recherchez est");
console.log(searchByTitle('pokemon'));

borrowBook('Witcher');    
borrowBook('pokemon');   
returnBook('pokemon');       
returnBook('Witcher');   

console.log(searchBooks({ author: 'Tolkien' }));
console.log(searchBooks({ publicationYear: 2019 }));
console.log(searchBooks({ author: 'Tolkien', publicationYear: 2004 }));
