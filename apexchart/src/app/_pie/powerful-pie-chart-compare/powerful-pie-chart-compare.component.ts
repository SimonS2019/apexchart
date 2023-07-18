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
  dataLabels?: ApexDataLabels;

  //piechart needed as below
  responsive: ApexResponsive[];
  labels?: any;
  theme?: ApexTheme;
  title?: ApexTitleSubtitle;
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
  selector: 'app-powerful-pie-chart-compare',
  templateUrl: './powerful-pie-chart-compare.component.html',
  styleUrls: ['./powerful-pie-chart-compare.component.css']
})
export class PowerfulPieChartCompareComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
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
