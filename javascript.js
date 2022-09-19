const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const button = document.getElementById('submit')
const add = document.getElementById('add');
const close = document.getElementById('close')

add.addEventListener('click', function() {
    document.getElementById('form').style.display = "block";
    document.getElementById('loginform').style.display = 'block';

});

close.addEventListener('click', function(){
    document.getElementById('form').style.display = "none";
    document.getElementById('loginform').style.display = 'none';

})


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.read = read
    this.info = function() {
        return this.title + ' by ' + this.author + ", " + this.pages + ' pages, ' + this.read
    }
}


let book;

button.addEventListener('click', function() {
    if (bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === '' ) {
        !button;
    }
    else {
        const bookRead = document.querySelector('input[name=choice]:checked')
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
        document.getElementById('formID').reset()
        document.getElementById('form').style.display = "none";
        document.getElementById('loginform').style.display = 'none';
        console.log(book.info());
        myLibrary.push(book);
        addBookToLibrary();
    }
});

const container = document.querySelector('.box');

function addBookToLibrary() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'display: grid; grid-template-columns: 1fr; justify-items:center; padding:30px; text-align: center; font-size: 30px; font-weight: bold; white-space: pre; background-color: #AD6A34; border: black solid 5px; border-radius: 5px;')
    newDiv.textContent = book.title;
    newDiv.textContent += "\r\n";
    newDiv.textContent += "By " + book.author;
    newDiv.textContent += "\r\n";
    newDiv.textContent += book.pages;
    if (book.read === 'unread') {
        const newButton = document.createElement('button');
        newButton.setAttribute('style', 'font-size: 17px; background-color: #B22222; border: solid 2px; border-radius: 10px;')
        newDiv.textContent += "\r\n";
        newButton.textContent = "Not read";
        newDiv.appendChild(newButton)
     }
     else if (book.read === 'read') {
        const newButton = document.createElement('button');
        newButton.setAttribute('style', 'font-size: 17px; background-color: green; border: solid 2px; border-radius: 10px;')
        newDiv.textContent += "\r\n";
        newButton.textContent = "Read";
        newDiv.appendChild(newButton)
     }
     container.appendChild(newDiv);
}


