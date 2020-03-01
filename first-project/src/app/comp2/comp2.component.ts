import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  user : any;
  @Input("name") userName: string;

  constructor() { }

  ngOnInit() {

    this.user={
      // name: "Yudhistar Pandav",
      name: this.userName,
      role: "Java developer",
      address: [
        "13th main,Indira Nagar,Bangalore",
        "Bazar road shigli, Gadag"
      ],
      phone: [
        "9870789098", "8765476543"
      ]

    }
  }

}
