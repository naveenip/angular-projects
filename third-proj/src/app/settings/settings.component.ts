import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  routes= [
      {linkname:'profile', url:'profile'},
      {linkname:'contact', url:'contact'}
  ];


  constructor() { }

  ngOnInit() {
  


  }

}
