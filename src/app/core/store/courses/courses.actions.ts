import { Course } from './../../../features/courses/course-card/course.model';
import { createAction, props } from '@ngrx/store';

// Actions for requesting all courses
export const requestAllCourses = createAction(
  '[Courses Page] Request All Courses'
);
export const requestAllCoursesSuccess = createAction(
  '[Courses Page] Request All Courses Success',
  props<{ courses: Course[] }>()
);
export const requestAllCoursesFailure = createAction(
  '[Courses Page] Request All Courses Failure'
);

// Actions for requesting an individual course
export const requestSingleCourse = createAction(
  '[Courses Page] Request Single Course',
  props<{ courseId: string }>()
);
export const requestSingleCourseSuccess = createAction(
  '[Courses Page] Request Single Course Success',
  props<{ course: Course }>()
);
export const requestSingleCourseFail = createAction(
  '[Courses Page] Request Single Course Fail'
);

// Actions for requesting filtered courses
export const requestFilteredCourses = createAction(
  '[Courses Page] Request Filtered Courses',
  props<{ filter: string }>()
);
export const requestFilteredCoursesSuccess = createAction(
  '[Courses Page] Request Filtered Courses Success',
  props<{ courses: Course[] }>()
);
export const requestFilteredCoursesFail = createAction(
  '[Courses Page] Request Filtered Courses Fail'
);

// Actions for deleting a course
export const requestDeleteCourse = createAction(
  '[Courses Page] Request Delete Course',
  props<{ courseId: string }>()
);

export const requestDeleteCourseSuccess = createAction(
  '[Courses Page] Request Delete Course Success',
  props<{ courseId: string }>()
);
export const requestDeleteCourseFail = createAction(
  '[Courses Page] Request Delete Course Fail'
);

//Actions for editing course
export const requestEditCourse = createAction(
  '[Courses Page] Request Edit Course',
  props<{ courseId: string }>()
);

export const requestEditCourseSuccess = createAction(
  '[Courses Page] Request Edit Course Success',
  props<{ courseId: string }>()
);
export const requestEditCourseFail = createAction(
  '[Courses Page] Request Edit Course Fail'
);

//Actions for creating course
export const requestCreateCourse = createAction(
  '[Courses Page] Request Create Course',
  props<{ course: Course[] }>()
);

export const requestCreateCourseSuccess = createAction(
  '[Courses Page] Request Create Course Success',
  props<{ course: Course }>()
);
export const requestCreateCourseFail = createAction(
  '[Courses Page] Request Create Course Fail'
);
