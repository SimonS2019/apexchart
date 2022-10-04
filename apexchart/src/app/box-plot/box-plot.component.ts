


import { Component, ViewChild } from "@angular/core";
import * as moment from "moment";

import {
  ChartComponent,
  ApexChart,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-box-plot',
  templateUrl: './box-plot.component.html',
  styleUrls: ['./box-plot.component.css']
})
export class BoxPlotComponent  {

  // @ViewChild("chart") chart: ChartComponent;
  @ViewChild('chart', { static: false }) chart: any;
  // public chartOptions: Partial<ChartOptions>;

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          type: "boxPlot",
          data: [
            {
              x: "Jan 2015",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "Jan 2016",
              y: [43, 65, 69, 76, 81]
            },
            {
              x: "Jan 2017",
              y: [31, 39, 45, 51, 59]
            },
            {
              x: "Jan 2018",
              y: [39, 46, 55, 65, 71]
            },
            {
              x: "Jan 2019",
              y: [29, 31, 35, 39, 44]
            },
            {
              x: "Jan 2020",
              y: [41, 49, 58, 61, 67]
            },
            {
              x: "Jan 2021",
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "candlestick"
      },
      title: {
        text: "Basic BoxPlot Chart",
        align: "left"
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#5C4742",
            lower: "#A5978B"
          }
        }
      }
    };
  }

  public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
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
