import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './components/reportComponent/report.component';
import { DashletComponent } from './components/dashlet/dashlet.component';


const routes: Routes = [
  {
    path: "",
    component: ReportComponent
  },
  {
    path: "all",
    component: DashletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
