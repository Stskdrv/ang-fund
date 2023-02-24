import { CourseFormComponent } from './../course/course-form/course-form.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: 'add', component: CourseFormComponent },
      { path: ':id', component: CourseCardComponent },
      { path: 'edit/:id', component: CourseFormComponent }
    ]
  }
];




@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent
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
