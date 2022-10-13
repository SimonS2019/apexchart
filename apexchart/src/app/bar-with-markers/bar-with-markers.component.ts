

import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-bar-with-markers',
  templateUrl: './bar-with-markers.component.html',
  styleUrls: ['./bar-with-markers.component.css']
})
export class BarWithMarkersComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2012",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2013",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      colors: ["#00E396"],
      dataLabels: {
        formatter: function (val, opts) {
          const goals =
            opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .goals;

          // if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          // }
          // return val;
        }
        // formatter: function(val, opt) {
        //   return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        // }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"]
        }
      }
    };
  }
}
