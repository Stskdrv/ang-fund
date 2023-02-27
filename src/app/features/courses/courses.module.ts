import { AdminGuard } from './../../user/guards/admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CourseFormComponent } from './../course/course-form/course-form.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'add',
        canActivate: [AdminGuard],
        component: CourseFormComponent
      },
      { path: ':id', component: CourseCardComponent },
      {
        path: 'edit/:id',
        canActivate: [AdminGuard],
        component: CourseFormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent,
    RouterModule,
  ]
})
export class CoursesModule { }
