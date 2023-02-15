import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
  }

  formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} hours`;
  }


  // @Input() course!: Course;
  @Input() title!: string;
  @Input() description!: string;
  @Input() date!: string
  creationDate: string = this.date || this.formatDate(new Date());
  @Input() initDuration!: number;
  @Input() duration: string = this.formatDuration(this.initDuration);
  @Input() authors!: string[];

  @Input() isEditable: boolean = true;

}

interface Course {
  title: string,
  description: string,
  creationDate: string,
  duration: number,
  autors: string[],
}