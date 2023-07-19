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

  //piechart needed as below
  responsive: ApexResponsive[];
  labels?: any;
  theme?: ApexTheme;
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
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
