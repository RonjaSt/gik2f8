'use strict'

console.log('test');

const searchInput = null;
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
function handleKeyPress (input)  {
    searchBooks(input);
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

