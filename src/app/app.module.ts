import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlertComponent} from '@core/components/alert/alert.component';
import {ConfirmComponent} from '@core/components/confirm/confirm.component';
import {ConfirmDeleteComponent} from '@core/components/confirm-delete/confirm-delete.component';
import {PopupComponent} from '@core/components/popup/popup.component';
import {ConfirmRoundedComponent} from '@core/components/confirm-rounded/confirm-rounded.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TranslateModule} from "@ngx-translate/core";
import {AppSafeHtmlPipe} from '@core/pipes/app-safe-html.pipe';
import {ToastModule} from "primeng/toast";
import {getSaver, SAVER} from "@core/providers/saver.provider";
import { OverlayModule } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {NgbActiveOffcanvas, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent ,
    ConfirmComponent ,
    PopupComponent ,
    AppSafeHtmlPipe ,
    ConfirmRoundedComponent ,
    ConfirmDeleteComponent ,
    AlertComponent ,
  ],
  imports: [
    BrowserModule ,
    BrowserAnimationsModule ,
    ToastModule,
    HttpClientModule,
    AppRoutingModule,
    OverlayModule,
    NgbModule,
    ButtonModule,
    RippleModule,
    TranslateModule.forRoot()
  ],
  exports: [
    AlertComponent,
    ConfirmComponent,
    ConfirmDeleteComponent,
    PopupComponent,
    ConfirmRoundedComponent,
    TranslateModule,
  ],
  providers: [
    FormBuilder ,
    NgbActiveOffcanvas ,
    MessageService ,
    { provide : SAVER , useFactory : getSaver } ,
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,]

})
export class AppModule {
}
