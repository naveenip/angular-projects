import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/book-store/book';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent implements OnInit {
  books: any;
  bookForm;

  constructor(private http:HttpClient, private formBuilder:FormBuilder) {

    this.bookForm = this.formBuilder.group({
      bookId:'',
      name:'',
      author:''
    });
   }

  ngOnInit() {

    this.viewAllBooks();
  }

  viewAllBooks(){
    this.http.get("http://localhost:9090/book/viewall").subscribe(response=>{
      this.books = response;
      console.log(response);
    });
  }

  onSubmit(userData){
   
    var book:Book = new Book(userData.bookId, userData.name, userData.author);
    this.addOrUpdateBook(book);

    console.log("user data is "+ userData.name);
  }

  deleteBook(book){
    alert('Are you sure to delete this book!!'+ book.id);
   //var selectedBook:Book = new Book(book.id, book.name, book.author);
    this.http.delete("http://localhost:9090/book/delete/"+ book.id, book)
    //this.http.delete("http://localhost:9090/book/delete/"+ book.id)
             .subscribe(response=>{
                        console.log(response);
                        this.books = response;
                        //alert("Deleted book with id "+ response ); 
             });

            

           
  }

  addOrUpdateBook(book){
  
    this.http.put("http://localhost:9090/book/addUpdate", book).subscribe(response=>{
        console.log(response);
        this.books = response;
    });

  }

  
}
