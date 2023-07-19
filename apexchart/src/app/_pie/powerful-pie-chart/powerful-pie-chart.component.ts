import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   theme: ApexTheme;
//   title: ApexTitleSubtitle;
// };

export type ChartOptions = {
  // Both means pie chart and donut chart
  // Both necessary, as follows
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  //ApexAxisChartSeries is time line chart needed
  //ApexNonAxisChartSeries  is pie /donut chart needed
  chart: ApexChart;
  // Both necessary, as above

  //Both Option
  title: ApexTitleSubtitle; //order 1
  subtitle: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
  theme: ApexTheme;
  legend: ApexLegend;

  //piechart needed as below
  responsive: ApexResponsive[];
  labels?: any;
  //piechart needed as above

  //time line chart as follow:
  // fill: ApexFill;
  // dataLabels?: ApexDataLabels;
  // grid?: ApexGrid;
  // yaxis?: ApexYAxis;
  // xaxis: ApexXAxis;
  // plotOptions: ApexPlotOptions;
  // tooltip?: ApexTooltip;
  // colors?: string[];
};

@Component({
  selector: 'app-powerful-pie-chart',
  templateUrl: './powerful-pie-chart.component.html',
  styleUrls: ['./powerful-pie-chart.component.css'],
})
export class PowerfulPieChartComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
        sparkline: {
          enabled: false,
        },
      },
      title: {
        text: 'This is a Title', //Need, NB: using an empty string will take up some space (5px height?), we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', 'center', 'right'
        // margin: 10, // No need, default ?, ready to use
        // offsetX: 0, // No need, default is 0, ready to use
        // offsetY: 0, // No need, default is 0, ready to use
        // floating: false, // No need, default is false, ready to use
        style: {
          fontSize: '18px', //Need,
          fontWeight: 'bold', //Need, String | Number
          // fontFamily:  undefined, // No need,
          color: '#263238', //Need,
        },
      },
      subtitle: {
        text: 'This is a subtitle', //Need, NB: using an empty string will take up some space, we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', 'center', 'right'
        // margin: 10, // No need, default ?, ready to use
        // offsetX: 0, // No need, default is 0, ready to use
        // offsetY: 0, // No need, default is 0, ready to use
        // floating: false, // No need, default is false, ready to use
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: undefined,
          color: '#9699a2',
        },
      },
      theme: {
        mode: 'light', // Need? but automatic!  light || dark
        palette: 'palette1', //Need, default is "palette1"
        // palette1 to palette10  https://apexcharts.com/docs/options/theme/#
        monochrome: {
          enabled: false, //Need, default is false
          // color: '#255aee',  // Need default is #008ffb
          shadeTo: 'light', // Need, default is light. Accepts either light or dark
          shadeIntensity: 0, // What should be the intensity while generating shades Accepts from 0 to 1
        },
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'], // Need? but lua service to do this!
      //In Axis Charts (line / column), labels can be set instead of setting xaxis categories option. While, in pie/donut charts, each label corresponds to value in series array.
      responsive: [
        // No, we send the device type to lua, then lua can make a decision
        // {
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 500,
        //       sparkline: {
        //         enabled: true,
        //     }
        //     },
        //     legend: {
        //       position: 'bottom',
        //     }
        //   },
        // },
      ],
      legend: {
        show: true, //Need, default is true
        // showForSingleSeries: false, //No need
        // showForNullSeries: true, //No need
        // showForZeroSeries: true, //No need
        position: 'right', ////Need, default is right, top, right , bottom, left
        // horizontalAlign: 'left', // //No need, 'left', 'center', 'right'
        // floating: false, //No need, default is false
        fontSize: '14px', //Need, default is 12px
        // fontFamily: 'Helvetica, Arial', //No need,
        // fontWeight: 400,//No need,
        // formatter: undefined,//No need,
        // inverseOrder: false,//No need,
        width: undefined, //Need, undefined is means auto?
        height: undefined,//Need , undefined is means auto?
        // tooltipHoverFormatter: undefined,  //No need,
        // customLegendItems: [], //No need,
        // offsetX: 0, //No need,
        // offsetY: 0, //No need,
        // labels: {  //No need,
        //   colors: undefined,  //No need,
        //   useSeriesColors: false, //No need,
        // }, //No need,
        // markers: {  //No need,
        //   width: 12, //No need,
        //   height: 12, //No need,
        //   strokeWidth: 0, //No need,
        //   strokeColor: '#fff', //No need,
        //   fillColors: undefined, //No need,
        //   radius: 12, //No need,
        //   customHTML: undefined, //No need,
        //   onClick: undefined, //No need,
        //   offsetX: 0, //No need,
        //   offsetY: 0, //No need,
        // },
        // itemMargin: {
        //   horizontal: 0,  //No need,
        //   vertical: 0, //No need,
        // },
        // onItemClick: {
        //   toggleDataSeries: true,  //No need,
        // },
        // onItemHover: {
        //   highlightDataSeries: true,  //No need,
        // },
      },
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
