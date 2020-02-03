import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { MyRequestDoneComponent } from './my-request-done/my-request-done.component';
import { SettingsComponent } from './settings/settings.component';
import { MytodoComponent } from './mytodo/mytodo.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { MyRequestPendingComponent } from './my-request-pending/my-request-pending.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReportsComponent } from './reports/reports.component';
import { MyBarChartComponent } from './bar-chart/bar-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'newrequest', component: NewRequestComponent},
  { path: 'processlist', component: ProcessListComponent},
  { path: 'processlist/:category', component: ProcessListComponent },
  { path: 'myrequestdone', component: MyRequestDoneComponent},
  { path: 'delegation', component: SettingsComponent },
  { path: 'mytodo', component: MytodoComponent},
  { path: 'forms', component: FormGeneratorComponent},
  { path: 'myrequest', component: MyRequestPendingComponent},
  { path: 'formdetail', component: FormDetailComponent},
  { path: 'formvalidation' , component: FormValidationComponent},
  { path: 'reports', component: ReportsComponent },
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


