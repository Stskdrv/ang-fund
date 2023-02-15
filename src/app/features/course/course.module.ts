import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseComponent]
})
export class CourseModule { }
