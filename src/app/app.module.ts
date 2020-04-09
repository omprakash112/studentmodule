import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { ExamComponent } from './exam/exam.component';
import { RessumeComponent } from './ressume/ressume.component';

import { PopupComponent } from './popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfiledataComponent } from './profiledata/profiledata.component';
import { DocumentComponent } from './document/document.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [

    AppComponent,
    DashbordComponent,
    LoginComponent,
    CourseComponent,
    ExamComponent,
    RessumeComponent,
    
    PopupComponent,

    ProfiledataComponent,

    DocumentComponent,

    DocumentuploadComponent,

    PaymentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,

    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
