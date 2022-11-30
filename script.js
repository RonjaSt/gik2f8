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



/* searchField.addEventListener('keyup',(e)=> searchBooks(e.target.value)); */
searchField.addEventListener('keyup',(e)=>   
    renderBookList(
        bookList.filter(({ title, author }) =>{
            const searchTerm= e.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm)>= 0 ||author.toLowerCase().indexOf(searchTerm)>= 0 
        })
    )
);



/* function searchBooks(searchTerm){
    renderBookList(
        bookList.filter(
            ({ title, author }) =>
            title.toLowerCase().indexOf(searchTerm.toLowerCase())>= 0 ||
            author.toLowerCase().indexOf(searchTerm.toLowerCase())>= 0 
        )
    );
} searchBooks('o');*/


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

