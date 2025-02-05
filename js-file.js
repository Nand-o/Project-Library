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

function makeCard(obj) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const title = document.createElement("p");
    title.classList.add("title-card");
    title.textContent = `Title Book: ${obj.title}`;
    card.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("author-card");
    author.textContent = `Author: ${obj.author}`;
    card.appendChild(author);

    const page = document.createElement("p");
    page.classList.add("page-card");
    page.textContent = `Page Number: ${obj.page}`;
    card.appendChild(page);

    const status = document.createElement("p");
    status.classList.add("status-card");
    status.textContent = `Status Reading: ${obj.read}`;
    card.appendChild(status);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-button");
    removeBtn.textContent = "Delete this card!";
    card.appendChild(removeBtn);

    return card
}

function showCard() {
    const container = document.querySelector(".card-container");
    container.textContent = '';

    for (const book of myLibrary) {
        const bookCard = makeCard(book);
        container.appendChild(bookCard);
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

    title.value = "";
    author.value = "";
    page.value = "";
    status.value = "";

    dialog.close();
    showCard()
});

const removeBtn = document.querySelector(".remove-button");

removeBtn.addEventListener(("click"), () => {
    alert("anjing bingung gw");
});