import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() numberOfPages; 
  @Output() pageNumberClick = new  EventEmitter<number>();
  pages:number[];

  // temp:number[] =['4','3'];
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);

  }

  pageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber);
  }

}
