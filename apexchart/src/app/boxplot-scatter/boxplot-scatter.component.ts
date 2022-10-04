// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-boxplot-scatter',
//   templateUrl: './boxplot-scatter.component.html',
//   styleUrls: ['./boxplot-scatter.component.css']
// })
// export class BoxplotScatterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexChart,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexTooltip,
  ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis,
  tooltip: ApexTooltip,
  plotOptions?: ApexPlotOptions;
  colors: string[]
};

@Component({
  selector: 'app-boxplot-scatter',
  templateUrl: './boxplot-scatter.component.html',
  styleUrls: ['./boxplot-scatter.component.css']
})
export class BoxplotScatterComponent   {
  // @ViewChild("chart") chart: ChartComponent;
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;
  // public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'box',
          type: 'boxPlot',
          data: [
            {
              x: new Date('2017-01-01').getTime(),
              y: [54, 66, 69, 75, 88]
            },
            {
              x: new Date('2018-01-01').getTime(),
              y: [43, 65, 69, 76, 81]
            },
            {
              x: new Date('2019-01-01').getTime(),
              y: [31, 39, 45, 51, 59]
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: [39, 46, 55, 65, 71]
            },
            {
              x: new Date('2021-01-01').getTime(),
              y: [29, 31, 35, 39, 44]
            }
          ]
        },
        {
          name: 'outliers',
          type: 'scatter',
          data: [
            {
              x: new Date('2017-01-01').getTime(),
              y: 32
            },
            {
              x: new Date('2018-01-01').getTime(),
              y: 25
            },
            {
              x: new Date('2019-01-01').getTime(),
              y: 64
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: 27
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: 78
            },
            {
              x: new Date('2021-01-01').getTime(),
              y: 15
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "boxPlot"
      },
      colors: ['#008FFB', '#FEB019'],
title: {
  text: 'BoxPlot - Scatter Chart',
  align: 'left'
},
xaxis: {
  type: 'datetime',
  tooltip: {
    formatter: function(val) {
      return new Date(val).getFullYear().toString()
    }
  }
},
tooltip: {
  shared: false,
  intersect: true
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
