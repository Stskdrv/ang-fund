import { CoursesService } from './courses.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course } from '../features/courses/course-card/course.model';
import { catchError, finalize, map } from 'rxjs/operators';

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
    this.coursesService.getAll()
      .pipe(
        map((courses) => this.courses$$.next(courses)),
        catchError((error) => {
          console.error(error);
          return [];
        }),
        finalize(() => this.isLoading$$.next(false))
      )
      .subscribe();
  }

  createCourse(
    title: string,
    description: string,
    duration: number,
    authors: string[]) {
    this.isLoading$$.next(true);
    this.coursesService.createCourse(title, description, duration, authors)
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        }),
        finalize(() => this.isLoading$$.next(false))
      )
      .subscribe(() => this.getAll());
  }

  editCourse(
    courseId: string,
    title: string,
    description: string,
    duration: number,
    authors: string[]) {
    this.isLoading$$.next(true);
    this.coursesService.editCourse(courseId,title, description, duration, authors)
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        }),
        finalize(() => this.isLoading$$.next(false))
      )
      .subscribe(() => this.getAll());
  }

  getCourse(courseId: string) {
    this.isLoading$$.next(true);
    this.coursesService.getCourse(courseId)
      .pipe(
        map((course) => {
          const courses = this.courses$$.getValue();
          const index = courses.findIndex((c) => c.id === course?.id);
          if (index !== -1) {
            courses[index] = course;
            this.courses$$.next(courses);
          }
        }),
        catchError((error) => {
          console.error(error);
          return [];
        }),
        finalize(() => this.isLoading$$.next(false))
      )
      .subscribe();
  }

  deleteCourse(courseId: string) {
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(courseId)
      .pipe(
        map(() => {
          const courses = this.courses$$.getValue();
          const index = courses.findIndex((c) => c.id === courseId);
          if (index !== -1) {
            courses.splice(index, 1);
            this.courses$$.next(courses);
          }
        }),
        catchError((error) => {
          console.error(error);
          return [];
        }),
        finalize(() => this.isLoading$$.next(false))
      )
      .subscribe();
  }

  searchCourses(searchTerm: string) {
    const courses = this.courses$$.getValue();
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.courses$$.next(filteredCourses);
  }
}
