const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const button = document.getElementById('submit')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + ' by ' + this.author + ", " + this.pages + 'pages, ' + this.read
    }
}

button.addEventListener('click', function() {
    if (bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === '' || bookRead.value === '') {
        !button;
    }
    else {
    myLibrary.push(bookTitle.value);
    myLibrary.push(bookAuthor.value);
    myLibrary.push(bookPages.value);
    myLibrary.push(bookRead.value);
    clearValue();
    }
    });

function clearValue() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.value = '';
}

function addBooksToLibrary() {

}
