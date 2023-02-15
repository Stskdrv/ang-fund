import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  title: string = '';
  description: string = '';
  creationDate: Date = new Date(1, 1, 2023);
  duration: number = 0;
  autors: string[] = [];

  @Input() isEditable: boolean = true;

}
