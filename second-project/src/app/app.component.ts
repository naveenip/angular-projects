import { Component } from '@angular/core';
import { User } from 'src/app/user-card/user.module';
import {HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Second-project App!';
  temp : string = "temp-data";
  user : User;
  //utilityHelper : HelperService;

  constructor(private helper: HelperService){
    this.user = new User();
    this.user.name ="Damon Salvatore";
    this.user.role = "Support Engineer";
    this.user.address= "13th main, Indira Nagar, Bangalore";
    this.user.phone= [
      '98797898778',
      '8776560987'
    ];

    this.helper = helper;
    helper.testMethod('Hey Service you are too helpful! Thanks for your great service.');
  }
}
