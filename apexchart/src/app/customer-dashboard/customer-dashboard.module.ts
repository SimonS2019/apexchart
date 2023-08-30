import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test3Component } from './test3/test3.component';
import { CustomerDashboard2Module } from '../customer-dashboard2/customer-dashboard2.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CustomerDashboard2Module,
    // SharedModule
  ],
  exports: [

  ],
})
export class CustomerDashboardModule { }
