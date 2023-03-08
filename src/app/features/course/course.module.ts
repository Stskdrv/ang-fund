import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { CourseComponent } from './course.component';

import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [CourseComponent, CourseFormComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, SharedModule],
  exports: [CourseComponent, CourseFormComponent],
})
export class CourseModule {}
