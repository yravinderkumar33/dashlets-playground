import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './components/reportComponent/report.component';
import { DashletComponent } from './components/dashlet/dashlet.component';
import { DashletModule } from 'sb-dashlets';
import { DataService } from '../data.service';
import { ContentPlaysByAppComponent } from './components/content-plays-by-app/content-plays-by-app.component';
import { ContentPlaysByPortalComponent } from './components/content-plays-by-portal/content-plays-by-portal.component';
import { BigNumberComponent } from './components/big-number/big-number.component';
import { TotalDevicesComponent } from './components/total-devices/total-devices.component';
import { TableComponent } from './components/table/table.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [ReportComponent, DashletComponent, ContentPlaysByAppComponent, ContentPlaysByPortalComponent, BigNumberComponent, TotalDevicesComponent, TableComponent, MapComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    DashletModule.forRoot({
      dataService: DataService
    })
  ]
})

export class ReportModule { }
