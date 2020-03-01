import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user-card/user.module';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input ('userObj') user: User;
  flag: boolean = true;
  btnDesc: string= 'See more';
  
  constructor() { }

  ngOnInit() {

  }

  toggleFun(){
    

    if(!this.flag) 
      this.btnDesc= 'See more';
    else
      this.btnDesc= 'See less';

      this.flag = !this.flag;
  }

}
