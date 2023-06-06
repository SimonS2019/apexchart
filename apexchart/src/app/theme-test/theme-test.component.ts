import { Component, ViewChild } from '@angular/core';
import {  ApexOptions } from 'ng-apexcharts';



@Component({
  selector: 'app-theme-test',
  templateUrl: './theme-test.component.html',
  styleUrls: ['./theme-test.component.css'],
})
export class ThemeTestComponent {
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
        background: '#111', // Set the background color for the chart
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
