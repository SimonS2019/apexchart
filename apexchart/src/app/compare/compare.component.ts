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

  }
}
