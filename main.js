let myLibrary = [];
//store books here
const library  = document.querySelector('.library')
const bookInfoInput = document.querySelector('.book-info-input')
const bookInfoInputAddBtn = bookInfoInput.querySelector('button')
bookInfoInputAddBtn.addEventListener('click', e => {
    closeInputs()
    const data = getInputData()
    addBookToLibrary(data.author, data.title, data.pages, data.read)

})
function storeLibrary (myLibrary) {
    
}

const authorInput = document.querySelector('#author-input')
const titleInput = document.querySelector('#title-input')
const pagesInput = document.querySelector('#pages-input')
const readStatusInput = document.querySelector('#read-status-input')


const inputs = bookInfoInput.querySelectorAll('input')

const closeBookInfoInput = document.querySelector('.close')
closeBookInfoInput.addEventListener('click', e => {
    closeInputs()
})

const addBookBtn = document.querySelector('#add-book-btn')

addBookBtn.addEventListener('click', e => {
    bookInfoInput.style.display = 'flex'
    bookInfoInput.style.visibility = 'visible'
    bookInfoInput.style.opacity = '1'
    const books = document.querySelectorAll('.book')
    books.forEach(book => book.addEventListener('dblclick', e => {
        e.targer.parentNode.parentNode.removeChild(e.target)
    }))
})

window.addEventListener('load', e => {

    displayBooks(myLibrary)
    
})


function Book(author, title, pages, read) {
    this.author = author 
    this.title = title 
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(author,title, pages, read) {
    const book = new Book(author, title, pages, read)
    myLibrary.push(book)
    displayBooks(myLibrary)
}

function displayBooks (l) {

    library.innerHTML = ''
    let book

    let front
    let frontTitle
    let frontAuthor

    let back
    let bookInfoP
    let backTitle
    let backAuthor
    let backPages
    let backReadStatus

    for (const b of l) {
        book = document.createElement('div')
        book.setAttribute('class', 'book')

        front = document.createElement('div')
        front.setAttribute('class', 'front')
        frontTitle = document.createElement('p')
        frontTitle.setAttribute('id', 'front-title')
        frontTitle.textContent = b.title
        frontAuthor = document.createElement('p')
        frontAuthor.setAttribute('id', 'front-author')
        frontAuthor.textContent = b.author
        front.appendChild(frontTitle)
        front.appendChild(frontAuthor)
        

        back = document.createElement('div')
        back.setAttribute('class', 'back')
        bookInfoP = document.createElement('p')
        bookInfoP.textContent = 'Book Info'
        backTitle = document.createElement('p')
        backTitle.setAttribute('id', 'title')
        backTitle.textContent = b.title
        backAuthor = document.createElement('p')
        backAuthor.setAttribute('id', 'author')
        backAuthor.textContent = b.author
        backPages = document.createElement('p')
        backPages.setAttribute('id', 'pages')
        backPages.textContent = b.pages
        backReadStatus = document.createElement('p')
        backReadStatus.setAttribute('id', 'read')
        backReadStatus.textContent = b.read
        back.appendChild(bookInfoP)
        back.appendChild(backTitle)
        back.appendChild(backAuthor)
        back.appendChild(backPages)
        back.appendChild(backReadStatus)
        

        book.appendChild(front)
        book.appendChild(back)
        library.appendChild(book)
        const books = document.querySelectorAll('.book')
        books.forEach(book => book.addEventListener('mouseenter', e => {
            e.target.style.transform = 'rotateY(180deg)'
        })) 

        books.forEach(book => book.addEventListener('mouseleave', e => {
            e.target.style.transform = 'rotateY(0deg)'
        }))
    }
}


function getInputData() {
    const author = authorInput.value
    const title = titleInput.value
    const pages = pagesInput.value
    const readStatus = readStatusInput.value 

    const book = {
        author : author, 
        title: title,
        pages: pages,
        read : readStatus
    }

    return book

}

function closeInputs () {

    setTimeout(function displayNone () {
        bookInfoInput.style.display = 'none'
        inputs.forEach(input => input.value = '')
    }, 600)

    bookInfoInput.style.visibility = 'none'
    bookInfoInput.style.opacity = '0'
    
}


