import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from '../customer-dashboard/test1/test1.component';
import { Test3Component } from '../customer-dashboard/test3/test3.component';

@NgModule({
  declarations: [Test1Component, Test3Component],
  imports: [CommonModule],
  exports: [Test3Component, Test1Component],
})
export class SharedModule {}
