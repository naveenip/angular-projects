import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('lineChart',{static:false}) private chartRef;
  chart: any;

  constructor() { }

  ngOnInit() {  
   this.init();
  }
  
  init(){
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], // your labels array
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40], // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
 

}
