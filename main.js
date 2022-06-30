const library = []
let b 
let title
    
const addBookBtn = document.querySelector('#add-book-btn')
const closeBtn = document.querySelector('#close-btn')
const bookshelf = document.querySelector('.bookshelf')
const addBookDiv = document.querySelector('.add-book-div')
const bookTitleInput = addBookDiv.querySelector('input')
const add = document.querySelector('#add')

addBookBtn.addEventListener('click', e => {
    addBookDiv.style.display = 'flex'
    addBookDiv.style.flexDirection = 'column'
    addBookDiv.style.alignItems = 'center'
})

closeBtn.addEventListener('click', e => {
    addBookDiv.style.display = 'none'
})

add.addEventListener('click', e => {
    let currentBook = createBook(bookTitleInput.value)
    addBookToLibrary(currentBook)
    bookTitleInput.value = ''
    console.log(library)
})

function addBookToLibrary(book) {
    b = document.createElement('div')
    title = document.createElement('span')
    b.setAttribute('class', 'book')
    title.setAttribute('class', 'title')
    title.textContent = book.title
    b.appendChild(title)
    bookshelf.append(b)
}

function createBook (title) {
    const book = {
        title: title
    }
    library.push(book)
    return book
}




