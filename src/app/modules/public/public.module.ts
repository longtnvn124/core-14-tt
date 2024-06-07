import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { DevComponent } from './dev/dev.component';
import { ChildComponent } from './dev/child/child.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    DevComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ]
})
export class PublicModule { }
