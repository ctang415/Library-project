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

const container = document.querySelector('.container');

function addBookToLibrary() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'white-space: pre; background-color: #AD6A34;')
    newDiv.textContent = book.title;
    newDiv.textContent += "\r\n";
    newDiv.textContent += book.author;
    newDiv.textContent += "\r\n";
    newDiv.textContent += book.pages;
    if (book.read === 'unread') {
        const newButton = document.createElement('button');
        newDiv.textContent += "\r\n";
        newButton.textContent = "Not read";
        newDiv.appendChild(newButton)
     }
     else if (book.read === 'read') {
        const newButton = document.createElement('button');
        newDiv.textContent += "\r\n";
        newButton.textContent = "Read";
        newDiv.appendChild(newButton)
     }
     container.appendChild(newDiv);
}


/*

            
        }
             book.title;
             book.author;
             book.pages;
             if (book.read === 'unread') {
                const newButton = document.createElement('button');
                newButton.textContent = "Not read";
                container.appendChild(newButton)
                container.appendChild(newDiv);
             }
             else if (book.read === 'read') {
                const newButton = document.createElement('button');
                newButton.textContent = "Read";
                container.appendChild(newButton)
                container.appendChild(newDiv);
             }
        }
*/
