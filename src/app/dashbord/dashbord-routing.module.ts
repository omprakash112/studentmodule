import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord.component'
import { CourseComponent } from '../course/course.component';
import { ExamComponent } from '../exam/exam.component';
import { RessumeComponent } from '../ressume/ressume.component';
import { DocumentComponent } from '../document/document.component';

const routes: Routes = [{
  path: 'dashboard', component: DashbordComponent,
  children: [
    {
      path: '/dashbord/course', component: CourseComponent,
    },
    // {
    //   path: '/dashbord/exam', component: ExamComponent,
    // },
    {
      path: '/dashbord/document', component: DocumentComponent,
    },
    {
      path: '/dashbord/ressume', component: RessumeComponent,
    }


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
