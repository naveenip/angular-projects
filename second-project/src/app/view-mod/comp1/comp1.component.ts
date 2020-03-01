import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public books= "";

  constructor(private helper: HelperService, private http: HttpClient) {
    helper.testMethod("Inovking the service method from component");

   }

  ngOnInit() {
    let res= this.http.get('http://localhost:9090/book/viewall') 
    res.subscribe((book:string) => {
                          this.books= book;
                          console.log(book)
                        });
    // console.log(res)
    
  }

  deleteBook(){

  }
}
