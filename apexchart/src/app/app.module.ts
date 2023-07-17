import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BoxPlotComponent } from './box-plot/box-plot.component';
import { StakedHorizantalBarChartComponent } from './staked-horizantal-bar-chart/staked-horizantal-bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScattterChartComponent } from './scattter-chart/scattter-chart.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { BoxplotScatterComponent } from './boxplot-scatter/boxplot-scatter.component';
import { BaseicBarChartComponent } from './baseic-bar-chart/baseic-bar-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { PercentageStackedBarChartComponent } from './percentage-stacked-bar-chart/percentage-stacked-bar-chart.component';
import { ScatterDatetimeComponent } from './scatter-datetime/scatter-datetime.component';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { DifferentColorForEachBarComponent } from './different-color-for-each-bar/different-color-for-each-bar.component';
import { MultiSeriesTimelineComponent } from './multi-series-timeline/multi-series-timeline.component';
import { AdvancedTimelineComponent } from './advanced-timeline/advanced-timeline.component';
import { TimelineGroupRowsComponent } from './timeline-group-rows/timeline-group-rows.component';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { BarReversedComponent } from './bar-reversed/bar-reversed.component';
import { CustomDatalablesComponent } from './custom-datalables/custom-datalables.component';
import { PatternedBarComponent } from './patterned-bar/patterned-bar.component';
import { BarWithMarkersComponent } from './bar-with-markers/bar-with-markers.component';
import { BubbleThreedComponent } from './bubble-threed/bubble-threed.component';
import { HorizontalBoxplotchartComponent } from './horizontal-boxplotchart/horizontal-boxplotchart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CompareComponent } from './compare/compare.component';
import { LineColumnComponent } from './line-column/line-column.component';
import { MutipleYAxisComponent } from './mutiple-y-axis/mutiple-y-axis.component';
import { LineAreaComponent } from './line-area/line-area.component';
import { LineColumnAreaComponent } from './line-column-area/line-column-area.component';
import { MixedChartTest1Component } from './mixed-chart-test1/mixed-chart-test1.component';
import { MixedChartTest2Component } from './mixed-chart-test2/mixed-chart-test2.component';
import { ThemeTestComponent } from './theme-test/theme-test.component';
import { AnyTestComponent } from './any-test/any-test.component';
import { SimplePieComponent } from './_pie/simple-pie/simple-pie.component';
import { SimpleDonutComponent } from './_donut/simple-donut/simple-donut.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BoxPlotComponent,
    StakedHorizantalBarChartComponent,
    BubbleChartComponent,
    ScattterChartComponent,
    TimelineChartComponent,
    BoxplotScatterComponent,
    BaseicBarChartComponent,
    StackedBarChartComponent,
    PercentageStackedBarChartComponent,
    ScatterDatetimeComponent,
    BasicTimelineComponent,
    DifferentColorForEachBarComponent,
    MultiSeriesTimelineComponent,
    AdvancedTimelineComponent,
    TimelineGroupRowsComponent,
    GroupBarChartComponent,
    BarReversedComponent,
    CustomDatalablesComponent,
    PatternedBarComponent,
    BarWithMarkersComponent,
    BubbleThreedComponent,
    HorizontalBoxplotchartComponent,
    CompareComponent,
    LineColumnComponent,
    MutipleYAxisComponent,
    LineAreaComponent,
    LineColumnAreaComponent,
    MixedChartTest1Component,
    MixedChartTest2Component,
    ThemeTestComponent,
    AnyTestComponent,
    SimplePieComponent,
    SimpleDonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
