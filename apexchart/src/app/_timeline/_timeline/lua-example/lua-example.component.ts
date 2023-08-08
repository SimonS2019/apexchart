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
    console.log(new Date(1789, 3, 30).getTime());
    
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
          enabled: true, //Front-end DTO. basicOptions.animations
        },
        type: 'rangeBar',  //Front-end DTO. selectedChartType (0 means timeline)
        toolbar: {
          show: true, //Front-end DTO. basicOptions.toolbar
          tools: {
            download: true, //Lua hard code. 
          },
          export: {   //Lua ? 
            csv: { //Lua ? 
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
            },
            svg: {  //Lua ? 
              filename: 'Test 13223',
            },
            png: { //Lua ? 
              filename: undefined,
            },
          },
          // autoSelected: 'zoom'  // No for pie / donut
        },
        height:300  // Front-end DTO widgetContentHeight 
      },
      title: {
        text: 'This is a big Title', //Lua hard code. if dont want to show title can set = undefined;
        align: 'center', ///Front-end DTO. basicOptions.titleAlign
        style: {
          fontSize: '18px', //LUA,hard code
        },
      },
      subtitle: {
        text: 'This is a subtitle', //Lua hard code. if dont want to show subtitle can set = undefined;
        align: 'center', //Front-end DTO. basicOptions.subtitleAlign
        style: {
          fontSize: '12px', //LUA,hard code, 
        },
      },
      theme: {
        mode: 'light', // Front end DTO isDarkMode? 'light' : 'dark'
        palette: 'palette10', //Front-end DTO. basicOptions.selectTheme
        // we have a dropdown has 11 options 'palette1' to 'palette10' and "Same as ngx-charts", can we have a logic like :
        //  if (basicOptions.selectTheme = "Same as ngx-charts") we use  this.chartOptions.colors to overwrite this.chartOptions.theme.palette
      },
      responsive: [],
      legend: {
        show: true, //Front-end DTO. basicOptions.enabledLegend
        position: 'right', //Front-end DTO. basicOptions.legendPosition
      },
      dataLabels: {
        //no Now
      },
      tooltip: {
        enabled: true, //Front-end DTO. basicOptions.enabledTooltip
      },
      colors: [  // Front end DTO ngxColorScheme,
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
      },
      states: {
      },
      grid: {
      },
      fill: {
      },
      plotOptions: {
        bar: {
          horizontal: true, // Lua hard code
          barHeight: '50%', //  //Front-end DTO. pieOptions.startAngle
          rangeBarGroupRows: true,  //Front-end DTO. pieOptions.startAngle
        },
      },
      xaxis: {
        type: 'datetime', // Need, Lua hard code
      },
      yaxis: {
        show: true, //Front-end DTO. basicOptions.showYaxis
      },
    };
    setTimeout(() => {
      // console.log(JSON.stringify(this.chartOptions));
      console.log(this.chartOptions.series);
    }, 500);
  }
}
