import { CoursesService } from './courses.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course } from '../features/courses/course-card/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<Course[]>([]);

  isLoading$ = this.isLoading$$.asObservable();
  courses$ = this.courses$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  getAll() {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe(
      (courses) => {
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      },
      (error) => {
        console.error(error);
        this.isLoading$$.next(false);
      }
    );
  }

  createCourse(course: Course) {
    this.isLoading$$.next(true);
    this.coursesService.createCourse(course).subscribe(
      () => {
        this.getAll();
      },
      (error) => {
        console.error(error);
        this.isLoading$$.next(false);
      }
    );
  }

  editCourse(course: Course) {
    this.isLoading$$.next(true);
    this.coursesService.editCourse(course).subscribe(
      () => {
        this.getAll();
      },
      (error) => {
        console.error(error);
        this.isLoading$$.next(false);
      }
    );
  }

  getCourse(id: number) {
    this.isLoading$$.next(true);
    this.coursesService.getCourse(id).subscribe(
      (course) => {
        const courses = this.courses$$.getValue();
        const index = courses.findIndex((c) => c.id === course.id);
        if (index !== -1) {
          courses[index] = course;
          this.courses$$.next(courses);
        }
        this.isLoading$$.next(false);
      },
      (error) => {
        console.error(error);
        this.isLoading$$.next(false);
      }
    );
  }

  deleteCourse(id: string) {
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe(
      () => {
        const courses = this.courses$$.getValue();
        const index = courses.findIndex((c) => c.id === id);
        if (index !== -1) {
          courses.splice(index, 1);
          this.courses$$.next(courses);
        }
        this.isLoading$$.next(false);
      },
      (error) => {
        console.error(error);
        this.isLoading$$.next(false);
      }
    );
  }

  searchCourses(searchTerm: string) {
    const courses = this.courses$$.getValue();
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.courses$$.next(filteredCourses);
  }
}
