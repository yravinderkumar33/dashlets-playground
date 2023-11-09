import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashletModule } from 'sb-dashlets';
import { DataService } from './data.service';
import { ReportModule } from './report/report.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportModule,
    AppRoutingModule,
    DashletModule.forRoot({
      dataService: DataService
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
