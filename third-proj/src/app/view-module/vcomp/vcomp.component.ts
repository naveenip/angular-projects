import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-vcomp',
  templateUrl: './vcomp.component.html',
  styleUrls: ['./vcomp.component.css']
})
export class VcompComponent implements OnInit {

  name: string="";
  response : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getUserData(){
    this.http.get("https://api.github.com/users/"+ this.name)
    .subscribe((response) =>{
      this.response= response;
      console.log(response);
    });
  }
  
}
