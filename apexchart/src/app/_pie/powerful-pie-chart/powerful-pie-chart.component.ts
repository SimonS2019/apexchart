import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   theme: ApexTheme;
//   title: ApexTitleSubtitle;
// };

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
  dataLabels?: ApexDataLabels;
  theme: ApexTheme;

  //piechart needed as below
  responsive: ApexResponsive[];
  labels?: any;
  //piechart needed as above

  //time line chart as follow:
  // fill: ApexFill;
  // dataLabels?: ApexDataLabels;
  // grid?: ApexGrid;
  // yaxis?: ApexYAxis;
  // xaxis: ApexXAxis;
  // legend?: ApexLegend;
  // plotOptions: ApexPlotOptions;
  // tooltip?: ApexTooltip;
  // colors?: string[];
};

@Component({
  selector: 'app-powerful-pie-chart',
  templateUrl: './powerful-pie-chart.component.html',
  styleUrls: ['./powerful-pie-chart.component.css'],
})
export class PowerfulPieChartComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      title: {
        text: 'This is a Title', //Need, NB: using an empty string will take up some space (5px height?), we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', '', ''
        // margin: 10, // No need, default ?, ready to use
        // offsetX: 0, // No need, default is 0, ready to use
        // offsetY: 0, // No need, default is 0, ready to use
        // floating: false, // No need, default is false, ready to use
        style: {
          fontSize: '18px', //Need,
          fontWeight: 'bold', //Need, String | Number
          // fontFamily:  undefined, // No need,
          color: '#263238', //Need,
        },
      },
      subtitle: {
        text: 'This is a subtitle', //Need, NB: using an empty string will take up some space, we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', '', ''
        // margin: 10, // No need, default ?, ready to use
        // offsetX: 0, // No need, default is 0, ready to use
        // offsetY: 0, // No need, default is 0, ready to use
        // floating: false, // No need, default is false, ready to use
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: undefined,
          color: '#9699a2',
        },
      },
      theme: {
        mode: 'light',   // Need? autocomplete by input? light || dark
        palette: 'palette1', //Need, default is "palette1"
        // palette1 to palette10  https://apexcharts.com/docs/options/theme/#
        monochrome: {
            enabled: false,  //Need, default is false
            // color: '#255aee',  // Need default is #008ffb
            shadeTo: 'light', // Need, default is light. Accepts either light or dark
            shadeIntensity: 0  // What should be the intensity while generating shades Accepts from 0 to 1
        },
    },
      labels: ['Team A12', 'Team B', 'Team C', 'Team D', 'Team E'],
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
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
