import { Component, ViewChild } from '@angular/core';
import * as moment from 'moment';

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
  ApexXAxis,
  ApexYAxis,
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
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;

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
  selector: 'app-lua-example',
  templateUrl: './lua-example.component.html',
  styleUrls: ['./lua-example.component.css'],
})
export class LuaExampleComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        // George Washington
        {
          name: 'George Washington',
          data: [
            {
              x: 'President',
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime(),
              ],
            },
          ],
        },
        // John Adams
        {
          name: 'John Adams',
          data: [
            {
              x: 'President',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
            {
              x: 'Vice President',
              y: [
                new Date(1789, 3, 21).getTime(),
                new Date(1797, 2, 4).getTime(),
              ],
            },
          ],
        },
        // Thomas Jefferson
        {
          name: 'Thomas Jefferson',
          data: [
            {
              x: 'President',
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1809, 2, 4).getTime(),
              ],
            },
            {
              x: 'Vice President',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
            {
              x: 'Secretary of State',
              y: [
                new Date(1790, 2, 22).getTime(),
                new Date(1793, 11, 31).getTime(),
              ],
            },
          ],
        },
        // Aaron Burr
        {
          name: 'Aaron Burr',
          data: [
            {
              x: 'Vice President',
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1805, 2, 4).getTime(),
              ],
            },
          ],
        },
        // George Clinton
        {
          name: 'George Clinton',
          data: [
            {
              x: 'Vice President',
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1812, 3, 20).getTime(),
              ],
            },
          ],
        },
        // John Jay
        {
          name: 'John Jay',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1789, 8, 25).getTime(),
                new Date(1790, 2, 22).getTime(),
              ],
            },
          ],
        },
        // Edmund Randolph
        {
          name: 'Edmund Randolph',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1794, 0, 2).getTime(),
                new Date(1795, 7, 20).getTime(),
              ],
            },
          ],
        },
        // Timothy Pickering
        {
          name: 'Timothy Pickering',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1795, 7, 20).getTime(),
                new Date(1800, 4, 12).getTime(),
              ],
            },
          ],
        },
        // Charles Lee
        {
          name: 'Charles Lee',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1800, 5, 5).getTime(),
              ],
            },
          ],
        },
        // John Marshall
        {
          name: 'John Marshall',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1800, 5, 13).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
          ],
        },
        // Levi Lincoln
        {
          name: 'Levi Lincoln',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1801, 2, 5).getTime(),
                new Date(1801, 4, 1).getTime(),
              ],
            },
          ],
        },
        // James Madison
        {
          name: 'James Madison',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1801, 4, 2).getTime(),
                new Date(1809, 2, 3).getTime(),
              ],
            },
          ],
        },
      ],
      chart: {
        animations: {
          enabled: true, // Need, default is true
          speed: 800, // Need, default is 800
        },
        foreColor: '#373d3f', // Need! important "foreColor" will be overridden if we assign a color to a specific property
        sparkline: {
          enabled: false,
        },
        toolbar: {
          show: true, // Need, important!
          tools: {
            download: true,
          },
          export: {
            csv: {
              // Need, Important! , logic is in lua
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
            },
            svg: {
              // Need, Important! , logic is in lua
              filename: 'Test 13223',
            },
            png: {
              // Need, Important! , logic is in lua
              filename: undefined,
            },
          },
          // autoSelected: 'zoom'  // No for pie / donut
        },
        width: '100%', //Need? if need,lua to do the logical
        type: 'rangeBar', //Need,  lua to do the logical
      },
      title: {
        text: 'This is a Title', //Need, NB: using an empty string will take up some space (5px height?), we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', 'center', 'right'
        floating: false, // No need, default is false, ready to use
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
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          color: '#9699a2',
        },
      },
      theme: {
        mode: 'light', // Need? but automatic!  light || dark
      },
      responsive: [],
      legend: {
        show: true, //Need, default is true
        position: 'right', ////Need, default is right, top, right , bottom, left
        fontSize: '14px', //Need, default is 12px
        width: undefined, //Need, undefined is means auto?
        height: undefined, //Need , undefined is means auto?
      },
      dataLabels: {
        //no Now
      },
      tooltip: {
        enabled: true, //Need, default is true
        followCursor: true, //Need,Pie chart does not work, Timeline is work!
        fillSeriesColor: true, //Time line no work ?
        theme: 'light', //Need, default is dark.
        // Might be a good idea to go against the Apex theme?? Accepts either light or dark
        style: {
          fontSize: '12px', //Need, default is 12px
        },
      },
      colors: [
        '#66DA26',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#3F51B5',
        '#546E7A',
        '#D4526E',
        '#8D5B4C',
        '#F86624',
        '#D7263D',
        '#1B998B',
        '#2E294E',
        '#F46036',
        '#E2C044',
      ],
   
      stroke: {
        // show: true, //No Need, default is false
      },
      states: {
      },
      grid: {
       
      },
      fill: {
        //For timeline chart, these properties is sucks
      },
      plotOptions: {
        bar: {
          horizontal: true, // Need, but for timeline, it alwary true
          barHeight: '50%', // Need
          rangeBarGroupRows: true, //Need, default is false
        },
      },
      xaxis: {
        type: 'datetime', // Need, but alwary "datetime" if chart is timeline
        categories: [], // This property is suck
        tickAmount: undefined, // This property in Timeline not work
        min: undefined, // This property in Timeline not work
        max: undefined, // This property in Timeline not work
        range: undefined, // This property in Timeline not work
        floating: false, // This property in Timeline not work
        decimalsInFloat: undefined, // This property in Timeline not work
        overwriteCategories: undefined, // This property in Timeline not work
        position: 'bottom', // No need
      },
      yaxis: {
        show: true, //Need,
        
      },
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
