import { Course } from './../../../features/courses/course-card/course.model';
import { CoursesStateFacade } from './courses.facade';
import { CoursesService } from './../../services/courses.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as CourseActions from './courses.actions';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private coursesStateFacade: CoursesStateFacade,
    private router: Router
  ) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.requestAllCourses),
      mergeMap(() =>
        this.coursesService.getAll().pipe(
          map((courses: Course[]) =>
            CourseActions.requestAllCoursesSuccess({ courses })
          ),
          catchError(() => of(CourseActions.requestAllCoursesFailure()))
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.requestFilteredCourses),
      mergeMap(({ searchValue }) =>
        this.coursesStateFacade.allCourses$.pipe(
          map((courses: Course[]) =>
            courses.filter((course: Course) =>
              course.title.toLowerCase().includes(searchValue.toLowerCase())
            )
          ),
          map((courses: Course[]) =>
            CourseActions.requestFilteredCoursesSuccess({ courses })
          ),
          catchError(() => of(CourseActions.requestFilteredCoursesFail()))
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.requestSingleCourse),
      mergeMap(({ courseId }) =>
        this.coursesService.getCourse(courseId).pipe(
          map((course: Course) =>
            CourseActions.requestSingleCourseSuccess({ course })
          ),
          catchError(() => of(CourseActions.requestSingleCourseFail()))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.requestDeleteCourse),
      mergeMap(({ courseId }) =>
        this.coursesService.deleteCourse(courseId).pipe(
          map(() => CourseActions.requestAllCourses()),
          catchError(() => of(CourseActions.requestDeleteCourseFail()))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.requestEditCourse),
        mergeMap(({ course }) => {
            const { id: courseId, title, description, duration, authors } = course;
            return this.coursesService.editCourse(courseId, title, description, duration, authors).pipe(
            map(() => CourseActions.requestEditCourseSuccess({ courseId })),
            catchError(() => of(CourseActions.requestEditCourseFail()))
            );
        })
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.requestCreateCourse),
      mergeMap(({ course }) => {
        const { title, description, duration, authors } = course;
        return this.coursesService
          .createCourse(title, description, duration, authors)
          .pipe(
            map((course: Course) =>
              CourseActions.requestCreateCourseSuccess({ course })
            ),
            catchError(() => of(CourseActions.requestCreateCourseFail()))
          );
      })
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CourseActions.requestCreateCourseSuccess,
          CourseActions.requestEditCourseSuccess,
          CourseActions.requestSingleCourseFail
        ),
        map(() => {
          this.router.navigate(['/courses']);
        })
      ),
    { dispatch: false }
  );
}
