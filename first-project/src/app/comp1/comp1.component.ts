import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  msg:any;
  someNum = 3;
  constructor() {
    
   }

  ngOnInit() {
  }


  addNumbers(a: number, b: number){
    return a+b;
  }
}
