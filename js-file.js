const myLibrary = [];

function Book(title, author, page, read = "not yet") {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

Book.prototype.info = function() {
    const info = title + " " + author + ", " + page + ", " + read;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function showCard() {
    for (const book of myLibrary) {
        
    }

    console.table(myLibrary);
}

// Just random book
const Hobbit = new Book("The Hobbit 1000 S2", "Idk", "289", "not yet");
addBookToLibrary(Hobbit);


// Javascript Edit HTML here!
document.addEventListener("DOMContentLoaded", () => {
    showCard();
});

const dialog = document.getElementById("formDialog");
const newBookBtn = document.getElementById("newBook");
const closeBtn = document.querySelector(".close-form");

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    event.preventDefault();

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const page = document.getElementById("page");
    const status = document.getElementById("status");

    let titleBook = title.value;
    let authorBook = author.value;
    let pageBook = page.value;
    let statusBook = status.value;

    const newBook = new Book(titleBook, authorBook, pageBook, statusBook);
    addBookToLibrary(newBook);

    dialog.close();
    showCard()
});

