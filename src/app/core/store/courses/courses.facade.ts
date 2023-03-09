import { State } from './../index';
import { Course } from './../../../features/courses/course-card/course.model';
import { CoursesState } from './courses.reducer';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CourseActions from './courses.actions';

@Injectable() // do we need to register it in the root?
export class CoursesStateFacade {
  isAllCoursesLoading$: Observable<boolean> = this.store.pipe(
    select((state: State) => state.courses.isAllCoursesLoading)
  );
  isSingleCourseLoading$: Observable<boolean> = this.store.pipe(
    select((state: State) => state.courses.isSingleCourseLoading)
  );
  isSearchingState$: Observable<boolean> = this.store.pipe(
    select((state: State) => state.courses.isSearchState)
  );
  courses$: Observable<Course> = this.store.pipe(
    null// question here
  );
  allCourses$: Observable<Course[]> = this.store.pipe(
    select((state: State) => state.courses.allCourses)
  );
  course$: Observable<Course> = this.store.pipe(
    select((state: State) => state.courses.course)
  );
  errorMessage$: Observable<string> = this.store.pipe(
    select((state: State) => state.courses.errorMessage)
  );

  constructor(private store: Store<State>) {}

  getAllCourses(): void {
    this.store.dispatch(CourseActions.requestAllCourses());
  }

  getSingleCourse(courseId: string): void {
    this.store.dispatch(CourseActions.requestSingleCourse({ courseId }));
  }

  getFilteredCourses(searchValue: string): void {
    this.store.dispatch(CourseActions.requestFilteredCourses({ searchValue }));
  }

  editCourse(course: Course, courseId: string): void {
    this.store.dispatch(CourseActions.requestEditCourse({ course, courseId}));
  }

  createCourse(course: Course,): void {
    this.store.dispatch(CourseActions.requestCreateCourse({ course }));
  }

  deleteCourse(courseId: string): void {
    this.store.dispatch(CourseActions.requestDeleteCourse({ courseId }));
  }
}
