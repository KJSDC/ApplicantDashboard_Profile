// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { MyqueriesComponent } from './myqueries/myqueries.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ApplicationComponent } from './application/application.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'myqueries', component: MyqueriesComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'application', pathMatch: 'full', title:'EForms' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
