import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { TasklistInProgressComponent } from './tasklist-in-progress/tasklist-in-progress.component';
import { NgbdSortableHeader } from './tasklist-in-progress/sortable.directive';
import { NewRequestComponent } from './new-request/new-request.component';
import { LayoutHomeMenuComponent } from './layout-menu-home/layout-menu.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { MyRequestDoneComponent } from './my-request-done/my-request-done.component';
import { TasklistInDoneComponent} from './tasklist-in-done/tasklist-in-done.component';
import { SettingsComponent } from './settings/settings.component';
import { MytodoComponent } from './mytodo/mytodo.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { MyRequestPendingComponent } from './my-request-pending/my-request-pending.component';
import { TasklistInPendingComponent } from './tasklist-pending/tasklist-in-pending.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReportsComponent } from './reports/reports.component';
import { MyBarChartComponent } from './bar-chart/bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { WaterfallReportComponent } from './waterfall-report/waterfall-report.component';
import { WaterfallListComponent } from './waterfall-list/waterfall-list.component';
import { DynamiqueWaterfallChartComponent } from './dynamique-waterfall-chart/dynamique-waterfall-chart.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {

  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeCardsComponent,
    TasklistInProgressComponent,
    NgbdSortableHeader,
    NewRequestComponent,
    LayoutHomeMenuComponent,
    ProcessListComponent,
    MyRequestDoneComponent,
    TasklistInDoneComponent,
    SettingsComponent,
    MytodoComponent,
    FormGeneratorComponent,
    MyRequestPendingComponent,
    TasklistInPendingComponent,
    FormDetailComponent,
    FormValidationComponent,
    ReportsComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    WaterfallReportComponent,
    WaterfallListComponent,
    DynamiqueWaterfallChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
