

import { Component, ViewChild } from "@angular/core";
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid
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
};
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent  {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Analysis",
              y: [
                new Date("2019-02-27").getTime(),
                new Date("2019-03-04").getTime()
              ],
              fillColor: "#008FFB"
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-08").getTime()
              ],
              fillColor: "#00E396"
            },
            {
              x: "Coding",
              y: [
                new Date("2019-03-07").getTime(),
                new Date("2019-03-10").getTime()
              ],
              fillColor: "#775DD0"
            },
            {
              x: "Testing",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-12").getTime()
              ],
              fillColor: "#FEB019"
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-12").getTime(),
                new Date("2019-03-17").getTime()
              ],
              fillColor: "#FF4560"
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar",
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1800,
          //Gradually animate one by one every data in the series instead of animating all at once
          animateGradually: {
              enabled: true,
              delay: 150
          },
          //Animate the chart when data is changed and chart is re-rendered.
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      },
      // background: '#fff',
      background: '#c9c9c9',
       brush: {
        enabled: false,
        target: undefined,
        autoScaleYaxis: false
      }

      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          // var a = moment(val[0]);
          // var b = moment(val[1]);
          if (Array.isArray(val)) {

            var a = moment(val[0])// Wed, Oct 5, 2022 4:16 PM
            var b = moment(val[1]) // Wed, Oct 5, 2022 4:16 PM
            // var a = moment.unix(val[0]).format('llll');; // Wed, Oct 5, 2022 4:16 PM
            // var b = moment.unix(val[1]).format('llll');; // Wed, Oct 5, 2022 4:16 PM
            // var a = val[0];
            // var b = val[1];
            // var c =moment.duration(b.diff(a));
            var diff = b.diff(a, "days");

            // console.log(a);
            // console.log(b);
            // // var diff = b.diff(a, "days");
            // console.log(a.diff(b, 'days'));
            return label + ": " + diff + (diff > 1 ? " days" : " day");

          }
          // var a = moment().unix(val[0]).format('llll'); // Wed, Oct 5, 2022 4:16 PM
          ;

          // return label + ": " + diff + (diff > 1 ? " days" : " day");
          return "";
        },
        style: {
          colors: ["#f3f4f5", "#fff"]
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        show: false
      },
      grid: {
        row: {
          colors: ["#f3f4f5", "#fff"],
          opacity: 1
        }
      },
      fill: {
        opacity: 1
      },
    };
  }
}

