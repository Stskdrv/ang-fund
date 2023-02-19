import { mockedCourseList } from './mockData';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() courses = mockedCourseList;


  logEvent = (e: any) => {
    console.log(e);
  }

}
