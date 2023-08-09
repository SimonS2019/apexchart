
import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-range-column-chart',
  templateUrl: './range-column-chart.component.html',
  styleUrls: ['./range-column-chart.component.css']
})
export class RangeColumnChartComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "blue",
          data: [
            {
              x: "Team A",
              y: [1, 5]
            },
            {
              x: "Team B",
              y: [4, 6]
            },
            {
              x: "Team C",
              y: [5, 8]
            },
            {
              x: "Team D",
              y: [3, 11]
            }
          ]
        },
        {
          name: "green",
          data: [
            {
              x: "Team A",
              y: [2, 6]
            },
            {
              x: "Team B",
              y: [1, 3]
            },
            {
              x: "Team C",
              y: [7, 8]
            },
            {
              x: "Team D",
              y: [5, 9]
            }
          ]
        }
      ],
      chart: {
        type: "rangeBar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      }
    };
  }
}
