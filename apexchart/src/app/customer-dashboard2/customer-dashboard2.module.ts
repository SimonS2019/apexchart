import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2/test2.component';
import { CustomerDashboardModule } from '../customer-dashboard/customer-dashboard.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Test2Component
  ],
  imports: [
    CommonModule,
    // SharedModule
  ],
  exports: [
    Test2Component
],
})
export class CustomerDashboard2Module { }
