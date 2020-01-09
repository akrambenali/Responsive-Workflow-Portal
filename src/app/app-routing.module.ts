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
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
