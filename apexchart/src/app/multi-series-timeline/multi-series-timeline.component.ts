


import { Component, ViewChild } from "@angular/core";
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: string[];

};

@Component({
  selector: 'app-multi-series-timeline',
  templateUrl: './multi-series-timeline.component.html',
  styleUrls: ['./multi-series-timeline.component.css']
})

  export class MultiSeriesTimelineComponent {
    @ViewChild('chart', { static: false }) chart: any;
    public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        
        {
          name: "On",
          data: [
           
            {
              x: "Code",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-11").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-11").getTime(),
                new Date("2019-03-13").getTime()
              ]
            }
          ]
        },
        {
          name: "Off",
          data: [
           
            {
              x: "Code",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-01").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-13").getTime(),
                new Date("2019-03-15").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-18").getTime(),
                new Date("2019-03-20").getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar"
    },
    plotOptions: {
        bar: {
            horizontal: true,
            rangeBarGroupRows: true
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        show: true
    },
    legend: {
        position: "top",
        horizontalAlign: "left"
    },
    tooltip: {
        enabled: true,
        style: {
            fontSize: '0',
        },
        x: {
            show: true,
            format: "HH:mm"
        }
    },
    colors: [
        "#283D51",
        "#86AA3E",
        "#4339C6"
    ],
      grid: {
      row: {
        colors: ['#f3f4f5', '#fff'],
        opacity: 1,
      },
    },
    fill: {
      opacity: 1,
    },
}
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
      
    }, 150);
  }
}

