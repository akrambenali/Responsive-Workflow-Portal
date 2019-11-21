import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { TasklistInProgressComponent } from './tasklist-in-progress/tasklist-in-progress.component';
import { NgbdSortableHeader } from './tasklist-in-progress/sortable.directive';
import { NewRequestComponent } from './new-request/new-request.component';
import { LayoutHomeMenuComponent } from './layout-menu-home/layout-menu.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeCardsComponent,
    TasklistInProgressComponent,
    NgbdSortableHeader,
    NewRequestComponent,
    LayoutHomeMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
