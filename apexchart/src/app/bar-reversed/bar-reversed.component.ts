



import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  annotations: any; //ApexAnnotations;
  grid: ApexGrid;
  yaxis: any; // ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;

};

@Component({
  selector: 'app-bar-reversed',
  templateUrl: './bar-reversed.component.html',
  styleUrls: ['./bar-reversed.component.css']
})
export class BarReversedComponent {

  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "reversed",
          data: [400, 430, 448, 470, 540, 580, 690]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      annotations: {
        xaxis: [
          {
            x: 500,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396"
              },
              text: "X annotation"
            }
          }
        ],
        yaxis: [
          {
            y: "July",
            y2: "September",
            label: {
              text: "Y annotation"
            }
          }
        ]
      },title: {
        text: "Custom DataLabels",
        align: "center",
        floating: true
      },subtitle: {
        text: "Category Names as DataLabels inside bars",
        align: "center"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
    };
  }
}
