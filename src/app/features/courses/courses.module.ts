import { CourseCardComponent } from './course-card/course-card.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesComponent,
    CourseCardComponent,
    SearchComponent,
  ]
})
export class CoursesModule { }
