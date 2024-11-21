const books = document.getElementById('main')
const popup = document.getElementById('popup')
const container = document.getElementById('container')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read_it = document.getElementById('readit')
const add_btn = document.getElementById('popup_btn')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const submit_btn = document.getElementById('submit_btn')
const removeButtons = document.querySelectorAll('.remove')

let myLib = []

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addtolib(book){
    myLib.push(book)
}

function displayLib(){
    for (let i = 0; i < myLib.length; i++){
        let book = myLib[i]
        displayBook(book)
    }
}

//display the books into the page
function displayBook(book){
    const book_card = document.createElement('div')
    book_card.setAttribute('id', myLib.indexOf(book))

    //create, fill, append the title for each book
    const title_display = document.createElement('p')
    title_display.classList.add('cardParas')
    title_display.textContent = `Title: ${book.title}`
    book_card.appendChild(title_display)

    //create, fill, append the author for each book
    const author_display = document.createElement('p')
    author_display.classList.add('cardParas')
    author_display.textContent = `Author: ${book.author}`
    book_card.appendChild(author_display)
    
    //create, fill, append the pages for each book
    const pages_display = document.createElement('p')
    pages_display.classList.add('cardParas')
    pages_display.textContent = `Pages: ${book.pages}`
    book_card.appendChild(pages_display)

    //create, fill, append if they have read it yet? for each book
    const read_display = document.createElement('button')
    if (book.read === true){
        read_display.textContent = "read"
        read_display.classList.add('read-btn')
        book_card.append(read_display)
    } else {
        read_display.textContent = "not read"
        read_display.classList.add('not_read-btn')
        book_card.append(read_display)
    }
    read_display.addEventListener('click', () => {
        if (read_display.textContent === "read"){
            read_display.textContent = "not read"
            read_display.classList.remove('read-btn')
            read_display.classList.add('not_read-btn')
        } else {
            read_display.textContent = "read"
            read_display.classList.remove('not_read-btn')
            read_display.classList.add('read-btn')
        }
    })

    const remove = document.createElement('button')
    remove.setAttribute('id', 'remove')
    remove.textContent = "remove"
    remove.classList.add('remove')
    book_card.append(remove)

    book_card.classList.add('card')
    books.appendChild(book_card)
}

function open_popup(){
    popup.classList.add('open-popup')
    header.classList.add('blur')
    main.classList.add('blur')
}

document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && e.target !== add_btn){
        popup.classList.remove('open-popup')
        header.classList.remove('blur')
        main.classList.remove('blur')
        resetPopup()
    }
})

submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const newBook = new book(title.value, author.value, pages.value, read_it.checked)
    addtolib(newBook)
    displayBook(newBook)
    popup.classList.remove('open-popup')
    header.classList.remove('blur')
    main.classList.remove('blur')
    resetPopup()
})

function resetPopup(){
    title.value = ''
    author.value = ''
    pages.value = ''
    read_it.checked = false
}