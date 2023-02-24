import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  private _date: Date = undefined;

  // @Input() course!: Course;
  @Input() title!: string;
  @Input() description!: string;
  @Input() date: Date;
  @Input() initDuration: number;
  @Input() authors!: string[];

  @Input() isEditable: boolean = true;

  @Output() onShowCourse = new EventEmitter<Course['title']>();

  showCourse = (title: string) => this.onShowCourse.emit(title);
}
