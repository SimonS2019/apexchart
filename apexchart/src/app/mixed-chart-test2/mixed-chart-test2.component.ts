import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-mixed-chart-test2',
  templateUrl: './mixed-chart-test2.component.html',
  styleUrls: ['./mixed-chart-test2.component.css']
})
export class MixedChartTest2Component {
  @ViewChild('chart', { static: false }) chart: any;


  public chartOptions: Partial<ChartOptions> | any;


  constructor() {
console.log(new Date("2021-01-01").getTime());
console.log(new Date("2021-02-01").getTime());
console.log(new Date("2021-03-01").getTime());
console.log(new Date("2021-05-01").getTime());
console.log(new Date("2021-06-01").getTime());
console.log(new Date("2021-07-01").getTime());

    const timelineData = {
      name: "Timeline Chart",
      type: "rangeBar",
      data: [
        {
          x: "Project 1",
          // y: [1609459200000,1619827200000]

          y: [new Date("2021-01-01").getTime(), new Date("2021-05-01").getTime()]
        },
        {
          x: "Project 2",
          // y: [1612137600000,1622505600000]
          y: [new Date("2021-02-01").getTime(), new Date("2021-06-01").getTime()]
        },
        {
          x: "Project 3",
          // y: [1614556800000,1625097600000]
          y: [new Date("2021-03-01").getTime(), new Date("2021-07-01").getTime()]
        }
      ]
    };

    const lineData = {
      name: "Line Chart",
      type: "line",
      data: [10, 20, 30, 40, 50, 60]
    };

    // Combine the data into a single array
    const seriesData = [timelineData, lineData];
    // const seriesData = [timelineData];
    // const seriesData = [barData, lineData];
    // const seriesData = [lineData, barData];


    const chartOptions = {
      chart: {
        height: 350,
        type: "line",
      },
      series: seriesData,
      xaxis: {
        type: "datetime",
        tickAmount: 6,
        labels: {
          format: "MMM yyyy"
        }
      },
      yaxis: [
        {
          title: {
            text: "Timeline Chart",
          },
          opposite: true,
        },
        {
          title: {
            text: "Line Chart",
          },
        },
      ],
      tooltip: {
        x: {
          format: "MMM yyyy"
        },
        y: {
          formatter: function(value:any, { seriesIndex }:any) {
            if (seriesIndex === 0) {
              return new Date(value).toLocaleDateString();
            } else {
              return value;
            }
          }
        }
      }
    };

    // Set the chart options
    // const chartOptions = {
    //   chart: {
    //     height: 350,
    //     type: "line",
    //   },
    //   series: seriesData,
    //   xaxis: {
    //     type: "datetime",
    //     tickAmount: 6,
    //     labels: {
    //       formatter: function (value: any) {
    //         return new Date(value).toLocaleDateString();
    //       }
    //     }
    //   },
    // }

    this.chartOptions = chartOptions;
  }
}
