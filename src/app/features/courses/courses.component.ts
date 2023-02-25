import { Component, Input } from '@angular/core';
import { mockedCourseList } from './mockData';

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

  onSearch($e: string): void {
    //search
    console.log($e);
    
  }

}
