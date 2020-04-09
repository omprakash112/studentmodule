import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';

import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { ExamComponent } from './exam/exam.component';
import { RessumeComponent } from './ressume/ressume.component';

import { ProfiledataComponent } from './profiledata/profiledata.component';
import { DocumentComponent } from './document/document.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashbord',
    component: DashbordComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'dashbord',
    component: DashbordComponent,
    canActivate: [AuthGuard]

  },


  {
    path: 'dashbord', component: DashbordComponent,


    children: [
      {
        path: 'profile', component: ProfiledataComponent
      },

      {
        path: 'course', component: CourseComponent
      },
      {
        path: 'document', component: DocumentComponent
      },

      {
        path: 'ressume', component: RessumeComponent
      },
      {
        path: 'profiledata', component: ProfiledataComponent
      },
      {
        path: 'payment', component: PaymentComponent
      }
      //     { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }]
      // },
      // {
      //   path: 'dashboard',
      //   component: DashbordComponent,
      //   children: [
      //     { path: 'trainer-management', loadChildren: () => import('./trainer-management/trainer-management.module').then(m => m.TrainerManagementModule) }]
      // },
      // {
      //   path: 'dashboard',
      //   component: DashbordComponent,
      //   children: [
      //     { path: 'course-management', loadChildren: () => import('./course-management/course-management.module').then(m => m.CourseManagementModule) },
      //     { path: 'student-management', loadChildren: () => import('./student-management/student-management.module').then(m => m.StudentManagementModule) },
      //     { path: 'batch', loadChildren: () => import('./batch/batch.module').then(m => m.BatchModule) },
      //     { path: 'hiring', loadChildren: () => import('./hiring/hiring.module').then(m => m.HiringModule) },
      //     { path: 'interview-preparation', loadChildren: () => import('./interview-preparation/interview-preparation.module').then(m => m.InterviewPreparationModule) },
      //     { path: 'attendence', loadChildren: () => import('./attendence/attendence.module').then(m => m.AttendenceModule) },
      //     { path: 'online-exam', loadChildren: () => import('./online-exam/online-exam.module').then(m => m.OnlineExamModule) },
      //     { path: 'assignment', loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule) }
      //   ]
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
