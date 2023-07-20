import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexStates,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

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
  dataLabels: ApexDataLabels;
  theme: ApexTheme;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: any[];
  stroke: ApexStroke;
  states: ApexStates;
  grid: ApexGrid;
  fill: ApexFill;
  labels?: any;

  //pie/donut chart needed as below
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  //pie/donut needed as above

  //time line chart as follow:
  // yaxis?: ApexYAxis;
  // xaxis: ApexXAxis;
  // plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-powerful-pie-chart-compare',
  templateUrl: './powerful-pie-chart-compare.component.html',
  styleUrls: ['./powerful-pie-chart-compare.component.css'],
})
export class PowerfulPieChartCompareComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        animations: {
          enabled: true, // Front-end, default is true
          speed: 800, // Lua, default is 800
        },
        foreColor: '#373d3f', // Lua ! important "foreColor" will be overridden if we assign a color to a specific property
        sparkline: {
          // Front-end, important!
          enabled: false,
        },
        toolbar: {
          show: true, // Front-end, important!
          tools: {
            download: true, //Front-end
          },
          export: {
            csv: {
              // LUA, Important! , logic is in LUA
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
            },
            svg: {
              // LUA, Important! , logic is in lua
              filename: 'Test 13223',
            },
            png: {
              // LUA, Important! , logic is in lua
              filename: undefined,
            },
          },
        },
        type: 'donut', //Front-end,  lua to do the logical
      },
      title: {
        text: 'This is a Title', //Lua, NB: using an empty string will take up some space (5px height?), we can use undefined
        align: 'center', //Front-end, default is 'left', Possible Options: 'left', 'center', 'right'
        style: {
          fontSize: '18px', //LUA,
          fontWeight: 'bold', // LUA, String | Number
          color: '#263238', //Lua
        },
      },
      subtitle: {
        text: 'This is a subtitle', //Front-end, NB: using an empty string will take up some space, we can use undefined
        align: 'center', //Front-end, default is 'left', Possible Options: 'left', 'center', 'right'
        style: {
          fontSize: '12px', //LUA,
          fontWeight: 'normal', // LUA
          color: '#9699a2', //Lua
        },
      },
      theme: {
        mode: 'light', // LUA ? but automatic!  light || dark
        // // May confuse theme.mode and chart.background.

        palette: 'palette1', //Front-end, default is "palette1"
        // palette1 to palette10  https://apexcharts.com/docs/options/theme/#
        // // May confuse theme.palette, colors, fill.color
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'], // LUA? but use lua service to do this!
      //In Axis Charts (line / column), labels can be set instead of setting xaxis categories option. While, in pie/donut charts, each label corresponds to value in series array.
      responsive: [],
      legend: {
        show: true, //Front-end, default is true
        position: 'right', ////Front-end, default is right, top, right , bottom, left
        fontSize: '14px', //LUA, default is 12px
        width: undefined, //LUA, undefined is means auto?
        height: undefined, //LUA , undefined is means auto?
        labels: {
          colors: 'red', //LUA,
        },
      },
      dataLabels: {
        enabled: true, //Front-end, default is true
        style: {
          fontSize: '14px', //LUA, default is 12px
          fontWeight: 'bold', //LUA
          colors: undefined, //LUA for pie and dunut chart, because we use 'foreColor'
        },
        background: {
          enabled: true, //LUA, default is false
          // foreColor: '#fff', //LUA
          padding: 4, //LUA
          borderRadius: 2, //LUA
          borderWidth: 3, //LUA
          borderColor: 'gray', //LUA
          opacity: 0.95, //LUA
        },
      },
      tooltip: {
        enabled: true, //Front-end, default is true
        fillSeriesColor: false, //Front-end, default is true , When enabled, fill the tooltip background with the corresponding series color
        theme: 'dark', //LUA, default is dark.
        // Might be a good idea to go against the Apex theme?? Accepts either light or dark
        style: {
          fontSize: '12px', //LUA, default is 12px
        },
        marker: {
          show: true, //Front-end, default is true
        },
      },
      colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'], //LUA
      // // Need? but use lua service to do this! overwrite the theme.palette
      // // May confuse theme.palette, colors, fill.color
      stroke: {
        show: true, //Front-end, default is true
        // width: 2,    //No need, Pie/ Donut need  //LUA
      },
      states: {},
      grid: {},
      fill: {
        type: 'gradient', // Front-end, default is solid 'solid', 'gradient' is good for pie/ donut .'pattern','image' is too fancy
        // type: ['solid', 'gradient'],
      },
      plotOptions: {
        pie: {
          startAngle: -90, // Front-end, default is 0
          endAngle: 45, // Front-end, default is 360
          // startAngle: 0, // Front-end, default is 0
          // endAngle: 360, // Front-end, default is 360
          expandOnClick: true, // // Front-end, true
          offsetY: 0, // LUA
          customScale: 1, // LUA
          dataLabels: {
            offset: 0, // LUA, default is 0
            minAngleToShowLabel: 10, // LUA,
          },
          donut: {
            // if chart.type is 'pie', the follow is not matter
            size: '65%', // Front-end, important!
            // background: 'transparent', // No need, alwary use 'transparent'
            labels: {
              show: true, // Front-end, default is false
              name: {
                show: true, //  Front-end , default is true
                fontSize: '22px', //  LUA
                // fontWeight: 600,// // LUA, use default value is good
                color: undefined, // LUA!
                // offsetY: -10, // LUA?
              },
              value: {
                show: true, //  Front-end , default is true
                fontSize: '16px', //  LUA
                // fontFamily: 'Helvetica, Arial, sans-serif',  // No need
                // fontWeight: 400, // // No need, use default value is good
                color: undefined, // LUA!
                // offsetY: 16,// Might need?
                // formatter: function (val) {
                //   return val
                // }
              },
              total: {
                show: true, //Front-end. default is false
                showAlways: false, //LUA. default is false
                label: 'Total', //LUA
                fontSize: '22px', //LUA
                fontWeight: 600, // LUA
                color: '#373d3f', // LUA
              },
            },
          },
        },
      },
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
