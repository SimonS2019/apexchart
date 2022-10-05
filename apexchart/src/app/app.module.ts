import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

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
    PercentageStackedBarChartComponent
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
