import { Component, ViewChild } from '@angular/core';
import * as moment from 'moment';

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
  ApexLegend,
  ApexTooltip,
} from 'ng-apexcharts';

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
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions ={
      series: [
          {
              name: "OFF",
              data: [
                  {
                      x: "Schedule",
                      y: [
                          1685059200000,
                          1685346900000
                      ],
                  },
                  {
                      x: "Schedule",
                      y: [
                          1685350800000,
                          1685372100000
                      ],
                  },
                  {
                      x: "Schedule",
                      y: [
                          1685374200000,
                          1685433300000
                      ],
                  }
              ]
          },
          {
              name: "ON",
              data: [
                  {
                      x: "Schedule",
                      y: [
                          1685692500000,
                          1685696400000
                      ],
                  },
                  {
                      x: "Schedule",
                      y: [
                          1685606100000,
                          1685610000000
                      ],
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
          max: 1685713098000,
          min: 1685059200000
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

    // this.chartOptions = {
    //   series: [
    //     {
    //       name: 'on',
    //       data: [
    //         {
    //           x: 'power',
    //           y: [1551657600000, 1551857600000],
    //         },
    //         {
    //           x: 'power1',
    //           y: [1552057600000, 1552357600000],
    //         },
    //         {
    //           x: 'power',
    //           y: [1552357600000, 1552459600000],
    //         },
    //       ],
    //     },
    //     {
    //       name: 'off',
    //       data: [
    //         {
    //           x: 'power',
    //           y: [1551657600000, 1551857600000],
    //         },
    //         {
    //           x: 'power1',
    //           y: [1552057600000, 1552357600000],
    //         },
    //         {
    //           x: 'power',
    //           y: [1552357600000, 1552459600000],
    //         },
    //       ],
    //     },
    //   ],
    //   chart: {
    //     height: 350,
    //     type: 'rangeBar',
    //     animations: {
    //       enabled: true,
    //       easing: 'easeinout',
    //       speed: 1800,
    //       //Gradually animate one by one every data in the series instead of animating all at once
    //       animateGradually: {
    //         enabled: true,
    //         delay: 150,
    //       },
    //       //Animate the chart when data is changed and chart is re-rendered.
    //       dynamicAnimation: {
    //         enabled: true,
    //         speed: 350,
    //       },
    //     },
    //     // background: '#fff',
    //     background: '#c9c9c9',
    //     brush: {
    //       enabled: false,
    //       target: undefined,
    //       autoScaleYaxis: false,
    //     },
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: true,
    //       distributed: true,
    //       dataLabels: {
    //         hideOverflowingLabels: false,
    //       },
    //     },
    //   },
    //   dataLabels: {
    //     enabled: true,
    //     formatter: function (val, opts) {
    //       var label = opts.w.globals.labels[opts.dataPointIndex];
    //       // var a = moment(val[0]);
    //       // var b = moment(val[1]);
    //       if (Array.isArray(val)) {
    //         var a = moment(val[0]); // Wed, Oct 5, 2022 4:16 PM
    //         var b = moment(val[1]); // Wed, Oct 5, 2022 4:16 PM
    //         // var a = moment.unix(val[0]).format('llll');; // Wed, Oct 5, 2022 4:16 PM
    //         // var b = moment.unix(val[1]).format('llll');; // Wed, Oct 5, 2022 4:16 PM
    //         // var a = val[0];
    //         // var b = val[1];
    //         // var c =moment.duration(b.diff(a));
    //         var diff = b.diff(a, 'days');

    //         // console.log(a);
    //         // console.log(b);
    //         // // var diff = b.diff(a, "days");
    //         // console.log(a.diff(b, 'days'));
    //         return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
    //       }
    //       // var a = moment().unix(val[0]).format('llll'); // Wed, Oct 5, 2022 4:16 PM
    //       // return label + ": " + diff + (diff > 1 ? " days" : " day");
    //       return '';
    //     },
    //     style: {
    //       colors: ['#f3f4f5', '#fff'],
    //     },
    //   },
    //   xaxis: {
    //     type: 'datetime',
    //   },
    //   yaxis: {
    //     show: false,
    //   },
    //   grid: {
    //     row: {
    //       colors: ['#f3f4f5', '#fff'],
    //       opacity: 1,
    //     },
    //   },
    //   fill: {
    //     opacity: 1,
    //   },
    // };
  }
}
