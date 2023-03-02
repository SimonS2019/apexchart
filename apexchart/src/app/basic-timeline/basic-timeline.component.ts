

import { Component, ViewChild } from "@angular/core";
import { time } from "console";
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  dataLabels?: ApexDataLabels;
  tooltip: ApexTooltip
  colors: string[];

};

@Component({
  selector: 'app-basic-timeline',
  templateUrl: './basic-timeline.component.html',
  styleUrls: ['./basic-timeline.component.css']
})
export class BasicTimelineComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    // this.chartOptions = {
    //   series: [
    //     {
    //       data: [
    //         {
    //           x: "Code",
    //           y: [
    //             new Date("2019-03-02").getTime(),
    //             new Date("2019-03-04").getTime()
    //           ]
    //         },
    //         {
    //           x: "Test",
    //           y: [
    //             new Date("2019-03-04").getTime(),
    //             new Date("2019-03-08").getTime()
    //           ]
    //         },
    //         {
    //           x: "Validation",
    //           y: [
    //             new Date("2019-03-08").getTime(),
    //             new Date("2019-03-12").getTime()
    //           ]
    //         },
    //         {
    //           x: "Deployment",
    //           y: [
    //             new Date("2019-03-12").getTime(),
    //             new Date("2019-03-18").getTime()
    //           ]
    //         }
    //       ]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "rangeBar"
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: true
    //     }
    //   },
    //   xaxis: {
    //     type: "datetime"
    //   }
    // };


    // legend test
    this.chartOptions = {
      series: [
        {
          name: "on",
          data: [
            {
              x: "on",
              y: [
                1551484805050,
                1551757600000
              ]
            },
            {
              x: "on",
              y: [
                1552003200000,
                1552348800000
              ]
            },
            {
              x: "on",
              y: [
                1552358800000,
                1552867200000
              ]
            }
          ]
        },
        {
          name: "off",
          data: [

            {
              x: "off",
              y: [
                1551657600000,
                1552003200000
              ]
            },

            {
              x: "off",
              y: [
                1552348800000,
                1552867200000
              ]
            }
          ]
        }
      ],
      
      chart: {
        height: 350,
        type: "rangeBar"
      },
      colors: ["#00E396","#e300d8","#e28743"],
      // colors: ["#00E396","#e28743","#e300d8"],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "datetime"
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      tooltip: {
        fillSeriesColor: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        x: {
          show: true,
          format: 'dd MMM HH:mm',
          formatter: undefined,
        },
        

      },
    }

    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));

    }, 1000);
  }
}

