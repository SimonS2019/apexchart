import { Component, ViewChild } from '@angular/core';
import * as moment from "moment";

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
  selector: 'app-powerful-timeline',
  templateUrl: './powerful-timeline.component.html',
  styleUrls: ['./powerful-timeline.component.css']
})
export class PowerfulTimelineComponent {
  @ViewChild('chart', { static: false }) chart: any;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        // George Washington
        {
          name: "George Washington",
          data: [
            {
              x: "President",
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            }
          ]
        },
        // John Adams
        {
          name: "John Adams",
          data: [
            {
              x: "President",
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            },
            {
              x: "Vice President",
              y: [
                new Date(1789, 3, 21).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            }
          ]
        },
        // Thomas Jefferson
        {
          name: "Thomas Jefferson",
          data: [
            {
              x: "President",
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1809, 2, 4).getTime()
              ]
            },
            {
              x: "Vice President",
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            },
            {
              x: "Secretary of State",
              y: [
                new Date(1790, 2, 22).getTime(),
                new Date(1793, 11, 31).getTime()
              ]
            }
          ]
        },
        // Aaron Burr
        {
          name: "Aaron Burr",
          data: [
            {
              x: "Vice President",
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1805, 2, 4).getTime()
              ]
            }
          ]
        },
        // George Clinton
        {
          name: "George Clinton",
          data: [
            {
              x: "Vice President",
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1812, 3, 20).getTime()
              ]
            }
          ]
        },
        // John Jay
        {
          name: "John Jay",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1789, 8, 25).getTime(),
                new Date(1790, 2, 22).getTime()
              ]
            }
          ]
        },
        // Edmund Randolph
        {
          name: "Edmund Randolph",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1794, 0, 2).getTime(),
                new Date(1795, 7, 20).getTime()
              ]
            }
          ]
        },
        // Timothy Pickering
        {
          name: "Timothy Pickering",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1795, 7, 20).getTime(),
                new Date(1800, 4, 12).getTime()
              ]
            }
          ]
        },
        // Charles Lee
        {
          name: "Charles Lee",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1800, 5, 5).getTime()
              ]
            }
          ]
        },
        // John Marshall
        {
          name: "John Marshall",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1800, 5, 13).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            }
          ]
        },
        // Levi Lincoln
        {
          name: "Levi Lincoln",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1801, 2, 5).getTime(),
                new Date(1801, 4, 1).getTime()
              ]
            }
          ]
        },
        // James Madison
        {
          name: "James Madison",
          data: [
            {
              x: "Secretary of State",
              y: [
                new Date(1801, 4, 2).getTime(),
                new Date(1809, 2, 3).getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        // animations: {
        //   enabled: true, // Need, default is true
        //   // easing: 'easeinout', //'linear', 'easein', 'easeout', 'easeinout',  // No need, seems pie/ donut use same easing
        //   speed: 800, // Need, default is 800
        //   // animateGradually: {  // No now
        //   //   enabled: true,
        //   //   delay: 150,
        //   // },
        //   // dynamicAnimation: { // No now
        //   //   enabled: true,
        //   //   speed: 350,
        //   // },
        // },
        // background: '#fff', // No need for all chart, we're using the theme attribute, which can cause confusion if used at the same time
        // brush: {  // No for pie / Donut
        //   enabled: false,
        //   target: undefined,
        //   autoScaleYaxis: false
        // }
        // defaultLocale: 'en'  // No need for all chart,
        //   dropShadow: {  // No need for all chart,
        //     enabled: false,
        //     enabledOnSeries: undefined,
        //     top: 0,
        //     left: 0,
        //     blur: 3,
        //     color: '#000',
        //     opacity: 0.35
        // }
        // fontFamily: 'Helvetica, Arial, sans-serif' // No need for all chart,
        // foreColor: '#373d3f', // Need! important "foreColor" will be overridden if we assign a color to a specific property
        // group: undefined, // No need
        // height: 'auto', // No need, default is auto, can use format: 400 ,'400','100%'
        // id: undefined // No now
        // defaultLocale: 'en',  // No need
        // locales: [{ // No need
        //   name: 'en',
        //   options: {
        //     months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        //     shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //     days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        //     shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        //     toolbar: {
        //       download: 'Download SVG',
        //       selection: 'Selection',
        //       selectionZoom: 'Selection Zoom',
        //       zoomIn: 'Zoom In',
        //       zoomOut: 'Zoom Out',
        //       pan: 'Panning',
        //       reset: 'Reset Zoom',
        //     }
        //   }
        // }]
        // offsetX: 0,  //No need
        // offsetY: 0,  //No need
        // parentHeightOffset: 15 //No need
        // redrawOnParentResize: true, //No need
        // redrawOnWindowResize: true, //No need
        // selection: { //No for pie / donut
        //   enabled: true,
        //   type: 'x',
        //   fill: {
        //     color: '#24292e',
        //     opacity: 0.1
        //   },
        //   stroke: {
        //     width: 1,
        //     dashArray: 3,
        //     color: '#24292e',
        //     opacity: 0.4
        //   },
        //   xaxis: {
        //     min: undefined,
        //     max: undefined
        //   },
        //   yaxis: {
        //     min: undefined,
        //     max: undefined
        //   }
        // },
        // sparkline: {
        //   // Need, important!
        //   enabled: false,
        // },
        // stacked: false // No for pie / donut
        // stackType: 'normal' // No for pie / donut
        // toolbar: {
        //   show: true, // Need, important!
        //   // offsetX: 0,  //No need
        //   // offsetY: 0, //No need
        //   tools: {
        //     download: true,
        //     // selection: true,
        //     // zoom: true,  // No for pie / donut
        //     // zoomin: true, // No for pie / donut
        //     // zoomout: true, // No for pie / donut
        //     // pan: true, // No for pie / donut
        //     // // reset: true | '<img src="/static/icons/reset.png" width="20">', // No for pie / donut
        //     // customIcons: [] // No for pie / donut
        //   },
        //   export: {
        //     csv: {
        //       // Need, Important! , logic is in lua
        //       filename: undefined,
        //       columnDelimiter: ',',
        //       headerCategory: 'category',
        //       headerValue: 'value',
        //     },
        //     svg: {
        //       // Need, Important! , logic is in lua
        //       filename: 'Test 13223',
        //     },
        //     png: {
        //       // Need, Important! , logic is in lua
        //       filename: undefined,
        //     },
        //   },
        //   // autoSelected: 'zoom'  // No for pie / donut
        // },
        width: '100%', //Need? if need,lua to do the logical
        type: 'rangeBar', //Need,  lua to do the logical
        // type: 'pie', //Need,  lua to do the logical
        // zoom: {
        //   // No for pie / donut
        //   enabled: true,
        //   type: 'x',
        //   autoScaleYaxis: false,
        //   zoomedArea: {
        //     fill: {
        //       color: '#90CAF9',
        //       opacity: 0.4,
        //     },
        //     stroke: {
        //       color: '#0D47A1',
        //       opacity: 0.4,
        //       width: 1,
        //     },
        //   },
        // },
      },
      title: {
        text: 'This is a Title', //Need, NB: using an empty string will take up some space (5px height?), we can use undefined
        align: 'center', //Need, default is 'left', Possible Options: 'left', 'center', 'right'
        // margin: 10, // No need, default ?, ready to use
        // offsetX: 0, // No need, default is 0, ready to use
        // offsetY: 0, // No need, default is 0, ready to use
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
        // margin: 10, // No need, default ?, ready to use
        // offsetX: 0, // No need, default is 0, ready to use
        // offsetY: 0, // No need, default is 0, ready to use
        // floating: false, // No need, default is false, ready to use
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          // fontFamily: undefined,
          color: '#9699a2',
        },
      },
      theme: {
        mode: 'light', // Need? but automatic!  light || dark
        // mode: 'dark', // Need? but automatic!  light || dark
        // // May confuse theme.mode and chart.background.

        // palette: 'palette1', //No Need, default is "palette1"
        // palette1 to palette10  https://apexcharts.com/docs/options/theme/#
        // // May confuse theme.palette, colors, fill.color
        // monochrome: { //work, but for timeline chart, this is 
        //   enabled: true, //Need, default is false
        //   color: '#eb4034',  // Need default is #008ffb
        //   shadeTo: 'light', // Need, default is light. Accepts either light or dark
        //   shadeIntensity: 0, // What should be the intensity while generating shades Accepts from 0 to 1
        // },
      },
      // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'], // Need? but use lua service to do this!
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
        height: undefined, //Need , undefined is means auto?
        // tooltipHoverFormatter: undefined,  //No need,
        // customLegendItems: [], //No need,
        // offsetX: 0, //No need,
        // offsetY: 0, //No need,
        // labels: {
        //   //No need,
        //   // colors: undefined,  //No need,
        //   colors: 'red', //No need,
        //   //   useSeriesColors: false, //No need,
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
      dataLabels: { //no Now
        // enabled: true, //Need, default is true
        // // enabledOnSeries: undefined, //No need,
        // formatter: function(val:any[], opts) {
        //   var label = opts.w.globals.labels[opts.dataPointIndex];
        //   console.log(val);
          
        //   var a = moment(val[0]);
        //   var b = moment(val[1]);
        //   console.log(a);
          
        //   var diff = b.diff(a, "days");
        //   console.log(diff);
          
        //   return label + ": " + diff + (diff > 1 ? " days" : " day");
        //   // return label + ": " + diff + (diff > 1 ? " days" : " day");
          
        // },
        // // textAnchor: 'middle',  //No need for pie and dunut chart,
        // // distributed: false, //No need
        // // offsetX: 0, //No need
        // // offsetY: 0,//No need
        // style: {
        //   fontSize: '14px', //Need, default is 12px
        //   // fontFamily: 'Helvetica, Arial, sans-serif',//No need
        //   fontWeight: 'bold', //Need
        //   // colors: undefined //No need for pie and dunut chart, because we use 'foreColor'
        // },
        // background: {
        //   enabled: true, //Need, default is false
        //   foreColor: '#fff', //Need
        //   padding: 4, //Need
        //   borderRadius: 2, //Need
        //   borderWidth: 3, //Need
        //   borderColor: 'black', //Need
        //   opacity: 0.8, //Need
        //   // dropShadow: { //No need
        //   //   enabled: false,
        //   //   top: 1,
        //   //   left: 1,
        //   //   blur: 1,
        //   //   color: '#000',
        //   //   opacity: 0.45
        //   // }
        // },
        // // dropShadow: {//No need
        // //     enabled: false,
        // //     top: 1,
        // //     left: 1,
        // //     blur: 1,
        // //     color: '#000',
        // //     opacity: 0.45
        // // },
      },
      tooltip: {
        enabled: true, //Need, default is true
        // enabledOnSeries: undefined, //No need
        // shared: true, //No need
        followCursor: true, //Need,Pie chart does not work, Timeline is work!
        // intersect: false,  // No need, Pie chart will cause some error !!
        // inverseOrder: false,  //No need
        // custom: undefined,  //No need
        fillSeriesColor: true, //Time line no work ?
        theme: 'light', //Need, default is dark.
        // Might be a good idea to go against the Apex theme?? Accepts either light or dark

        style: {
          fontSize: '12px', //Need, default is 12px
          // fontFamily: undefined //No need
        },

        // onDatasetHover: {
        //     highlightDataSeries: false, //No need, seem does not work in pie chart
        // },

        // x: { //No need, seem does not work in pie chart
        //     show: true,
        //     format: 'dd MMM',
        //     formatter: undefined,
        // },
        // y: {//No need, seem does not work in pie chart
        //     formatter: undefined,
        //     title: {
        //         formatter: (seriesName) => seriesName,
        //     },
        // },
        // z: { //No need, seem does not work in pie chart
        //     formatter: undefined,
        //     title: 'Size: '
        // },

        // marker: {
        //   show: true, //Timeline does not work
        // },

        // items: {  //No need, seem does not work in pie chart
        //    display: "flex",
        // },

        // fixed: {
        ////No need, I don't know how to describe these property. You can have a try. It looks like an "idiot element".
        // // I don't think all charts need to use these
        //     enabled: true,
        //     position: 'topRight',
        //     offsetX: 0,
        //     offsetY: 0,
        // },
      },
      colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
      // colors: [
      //   "#66DA26",
      //   "#00E396",
      //   "#FEB019",
      //   "#FF4560",
      //   "#775DD0",
      //   "#3F51B5",
      //   "#546E7A",
      //   "#D4526E",
      //   "#8D5B4C",
      //   "#F86624",
      //   "#D7263D",
      //   "#1B998B",
      //   "#2E294E",
      //   "#F46036",
      //   "#E2C044"
      // ],
      // // Need? but use lua service to do this! overwrite the theme.palette
      // // May confuse theme.palette, colors, fill.color
      stroke: {
        // show: true, //No Need, default is false
        // curve: 'smooth',  //No need, Pie/ Donut no work
        // lineCap: 'butt', //No need, Pie/ Donut no work
        // colors: ['#fff'], //No need, Pie/ Donut need
        // width: 2,    //No need, Pie/ Donut need
        // dashArray: 0,  //No need, Pie/ Donut need
      },
      states: {
        //not use it now
        // normal: {
        //     filter: {
        //         type: 'none',
        //         value: 0,
        //     }
        // },
        // hover: {
        //     filter: {
        //         type: 'lighten',
        //         value: 0.15,
        //     }
        // },
        // active: {
        //     allowMultipleDataPointsSelection: false,
        //     filter: {
        //         type: 'darken',
        //         value: 0.35,
        //     }
        // },
      },
      grid: {
        //not use it now
        // show: true,
        // borderColor: '#90A4AE',
        // strokeDashArray: 0,
        // position: 'back',
        // xaxis: {
        //     lines: {
        //         show: false
        //     }
        // },
        // yaxis: {
        //     lines: {
        //         show: false
        //     }
        // },
        // row: {
        //     colors: undefined,
        //     opacity: 0.5
        // },
        // column: {
        //     colors: undefined,
        //     opacity: 0.5
        // },
        // padding: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0
        // },
      },
      fill: { //For timeline chart, these properties is sucks
        // colors: undefined,   // No need for pie/ donut, other charts may need this, but it will be complicated for pie/donut charts.
        // colors: ['#1A73E8', '#B32824'], // May confuse theme.palette, colors, fill.color
        // opacity: 0.9,    // No need for pie/ donut, other charts may need this,
        // type: 'solid', // Need, default is solid 'solid', 'gradient' is good for pie/ donut .'pattern','image' is too fancy
        // type: ['solid', 'gradient'],
        // gradient: {
        //   shade: 'dark',
        //   type: 'horizontal',
        //   shadeIntensity: 0.5,
        //   gradientToColors: undefined,
        //   inverseColors: true,
        //   opacityFrom: 1,
        //   opacityTo: 1,
        //   stops: [0, 50, 100],
        //   // colorStops: []
        // },
        // image: {   // No now
        //   src: ['https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'],
        //   width: undefined,
        //   height: undefined,
        // },
        // pattern: { // No now
        //   style: 'verticalLines',
        //   width: 6,
        //   height: 6,
        //   strokeWidth: 2,
        // },
      },
      plotOptions: {
        bar: {
          horizontal: true,  // Need, but for timeline, it alwary true
          barHeight: "50%", // Need
          rangeBarGroupRows: true,  //Need, default is false 
        
            // borderRadius: 1, // This property in current library version is suck

            // columnWidth: '100%',// This property in Timeline not work

            // distributed: false, //No Need, default is false 
            // rangeBarOverlap: true, //Now No Need
    
            // colors: {  // This property in Timeline not work
            //     ranges: [{
            //         from: 0,
            //         to: 0,
            //         color: undefined
            //     }],
            //     backgroundBarColors: [],
            //     backgroundBarOpacity: 1,
            //     backgroundBarRadius: 0,
            // },
            // dataLabels: {  // This property in Timeline not work
            //     position: 'top',
            //     maxItems: 100,
            //     hideOverflowingLabels: true,
           
            // }
        }
    },
      xaxis: {
        type: 'datetime', // Need, but alwary "datetime" if chart is timeline
        categories: [],  // This property is suck
        tickAmount: undefined,  // This property in Timeline not work
        // tickPlacement: 'between',  // This property in Timeline not work
        // tickPlacement: 'on',  // This property in Timeline not work
        min: undefined, // This property in Timeline not work
        max: undefined, // This property in Timeline not work
        range: undefined,// This property in Timeline not work
        floating: false, // This property in Timeline not work
        decimalsInFloat: undefined, // This property in Timeline not work
        overwriteCategories: undefined, // This property in Timeline not work
        position: 'bottom', // No need
        // labels: { // No need
        //     show: true,
        //     rotate: -45,
        //     rotateAlways: false,
        //     hideOverlappingLabels: true,
        //     showDuplicates: false,
        //     trim: false,
        //     minHeight: undefined,
        //     maxHeight: 120,
        //     style: {
        //         colors: [],
        //         fontSize: '12px',
        //         fontFamily: 'Helvetica, Arial, sans-serif',
        //         fontWeight: 400,
        //         cssClass: 'apexcharts-xaxis-label',
        //     },
        //     offsetX: 0,
        //     offsetY: 0,
        //     format: undefined,
        //     formatter: undefined,
        //     datetimeUTC: true,
        //     datetimeFormatter: {
        //         year: 'yyyy',
        //         month: "MMM 'yy",
        //         day: 'dd MMM',
        //         hour: 'HH:mm',
        //     },
        // },
        // group: {
        //   groups: [],
        //   style: {
        //     colors: [],
        //     fontSize: '12px',
        //     fontWeight: 400,
        //     fontFamily: undefined,
        //     cssClass: ''
        //   }
        // },
        // axisBorder: {
        //     // show: true,
        //     // color: '#78909C',
        //     // height: 1,
        //     // width: '100%',
        //     // offsetX: 0,
        //     // offsetY: 0
        // },
        // axisTicks: {
        //     show: true,
        //     borderType: 'solid',
        //     color: '#78909C',
        //     height: 6,
        //     offsetX: 0,
        //     offsetY: 0
        // },
       
        // title: {
        //     text: undefined,
        //     offsetX: 0,
        //     offsetY: 0,
        //     style: {
        //         color: undefined,
        //         fontSize: '12px',
        //         fontFamily: 'Helvetica, Arial, sans-serif',
        //         fontWeight: 600,
        //         cssClass: 'apexcharts-xaxis-title',
        //     },
        // },
        // crosshairs: {
        //     show: true,
        //     width: 1,
        //     position: 'back',
        //     opacity: 0.9,        
        //     stroke: {
        //         color: '#b6b6b6',
        //         width: 0,
        //         dashArray: 0,
        //     },
        //     fill: {
        //         type: 'solid',
        //         color: '#B1B9C4',
        //         gradient: {
        //             colorFrom: '#D8E3F0',
        //             colorTo: '#BED1E6',
        //             stops: [0, 100],
        //             opacityFrom: 0.4,
        //             opacityTo: 0.5,
        //         },
        //     },
        //     dropShadow: {
        //         enabled: false,
        //         top: 0,
        //         left: 0,
        //         blur: 1,
        //         opacity: 0.4,
        //     },
        // },
        // tooltip: {
        //     enabled: true,
        //     formatter: undefined,
        //     offsetY: 0,
        //     // style: {
        //     //   fontSize: 0,
        //     //   fontFamily: 0,
        //     // },
        // },
    },
      yaxis: {
        show: true, //Need,
        // showAlways: false, // This property in Timeline not work
        // showForNullSeries: true, //No need
        // seriesName: undefined,  //No need
        // opposite: false, //This property in Timeline is suck
        // reversed: false, // This property in Timeline not work
        // logarithmic: false, // This property in Timeline not work
        // logBase: 10,// This property in Timeline not work
        // tickAmount: 6, //No need
        // min: 6,
        // max: 6,
        // forceNiceScale: false,//No need
        // floating: false,//No need
        // decimalsInFloat: undefined,//No need
        // labels: {    //work, but no need
        //     show: true, //work, but no need
        //     align: 'left', //work, but no need
        //     minWidth: 0,//work, but no need
        //     maxWidth: 160,//work, but no need
        //     style: {
        //         colors: [], //work, but no need
        //         fontSize: '12px', 
        //         fontFamily: 'Helvetica, Arial, sans-serif',
        //         fontWeight: 400,
        //         cssClass: 'apexcharts-yaxis-label',
        //     },
        //     offsetX: 0,
        //     offsetY: 0,
        //     rotate: 0,
        //     // formatter: (value) => { return val },
        // },
        // axisBorder: { // This property in Timeline not work
        //     show: true,
        //     color: '#78909C',
        //     offsetX: 0,
        //     offsetY: 0
        // },
        // axisTicks: { // This property in Timeline not work
        //     show: true,
        //     // borderType: 'solid',
        //     color: '#78909C',
        //     width: 6,
        //     offsetX: 0,
        //     offsetY: 0
        // },
        // title: { // This property in Timeline not work
        //     text: undefined,
        //     rotate: -90,
        //     offsetX: 0,
        //     offsetY: 0,
        //     style: {
        //         color: undefined,
        //         fontSize: '12px',
        //         fontFamily: 'Helvetica, Arial, sans-serif',
        //         fontWeight: 600,
        //         cssClass: 'apexcharts-yaxis-title',
        //     },
        // },
        // crosshairs: {// This property in Timeline not work
        //     show: true,
        //     position: 'back',
        //     stroke: {
        //         color: '#b6b6b6',
        //         width: 1,
        //         dashArray: 0,
        //     },
        // },
        // tooltip: { // This property in Timeline not work
        //     enabled: true,
        //     offsetX: 0,
        // },
        
    }
    };
    setTimeout(() => {
      console.log(JSON.stringify(this.chartOptions));
    }, 500);
  }
}
