


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
  ApexGrid,
  ApexLegend
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
  legend?: ApexLegend;

};

@Component({
  selector: 'app-different-color-for-each-bar',
  templateUrl: './different-color-for-each-bar.component.html',
  styleUrls: ['./different-color-for-each-bar.component.css']
})
export class DifferentColorForEachBarComponent {
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
                1551225600000,
                1551657600000
              ],
              fillColor: "#008FFB"
            },
            {
              x: "Design",
              y: [
                1551657600000,
                1552003200000
              ],
              fillColor: "#00E396"
            },
            {
              x: "Coding",
              y: [
                1551916800000,
                1552176000000
              ],
              fillColor: "#775DD0"
            },
            {
              x: "Testing",
              y: [
                1552003200000,
                1552348800000
              ],
              fillColor: "#FEB019"
            },
            {
              x: "Deployment",
              y: [
                1552348800000,
                1552780800000
              ],
              fillColor: "#FF4560"
            }, {
              x: "Analysis",
              y: [
                1552348800000,
                1552780800000
              ],
              fillColor: "#008FFB"
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar",
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
        enabled: false,
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

            console.log(a);
            console.log(b);
            // var diff = b.diff(a, "days");
            console.log(a.diff(b, 'days'));
            return label + ": " + diff + (diff > 1 ? " days" : " day");

          }
          // var a = moment().unix(val[0]).format('llll'); // Wed, Oct 5, 2022 4:16 PM
          ;

          // return label + ": " + diff + (diff > 1 ? " days" : " day");
          return "";
        },
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ["red"]
      },

      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        show: false
      },
      grid: {
        row: {
          colors: ["#f3f4f5", "#fff",],
          opacity: 1
        }
      },
      fill: {
        opacity: 1
      },
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
      
    }, 100);
  }
}

