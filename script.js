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
    let html =` <ul class="book-list rounded-md border-2 border-zinc-400 bg w-full mx-auto">`;
                
for (let i = 0; i< bookList.length; i++){
        html += `<li 
        class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-amber-500 last:border-b-0 border-b border-zinc-700 cursor-pointer">
        ${bookList[i].author} -${bookList[i].title}
        </li>`; 

}

    html += ` </ul>`;
        
    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);
    const root = document.getElementById('root');

    if(existingElement){
        root.removeChild(existingElement);
    }
    
    root.insertAdjacentHTML('beforeend',html);


}

