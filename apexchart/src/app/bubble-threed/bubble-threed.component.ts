


import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexDataLabels,
  ApexTheme,
  ApexYAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  // tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  theme: ApexTheme
};

@Component({
  selector: 'app-bubble-threed',
  templateUrl: './bubble-threed.component.html',
  styleUrls: ['./bubble-threed.component.css']
})
export class BubbleThreedComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Product1",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product2",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product3",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product4",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      chart: {
        height: 350,
        type: "bubble"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      title: {
        text: "3D Bubble Chart"
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
          rotate: 0
        }
      },
      yaxis: {
        max: 70
      },
      theme: {
        palette: "palette2"
      }
    };
  }

  public generateData(baseval: number, count: number, yrange: { min: any; max: any; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      // series.push([baseval, y, z]);
      series.push({x:baseval, y:y});
      baseval += 86400000;
      i++;
    }
    // console.log(series);

    return series;
  }

  public generateDayWiseTimeSeries(baseval: number, count: number, yrange: { min: any; max: any; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({x:baseval, y:y});
      baseval += 86400000;
      i++;
    }
    console.log(series);
    
    return series
    
  }
}
