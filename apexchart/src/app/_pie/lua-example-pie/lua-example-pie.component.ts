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
  colors?: any[];
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
  selector: 'app-lua-example-pie',
  templateUrl: './lua-example-pie.component.html',
  styleUrls: ['./lua-example-pie.component.css']
})
export class LuaExamplePieComponent  {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],//Lua data
      chart: {
        animations: {
          enabled: true,   //Front-end DTO. basicOptions.animations
        },
        type: 'donut', //Front-end DTO. selectedChartType (5 means pie/ 6 means donut)
        toolbar: {
          show: true, //Front-end DTO. basicOptions.toolbar
          tools: {
            download: true, //Lua hard code. 
          }
        },
      },
      title: {
        text: 'This is a big Title', //Lua hard code. if dont want to show title can set = undefined;
        align: 'center', ///Front-end DTO. basicOptions.titleAlign
        style: {
          fontSize: '18px', //LUA,hard code
        },
      },
      subtitle: {
        text: 'This is a subtitle', //Lua hard code. if dont want to show subtitle can set = undefined;
        align: 'center', //Front-end DTO. basicOptions.subtitleAlign
        style: {
          fontSize: '12px', //LUA,hard code, 
        },
      },
      theme: {
        mode: 'light', // Front end DTO isDarkMode? 'light' : 'dark'
        palette: 'palette10', //Front-end DTO. basicOptions.selectTheme
        // we have a dropdown has 11 options 'palette1' to 'palette10' and "Same as ngx-charts", can we have a logic like :
        //  if (basicOptions.selectTheme = "Same as ngx-charts") we use  this.chartOptions.colors to overwrite this.chartOptions.theme.palette
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'], // //Lua data
      responsive: [],
      legend: {
        show: true, //Front-end DTO. basicOptions.enabledLegend
        position: 'right', //Front-end DTO. basicOptions.legendPosition
      },
      dataLabels: {
        enabled: true, //Front-end DTO. basicOptions.enabledDataLabels
      },
      tooltip: {
        enabled: true, //Front-end DTO. basicOptions.enabledTooltip
      },
      // colors: ['#A300D6', '#66DA26', '#546E7A', '#E91E63', '#FF9800'], // Front end DTO ngxColorScheme,
      stroke: {},
      states: {},
      grid: {},
      fill: {
        type: 'gradient', //Front-end DTO. basicOptions.fillType
      },
      plotOptions: {
        pie: {
          startAngle: 0, //Front-end DTO. pieOptions.startAngle
          endAngle: 90, //Front-end DTO. pieOptions.endAngle
          donut: {
            size: '65%', //Front-end DTO. pieOptions.donutSize
            labels: {
              show: true, //Front-end DTO. pieOptions.donutShowLable
              total: {
                show: true, // Lua hard code
                label: 'Total', // Lua hard code
                fontSize: '22px', // Lua hard code
                fontWeight: 600, // Lua hard code
                color: 'black', // Lua hard code   if Front end DTO isDarkMode? 'light' : 'dark'
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