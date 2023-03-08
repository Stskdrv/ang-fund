import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { CourseFormComponent } from './../course/course-form/course-form.component';
import { AdminGuard } from '../../core/user/guards/admin.guard';

import { CoursesComponent } from './courses.component';

import { CourseCardComponent } from './course-card/course-card.component';
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
    CourseFormComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CoursesComponent,
    CourseCardComponent,
    CourseFormComponent,
    SearchComponent,
  ]
})
export class CoursesModule { }
