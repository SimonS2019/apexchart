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
  selector: 'app-powerful-column-demo',
  templateUrl: './powerful-column-demo.component.html',
  styleUrls: ['./powerful-column-demo.component.css'],
})
export class PowerfulColumnDemoComponent {
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
          // easing: 'easeinout', //'linear', 'easein', 'easeout', 'easeinout',  // No need, seems pie/ donut use same easing
          speed: 800, // Need, default is 800
          // animateGradually: {  // No now
          //   enabled: true,
          //   delay: 150,
          // },
          // dynamicAnimation: { // No now
          //   enabled: true,
          //   speed: 350,
          // },
        },
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
        // foreColor: '#373d3f', // No Need! 
        // group: undefined, // No need
        height: 'auto', // No need, default is auto, can use format: 400 ,'400','100%'
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
        sparkline: {
          // Need, important!
          enabled: false,
        },
        stacked: false, // Need!
        // stacked: false, // Need!
        // stackType: 'normal', //'normal' or '100%'
        stackType: '100%', // No for pie / donut
        toolbar: {
          show: true, // Need, important!
          // offsetX: 0,  //No need
          // offsetY: 0, //No need
          tools: {
            download: true,
            // selection: true,
            // zoom: true,  // No for pie / donut
            // zoomin: true, // No for pie / donut
            // zoomout: true, // No for pie / donut
            // pan: true, // No for pie / donut
            // // reset: true | '<img src="/static/icons/reset.png" width="20">', // No for pie / donut
            // customIcons: [] // No for pie / donut
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
        // width: '100%', //Need? if need,lua to do the logical
        type: 'bar', //Need,  lua to do the logical
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

        palette: 'palette1', //Need, default is "palette1"
        // palette1 to palette10  https://apexcharts.com/docs/options/theme/#
        // // May confuse theme.palette, colors, fill.color
        // monochrome: { No need
        //   enabled: false, //Need, default is false
        //   // color: '#255aee',  // Need default is #008ffb
        //   shadeTo: 'light', // Need, default is light. Accepts either light or dark
        //   shadeIntensity: 0, // What should be the intensity while generating shades Accepts from 0 to 1
        // },
      },
      plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,   // No need
            // borderRadiusApplication: 'around', //This version not support
            // borderRadiusWhenStacked: 'last',//This version not support
            columnWidth: '70%',
            barHeight: '70%',
            distributed: false, // No need
            rangeBarOverlap: true, // No need
            rangeBarGroupRows: false,  // No need
            // hideZeroBarsWhenGrouped: false,//This version not support
            // isDumbbell: false, //This version not support
            // dumbbellColors: undefined, //This version not support
            // isFunnel: false, ////This version not support
            // isFunnel3d: true, ////This version not support/
            colors: {  // No need
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
            dataLabels: {    // No need
                position: 'top', 
                maxItems: 100,
                hideOverflowingLabels: true,
                orientation: 'horizontal',
                // total: { // This version not support
                //   enabled: false,
                //   formatter: undefined,
                //   offsetX: 0,
                //   offsetY: 0,
                //   style: {
                //     color: '#373d3f',
                //     fontSize: '12px',
                //     fontFamily: undefined,
                //     fontWeight: 600
                //   }
                // }
            }
        }
    },
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
        enabled: false, //Need, default is true
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
      stroke: {// No now
        // show: true,
        // width: 2,
        // colors: ['transparent'],
      },

      // yaxis: {
      //   title: {
      //     text: '$ (thousands)',
      //   },
      // },
      xaxis: {
        // type: 'datetime', // Need?
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
        // tickPlacement: 'between',  // This property in Column chart not work
        // tickPlacement: 'on',  //  This property in Column chart not work
        min: undefined, // //no need
        max: undefined, //  //no need
        range: undefined,//  //no need
        floating: false, //  //no need
        decimalsInFloat: undefined, //no need
        overwriteCategories: [  //no need
          'Test1',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ], // This property in Timeline not work
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
       
        title: {
            text: "Xaxis title demo",
            // offsetX: 0,  // no need
            // offsetY: 0,
            // style: {
            //     color: undefined,
            //     fontSize: '12px',
            //     fontFamily: 'Helvetica, Arial, sans-serif',
            //     fontWeight: 600,
            //     cssClass: 'apexcharts-xaxis-title',
            // },
        },
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
        title: { // This property in Timeline not work
            text: "Yaxis title demo",
            rotate: -90,
            // offsetX: 0,  //no deed
            // offsetY: 0,
            // style: {
            //     color: undefined,
            //     fontSize: '12px',
            //     fontFamily: 'Helvetica, Arial, sans-serif',
            //     fontWeight: 600,
            //     cssClass: 'apexcharts-yaxis-title',
            // },
        },
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
        
    },
      fill: { //no need
        // opacity: 1,
      },
      tooltip: {
        enabled: true, //Need, default is true
        // enabledOnSeries: undefined, //No need
        // shared: true, //No need
        // followCursor: false, //Need,Pie chart does not work, Timeline is work!
        // followCursor: true, //Need,Pie chart does not work, Timeline is work!
        // intersect: false,  // No need, Pie chart will cause some error !!
        // inverseOrder: false,  //No need
        // custom: undefined,  //No need
        // fillSeriesColor: true, //Time line no work ?
        // theme: 'dark', //Need, default is dark. 
        // theme: 'light', //Need, default is dark.
        // Might be a good idea to go against the Apex theme?? Accepts either light or dark

        // style: {
        //   fontSize: '12px', //Need, default is 12px
        //   // fontFamily: undefined //No need
        // },

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
    };
  }
}
