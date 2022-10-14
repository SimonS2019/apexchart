


import { Component, ViewChild } from "@angular/core";
import * as moment from "moment";

import {
  ChartComponent,
  ApexChart,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexAxisChartSeries,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-horizontal-boxplotchart',
  templateUrl: './horizontal-boxplotchart.component.html',
  styleUrls: ['./horizontal-boxplotchart.component.css']
})
export class HorizontalBoxplotchartComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Category A",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "Category B",
              y: [43, 65, 69, 76, 81]
            },
            {
              x: "Category C",
              y: [31, 39, 45, 51, 59]
            },
            {
              x: "Category D",
              y: [39, 46, 55, 65, 71]
            },
            {
              x: "Category E",
              y: [29, 31, 35, 39, 44]
            },
            {
              x: "Category F",
              y: [41, 49, 58, 61, 67]
            },
            {
              x: "Category G",
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],

      chart: {
        height: 350,
        type: "boxPlot"
      },
      title: {
        text: "Horizontal BoxPlot Chart",
        align: "left"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%"
        },
        boxPlot: {
          colors: {
            upper: "#e9ecef",
            lower: "#f8f9fa"
          }
        }
      },
      stroke: {
        colors: ["#6c757d"]
      }
    };
  }

  public generateDayWiseTimeSeries(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
