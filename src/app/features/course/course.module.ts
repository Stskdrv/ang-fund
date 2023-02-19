import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';



@NgModule({
  declarations: [CourseComponent,CourseFormComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseComponent, CourseFormComponent]
})
export class CourseModule { }
