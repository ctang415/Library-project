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
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + ' by ' + this.author + ", " + this.pages + ' pages, ' + this.read
    }
}


/*button.addEventListener('click', function() {
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
*/

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
    }
});

/*
function clearValue() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.value = '';
}
*/


function addBookToLibrary() {
    
}
