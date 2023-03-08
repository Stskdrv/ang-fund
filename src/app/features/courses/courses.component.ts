import { Course } from './course-card/course.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() courses: Course[];


  logEvent = (e: any) => {
    console.log(e);
  }

  onSearch($e: string): void {
    //search
    console.log($e);
    
  }

}
