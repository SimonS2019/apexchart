


import { Component, ViewChild } from "@angular/core";
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
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
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-08").getTime()
              ]
            },
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
                new Date("2019-03-16").getTime()
              ]
            }
          ]
        },
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-09").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-19").getTime()
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
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          if (Array.isArray(val)) {

            var a = moment(val[0])
            var b = moment(val[1]) 
            var diff = b.diff(a, "days");

            console.log(a);
            console.log(b);
            console.log(a.diff(b, 'days'));
            return  diff + (diff > 1 ? " days" : " day");

          }
          ;

          return "";
        }
      },
      xaxis: {
        type: "datetime"
      },
      legend: {
        position: "top",
      //   labels: {
      //     colors: ['#eb4034','#453938'],
      //     useSeriesColors: false
      // },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ['#eb4034','#453938'],
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
      }
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
      
    }, 150);
  }
}

