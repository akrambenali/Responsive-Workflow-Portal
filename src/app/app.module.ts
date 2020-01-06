import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
import { DelegationComponent } from './delegation/delegation.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
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
    DelegationComponent

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
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
