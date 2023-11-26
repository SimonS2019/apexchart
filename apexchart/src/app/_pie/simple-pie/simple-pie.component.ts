import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
  ApexResponsive,
  ApexTheme,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  // series: ApexAxisChartSeries ApexNonAxisChartSeries;
  chart: ApexChart;
  fill?: ApexFill;
  legend?: ApexLegend;
  xaxis?: ApexXAxis;
  plotOptions?: ApexPlotOptions;
  labels: any;
  responsive: ApexResponsive[];
  theme: ApexTheme;
};
@Component({
  selector: 'app-simple-pie',
  templateUrl: './simple-pie.component.html',
  styleUrls: ['./simple-pie.component.css'],
})
export class SimplePieComponent {
  @ViewChild('chart', { static: false }) chart: ApexCharts | null = null;
  public chartOptions: ChartOptions;
  public chartOptions1: ChartOptions;
  public chartOptions2: ChartOptions;
  // chart: ApexCharts | null = null;

  constructor(private cdr: ChangeDetectorRef) {
    this.chartOptions1 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      theme: {
        mode: 'light', // Front end DTO isDarkMode? 'light' : 'dark'
        palette: 'palette10', //Front-end DTO. basicOptions.selectTheme
        // we have a dropdown has 11 options 'palette1' to 'palette10' and "Same as ngx-charts", can we have a logic like :
        //  if (basicOptions.selectTheme = "Same as ngx-charts") we use  this.chartOptions.colors to overwrite this.chartOptions.theme.palette
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      legend: {
        show: true, //Front-end DTO. basicOptions.enabledLegend
        position: 'right', //Front-end DTO. basicOptions.legendPosition
      },
    };

    this.chartOptions2 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      theme: {
        mode: 'dark', // Front end DTO isDarkMode? 'light' : 'dark'
        palette: 'palette10', //Front-end DTO. basicOptions.selectTheme
        // we have a dropdown has 11 options 'palette1' to 'palette10' and "Same as ngx-charts", can we have a logic like :
        //  if (basicOptions.selectTheme = "Same as ngx-charts") we use  this.chartOptions.colors to overwrite this.chartOptions.theme.palette
      },
      labels: ['Team X', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      legend: {
        show: true, //Front-end DTO. basicOptions.enabledLegend
        position: 'right', //Front-end DTO. basicOptions.legendPosition
      },
    };
    setTimeout(() => {
      // console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.chartOptions = { ...this.chartOptions1 };
    // this.chartOptions.theme.mode = 'light';

    // setTimeout(() => {
    //   // console.log(JSON.stringify(this.chartOptions));
    //   this.chartOptions.theme.mode = 'dark';
    // }, 1000);

    // console.log(JSON.stringify(this.chartOptions));
  }

  testDarkMode() {
    console.log('testDarkMode');
    console.log(this.chartOptions);

    this.chartOptions = {
      ...this.chartOptions1,
      theme: {
        mode: 'dark', // Front end DTO isDarkMode? 'light' : 'dark'
        palette: 'palette10', //Front-end DTO. basicOptions.selectTheme
        // we have a dropdown has 11 options 'palette1' to 'palette10' and "Same as ngx-charts", can we have a logic like :
        //  if (basicOptions.selectTheme = "Same as ngx-charts") we use  this.chartOptions.colors to overwrite this.chartOptions.theme.palette
      },
    };
  }
  testLightMode() {
    console.log('testLightMode');
    // console.log(this.chartOptions);

    this.chartOptions = { ...this.chartOptions1 };
    // this.cdr.detectChanges();
    this.chartOptions = {
      ...this.chartOptions1,
      theme: {
        mode: 'light', // Front end DTO isDarkMode? 'light' : 'dark'
        palette: 'palette10', //Front-end DTO. basicOptions.selectTheme
        // we have a dropdown has 11 options 'palette1' to 'palette10' and "Same as ngx-charts", can we have a logic like :
        //  if (basicOptions.selectTheme = "Same as ngx-charts") we use  this.chartOptions.colors to overwrite this.chartOptions.theme.palette
      },
    };
    console.log(this.chartOptions);
  }

  // testMode() {
  //   var el = document.getElementById('chart');
  //   if (el) {
  //     var chart = new ApexCharts(el, this.chartOptions);
  //     chart.render();
  //   }
  // }
  // testMode() {
  //   var el = document.getElementById('chart');

  //   var chart = new ApexCharts(el, this.chartOptions);
  //   chart.render();
  // }
}
