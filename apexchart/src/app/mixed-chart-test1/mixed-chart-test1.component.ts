import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-mixed-chart-test1',
  templateUrl: './mixed-chart-test1.component.html',
  styleUrls: ['./mixed-chart-test1.component.css']
})
export class MixedChartTest1Component  {

 
  // @ViewChild('chart', { static: false }) chart: ChartComponent;
  @ViewChild('chart', { static: false }) chart: any;


  public chartOptions: Partial<ChartOptions>| any;
  // @ViewChild('chart', { static: false }) chart: any;
  // public chartOptions: ChartOptions;

  constructor() {

    const barData = {
      name: "Bar Chart",
      type: "bar",
      data: [10, 20, 30, 40, 50, 60]
    };
    
    const lineData = {
      name: "Line Chart",
      type: "line",
      data: [5, 15, 25, 35, 45, 55]
    };
    const seriesData = [barData, lineData];

    const chartOptions = {
      chart: {
        height: 350,
        type: "line",
      },
      series: seriesData,
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      },
      yaxis: [
        {
          title: {
            text: "Bar Chart",
          },
          opposite: true,
        },
        {
          title: {
            text: "Line Chart",
          },
        },
      ],
    };

    this.chartOptions=chartOptions
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "Website Blog",
    //       type: "column",
    //       data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    //     },
    //     {
    //       name: "Social Media",
    //       type: "line",
    //       data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "line"
    //   },
    //   stroke: {
    //     width: [0, 4]
    //   },
    //   title: {
    //     text: "Traffic Sources"
    //   },
    //   dataLabels: {
    //     enabled: true,
    //     enabledOnSeries: [1]
    //   },
    //   labels: [
    //     "01 Jan 2001",
    //     "02 Jan 2001",
    //     "03 Jan 2001",
    //     "04 Jan 2001",
    //     "05 Jan 2001",
    //     "06 Jan 2001",
    //     "07 Jan 2001",
    //     "08 Jan 2001",
    //     "09 Jan 2001",
    //     "10 Jan 2001",
    //     "11 Jan 2001",
    //     "12 Jan 2001"
    //   ],
    //   xaxis: {
    //     type: "datetime"
    //   },
    //   yaxis: [
    //     {
    //       title: {
    //         text: "Website Blog"
    //       }
    //     },
    //     {
    //       opposite: true,
    //       title: {
    //         text: "Social Media"
    //       }
    //     }
    //   ]
    // };
  }

}
