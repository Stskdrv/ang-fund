import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CourseComponent, CourseFormComponent],
  imports: [ReactiveFormsModule, CommonModule, SharedModule],
  exports: [CourseComponent, CourseFormComponent],
})
export class CourseModule {}
