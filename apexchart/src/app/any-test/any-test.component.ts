import { Component, ViewChild } from '@angular/core';
import {  ApexOptions } from 'ng-apexcharts';


@Component({
  selector: 'app-any-test',
  templateUrl: './any-test.component.html',
  styleUrls: ['./any-test.component.css']
})
export class AnyTestComponent {
  public chartOptions: ApexOptions | any;

  @ViewChild('chart', { static: false }) chart: any;
  // public chartOptions: ChartOptions;

  constructor() {


    this.chartOptions = {
     series :[
        {
          name: 'Series 1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        labels: {
          style: {
            colors: '#f542b9', // Set the color for y-axis labels
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#f542b9', // Set the color for y-axis labels
          },
        },
      },
      theme: {
        mode: 'dark', // Enable dark mode theme
      },
    };
  }
}


