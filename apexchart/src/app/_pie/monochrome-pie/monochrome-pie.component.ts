import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-monochrome-pie',
  templateUrl: './monochrome-pie.component.html',
  styleUrls: ['./monochrome-pie.component.css'],
})
export class MonochromePieComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
        width: '60%',
        type: 'pie',
      },
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      title: {
        text: 'Number of leads',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
