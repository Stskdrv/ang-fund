import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { Course } from '../../features/courses/course-card/course.model';

import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<Course[]>([]);
  private filters$$ = new BehaviorSubject<string>('');

  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();
  public filteredCourses$: Observable<Course[]>;


  constructor(private coursesService: CoursesService) {
    this.filteredCourses$ = combineLatest([this.courses$, this.filters$$]).pipe(
      map(([courses, filter]) =>
        courses.filter((course) =>
          course.title.toUpperCase().includes(filter.toUpperCase())
        )
      )
    );
  };

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
  };

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
  };

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
  }

  searchCourses(searchTerm: string) {
    const courses = this.courses$$.getValue();
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.courses$$.next(filteredCourses);
  }
}
