const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const button = document.getElementById('submit')
const add = document.getElementById('add');
const close = document.getElementById('close');
const box = document.querySelector('.box');

add.addEventListener('click', function() {
    document.getElementById('form').style.display = "block";
    document.getElementById('loginform').style.display = 'block';

});

close.addEventListener('click', function(){
    document.getElementById('form').style.display = "none";
    document.getElementById('loginform').style.display = 'none';

})

let myLibrary = [];

/*
class Book {
  constructor(title, author, pages, read, status) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
    this.status = status;
  }
}
*/

class Book {
  constructor(title, author, pages, read, status) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
    this.status = status;
  }
}




let book;

button.addEventListener('click', function() {
    if (title.value === '' || author.value === '' || pages.value === '' ) {
        !button;
    }
    else {
        const bookRead = document.querySelector('input[name=choice]:checked')
        book = new Book(title.value, author.value, pages.value, bookRead.value)
        myLibrary.push(book);
        addBookToLibrary();
        document.getElementById('formID').reset()
        document.getElementById('form').style.display = "none";
        document.getElementById('loginform').style.display = 'none';
    }
});








/*
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.read = read
    this.info = function() {
        return this.title + ' by ' + this.author + ", " + this.pages + ' pages, ' + this.read
    }
}
*/

/*
Book.prototype.toggleStatus = function(status) {
    this.status = status;
}
*/


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
        newButton.setAttribute('style', 'font-size: 15px; background-color: #B22222; border: solid 2px; border-radius: 10px;')
        newDiv.textContent += "\r\n";
        newButton.textContent = "Not read";
        newDiv.appendChild(newButton);
        newButton.addEventListener('click', function() {
                for (let i = 0; i < myLibrary.length; i++) {
                    let b = myLibrary[i].status;              
                    if (b === 'unread') {
                      newButton.textContent = 'Read';
                      newButton.setAttribute('style', 'background-color: green')
                      myLibrary[i].toggleStatus('read');
                    } else {
                      newButton.textContent = 'Not read';
                      newButton.setAttribute('style', 'background-color: #B22222')
                      myLibrary[i].toggleStatus('unread');
                    }
                    if (b === 'read') {
                        newButton.textContent = 'Not read';
                        newButton.setAttribute('style', 'background-color: #B22222')
                        myLibrary[i].toggleStatus('unread');
                      } else {
                        newButton.textContent = 'Read';
                        newButton.setAttribute('style', 'background-color: green')
                        myLibrary[i].toggleStatus('read');
                      }
                  }
    })
}
     else if (book.read === 'read') {
        const newButton = document.createElement('button');
        newButton.setAttribute('style', 'font-size: 15px; background-color: green; border: solid 2px; border-radius: 10px;')
        newDiv.textContent += "\r\n";
        newButton.textContent = "Read";
        newDiv.appendChild(newButton);
        newButton.addEventListener('click', function() {
            for (let i = 0; i < myLibrary.length; i++) {
                let b = myLibrary[i].status;
                if (b === 'read') {
                  newButton.textContent = 'Not read';
                  newButton.setAttribute('style', 'background-color: #B22222')
                  myLibrary[i].toggleStatus('unread');
                } else {
                  newButton.textContent = 'Read';
                  newButton.setAttribute('style', 'background-color: green')
                  myLibrary[i].toggleStatus('read');
                }
          
                if (b === 'unread') {
                  newButton.textContent = 'Read';
                  newButton.setAttribute('style', 'background-color: green')
                  myLibrary[i].toggleStatus('read');
                } else {
                  newButton.textContent = 'Not read';
                  newButton.setAttribute('style', 'background-color: #B22222')
                  myLibrary[i].toggleStatus('unread');
                }
              }
    })
     }
     const remove = document.createElement('button');
     remove.setAttribute('style', 'font-size: 15px; background-color: #999999; border: solid 2px; border-radius: 10px;')
     remove.textContent = "Remove";
     newDiv.appendChild(remove);
     box.appendChild(newDiv);
     remove.addEventListener('click', function() {
        while (newDiv.firstChild) {
            newDiv.removeChild(newDiv.firstChild)
        }
        box.removeChild(newDiv);
     })
}

