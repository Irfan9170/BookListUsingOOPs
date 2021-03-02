class Book {
    constructor(title,author,isbn){

        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}

class UI {
    addBookList(book) {

        const list = document.getElementById('book-list');

        const row =document.createElement('tr');
    
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    
    clearfield(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    
    }
   showAlert(msg,className){

    const div = document.createElement('div');

    div.className=`alert ${className}`;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div,form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
        
    }, 2000);

    
   }
   deleteBook(target) {
    


    if(target.className=='delete'){
        target.parentElement.parentElement.remove();
    }
    

}}

document.getElementById('book-form').addEventListener('submit',function (e) {
     
    const title= document.getElementById('title').value;
    const author= document.getElementById('author').value;
    const isbn= document.getElementById('isbn').value;

     e.preventDefault();

     const book = new Book (title,author,isbn);

     const ui = new UI();

     if(title==='' || author==='' || isbn=== ''){
        
        ui.showAlert('Please enter the value','error');

     } else {
        ui.addBookList(book);

        ui.showAlert('Book added','success')

        ui.clearfield();
     }

    

})


document.getElementById('book-list').addEventListener('click',function (e) {

    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Deleted','success');
    // console.log("clicked");
    e.preventDefault();
    
})