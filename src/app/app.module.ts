import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './base.service';
import { CreateWindowComponent } from './create-window/create-window.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
