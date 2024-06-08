import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './dev/dev.component';
import {Test1Component} from "@modules/public/test1/test1.component";

const routes: Routes = [

  {
    path: 'dev',
    component: DevComponent
  },
  {
    path:'test1',
    component:Test1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
