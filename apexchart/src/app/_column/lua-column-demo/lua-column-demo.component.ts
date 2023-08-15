
import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  theme: ApexTheme;
  title: ApexTitleSubtitle; //order 1
  subtitle: ApexTitleSubtitle;
  colors: any[];

};

@Component({
  selector: 'app-lua-column-demo',
  templateUrl: './lua-column-demo.component.html',
  styleUrls: ['./lua-column-demo.component.css']
})
export class LuaColumnDemoComponent  {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        animations: {
          enabled: true, // Need, default is true
          speed: 800, // Need, default is 800
        },
        height: 'auto', // No need, default is auto, can use format: 400 ,'400','100%'
        stacked: false, // Need!
        // stacked: false, // Need!
        // stackType: 'normal', //'normal' or '100%'
        stackType: '100%', // No for pie / donut
        toolbar: {
          show: true, // Need, important!
          tools: {
            download: true,
          },
        
        },
        // width: '100%', //Need? if need,lua to do the logical
        type: 'bar', //Need,  lua to do the logical
      },
      title: {
        text: 'This is a Title', //Need, NB: using an empty string will take up some space (5px height?), we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', 'center', 'right'

      },
      subtitle: {
        text: 'This is a subtitle', //Need, NB: using an empty string will take up some space, we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', 'center', 'right'

      },
      theme: {
        mode: 'light', // Need? but automatic!  light || dark
        // mode: 'dark', // Need? but automatic!  light || dark
        // // May confuse theme.mode and chart.background.

        palette: 'palette1', //Need, default is "palette1"
      },
      plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '90%',
            barHeight: '100%',
        }
    },
      legend: {
        show: true, //Need, default is true
        position: 'right', ////Need, default is right, top, right , bottom, left
        fontSize: '14px', //Need, default is 12px
      },
      dataLabels: { //no Now
        enabled: false, //Need, default is true
      },
      stroke: {// No now
      },
      xaxis: {
        type: 'category', // Need?
        // type: 'datetime', // Need?
        // type: 'numeric', // Need?
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
        tickAmount: 10,  // This property in Column chart not work
        // overwriteCategories: [  //no need
        //   'Test1',
        //   'Mar',
        //   'Apr',
        //   'May',
        //   'Jun',
        //   'Jul',
        //   'Aug',
        //   'Sep',
        //   'Oct',
        // ], 
        title: {
            text: "Xaxis title demo",
        },
    },
      yaxis: {
        show: true, //Need
        title: { // This property in Timeline not work
            text: "Yaxis title demo",
            rotate: -90,
        }, 
    },
      fill: { //no need
      },
      tooltip: {
        enabled: true, //Need, default is true
      },
      colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    };
  }
}
