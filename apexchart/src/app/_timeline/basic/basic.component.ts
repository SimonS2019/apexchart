import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Code",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-04").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-08").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-12").getTime()
              ]
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-12").getTime(),
                new Date("2019-03-18").getTime()
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
      xaxis: {
        type: "datetime"
      }
    };
    // setTimeout(() => {
    //   console.log(JSON.stringify(this.chartOptions));
  
    // }, 500);
  }

}
