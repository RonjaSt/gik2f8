'use strict'

console.log('test');


const bookList = [
    {
    id: 1,
    author:'Brandon Sanderson',
    title:'Mistborn'
    },
    {
        id: 2,
        author:'Brent Weeks',
        title:'The Way Of Shadows'
        },
];

const searchField = document.getElementById('searchField')

searchField.addEventListener('keyup', handleKeyPress);

function handleKeyPress (e)  {
    searchBooks(e.target.value);
}
function searchBooks(searchTerm){
    
    const filteredList= [];
   for(let i = 0; i < bookList.length; i++){
    const title= bookList[i].title.toLowerCase();
    if(title.indexOf(searchTerm.toLowerCase())>= 0) {
        filteredList.push(bookList[i]);

    }  
   }
   renderBookList(filteredList);
}
searchBooks('o');
function renderBookList(bookList){
    
   BookList(bookList);

    const existingElement = document.querySelector('.book-list');
    console.log(existingElement);
    const root = document.getElementById('root');

    if(existingElement){
        root.removeChild(existingElement);
    }
    if(bookList.length >0){
        root.insertAdjacentHTML('beforeend', BookList(bookList));

    }
    
    

 
}

