import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexStates,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  // Both means pie chart and donut chart
  // Both necessary, as follows
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  //ApexAxisChartSeries is time line chart needed
  //ApexNonAxisChartSeries  is pie /donut chart needed
  chart: ApexChart;
  // Both necessary, as above

  //Both Option
  title: ApexTitleSubtitle; //order 1
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  theme: ApexTheme;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: any[];
  stroke: ApexStroke;
  states: ApexStates;
  grid: ApexGrid;
  fill: ApexFill;
  labels?: any;

  //pie/donut chart needed as below
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  //pie/donut needed as above

  //time line chart as follow:
  // yaxis?: ApexYAxis;
  // xaxis: ApexXAxis;
  // plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-sparkline-example-pie',
  templateUrl: './sparkline-example-pie.component.html',
  styleUrls: ['./sparkline-example-pie.component.css']
})
export class SparklineExamplePieComponent  {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        animations: {
          enabled: true, 
        },
        sparkline: {
          enabled: false,
        },
        toolbar: {
          show: true, // Front-end, important!
        },
        type: 'donut', //Front-end,  
      },
      title: {
        text: 'This is a big Title', //Lua
        align: 'center', //Front-end, default is 'left', Possible Options: 'left', 'center', 'right'
        style: {
          fontSize: '18px', //LUA,
        },
      },
      subtitle: {
        text: 'This is a subtitle', //Lua, 
        align: 'center', //Front-end, default is 'left', Possible Options: 'left', 'center', 'right'
        style: {
          fontSize: '12px', //LUA, 
        },
      },
      theme: {
        mode: 'light', // Front end dto decide
        palette: 'palette10', //Front-end, default is "palette1"
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'], // LUA? but use lua service to do this!
      responsive: [],
      legend: {
        show: true, //Front-end, default is true
        position: 'right', ////Front-end, default is right, top, right , bottom, left
      },
      dataLabels: {
        enabled: true, //Front-end, default is true
      },
      tooltip: {
        enabled: true, //Front-end, default is true
      },
      colors: ['#A300D6', '#66DA26', '#546E7A', '#E91E63', '#FF9800'], //LUA
      stroke: {},
      states: {},
      grid: {},
      fill: {
        type: 'gradient', // Front-end, default is solid 'solid', 'gradient' is good for pie/ donut .'pattern','image' is too fancy
      },
      plotOptions: {
        pie: {
          startAngle: 0, // Front-end, default is 0
          endAngle: 90, // Front-end, default is 360F
          donut: {
            size: '65%', // Front-end, important!
            labels: {
              show: true, // Front-end, default is false
              total: {
                show: true, // Lua 
                label: 'Total', //LUA
                fontSize: '22px', //LUA
                fontWeight: 600, // LUA
                color: 'black', // theme mode light = black/ #fff 
              },
            },
          },
        },
      },
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}