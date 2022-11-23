'use strict'

console.log('test');


const bookList = [
    {
    id: 1,
    Author:'Brandon Sanderson',
    title:'Mistborn'
    },
    {
        id: 2,
        Author:'Brent Weeks',
        title:'The Way Of Shadows'
        },
];

const searchField = document.getElementById('searchField')
console.log(searchField)

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
function renderBookList(list){
console.log(list);
}

