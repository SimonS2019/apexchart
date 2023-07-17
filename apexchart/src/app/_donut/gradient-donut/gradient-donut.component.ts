import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-gradient-donut',
  templateUrl: './gradient-donut.component.html',
  styleUrls: ['./gradient-donut.component.css']
})
export class GradientDonutComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      labels: [],
      // labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],

      // labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],

      legend: {
        formatter: function(val, opts) {
          return val + " -++ " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
  
    }, 500);
  }

}