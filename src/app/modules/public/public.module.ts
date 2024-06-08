import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { DevComponent } from './dev/dev.component';
import { ChildComponent } from './dev/child/child.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { Test1Component } from './test1/test1.component';
import {OvicHtmlDecodePipe} from "@modules/share/pipes/ovic-html-decode.pipe";

@NgModule({
    declarations: [
        DevComponent,
        ChildComponent,
        Test1Component,
        OvicHtmlDecodePipe,

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
