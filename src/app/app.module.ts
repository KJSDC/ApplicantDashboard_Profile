import {  NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    PersonalDetailsComponent,
    DashboardComponent,
    FileuploadComponent,
    TestComponent,
  
    
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,CommonModule,ProfileComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
