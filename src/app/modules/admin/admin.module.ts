import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { ContentNoneComponent } from './features/content-none/content-none.component';
import { QuanLyTaiKhoanComponent } from './features/quan-ly-tai-khoan/quan-ly-tai-khoan.component';
import { HeThongComponent } from './features/he-thong/he-thong.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ContentNoneComponent,
    QuanLyTaiKhoanComponent,
    HeThongComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
