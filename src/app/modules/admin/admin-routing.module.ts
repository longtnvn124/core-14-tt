import { QuanLyTaiKhoanComponent } from './features/quan-ly-tai-khoan/quan-ly-tai-khoan.component';
import { ContentNoneComponent } from './features/content-none/content-none.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { HeThongComponent } from './features/he-thong/he-thong.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivateChild : [ AdminGuard ] ,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
        data: { state: 'dashboard' }
      },
      {
        path: 'he-thong',
        component: HeThongComponent,
        data: { state: 'he-thong' }
      },
      {
        path: 'tai-khoan',
        component: QuanLyTaiKhoanComponent,
        data: { state: 'tai-khoan' }
      },
      {
        path: 'content-none',
        component: ContentNoneComponent,
        data: { state: 'content-none' }
      },

      {
        path: '**',
        redirectTo: '/admin/dashboard',
        pathMatch: 'prefix'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
