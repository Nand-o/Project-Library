const myLibrary = [];

// Just random book
const Book1 = new Book("Sisi Tergelap Surga", "Brian Khrisna", "304", "on");
addBookToLibrary(Book1);

const Book2 = new Book("Dilan: Dia adalah Dilanku Tahun 1990", "Pidi Baiq", "348", "off");
addBookToLibrary(Book2);

const Book3 = new Book("Seporsi Mie Ayam Sebelum Mati", "Brian Khrisna", "216", "off");
addBookToLibrary(Book3);

function Book(title, author, page, read = "not yet") {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function makeCard(obj) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const title = document.createElement("p");
    title.classList.add("title-card");
    title.textContent = `${obj.title}`;
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
    if (obj.read === "on") {
        let check = "Done Reading";
        status.textContent = `Status Reading: ${check}`;
    } else {
        let check = "Not yet";
        status.textContent = `Status Reading: ${check}`;
    }
    card.appendChild(status);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "Delete this card!";
    removeBtn.addEventListener("click", () => {
        const objTitle = obj.title;
        let index = myLibrary.findIndex((book) => book.title === objTitle);
        myLibrary.splice(index, 1);
        showCard()
    });
    card.appendChild(removeBtn);

    const changeStatus = document.createElement("button");
    changeStatus.classList.add("change");
    changeStatus.textContent = "Change Status Reading";
    changeStatus.addEventListener("click", () => {
        const objTitle = obj.title;
        const objStatus = obj.read;
        let index = myLibrary.findIndex((book) => book.title === objTitle);

        if (objStatus === "on") {
            myLibrary[index].read = "off";
            showCard()
        } else {
            myLibrary[index].read = "on";
            showCard()
        }
    });
    card.appendChild(changeStatus);

    return card
}

function showCard() {
    const container = document.querySelector(".card-container");
    container.textContent = '';

    for (const book of myLibrary) {
        const bookCard = makeCard(book);
        container.appendChild(bookCard);
    }

    const addCard = document.createElement("div");
    addCard.classList.add("addCard");

    const plus = document.createElement("p");
    plus.textContent = "+";
    addCard.appendChild(plus);
    addCard.addEventListener("click", () => {
        dialog.showModal();
    });
    container.appendChild(addCard);
}


// Javascript Edit HTML here!
document.addEventListener("DOMContentLoaded", () => {
    showCard();
});

const dialog = document.getElementById("formDialog");
const newBookBtn = document.getElementById("newBook");
const closeBtn = document.querySelector(".close-form");

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
