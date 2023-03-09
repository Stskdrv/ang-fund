import { Course } from './../../../features/courses/course-card/course.model';
import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './courses.actions';

export const coursesFeatureKey = 'courses'; //didnt get it, what is it?

export interface CoursesState {
  allCourses: Course[];
  course: Course;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialState: CoursesState = {
  allCourses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: '',
};

export const coursesReducer = createReducer(
  initialState,

  // Reducers for requesting all courses
  on(CourseActions.requestAllCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
  })),
  on(CourseActions.requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
  })),
  on(CourseActions.requestAllCoursesFailure, (state) => ({
    ...state,
    isAllCoursesLoading: false,
  })),

  // Reducers for requesting an individual course
  on(CourseActions.requestSingleCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(CourseActions.requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isSingleCourseLoading: false,
  })),
  on(CourseActions.requestSingleCourseFail, (state) => ({
    ...state,
    isSingleCourseLoading: false,
  })),

  // Reducers for requesting filtered courses
  on(CourseActions.requestFilteredCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
  })),
  on(CourseActions.requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
    isSearchState: true,
  })),
  on(CourseActions.requestFilteredCoursesFail, (state) => ({
    ...state,
    isAllCoursesLoading: false,
    isSearchState: false,
  })),

  // Reducers for deleting a course
  on(CourseActions.requestDeleteCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(CourseActions.requestDeleteCourseSuccess, (state, { courseId }) => ({
    ...state,
    allCourses: state.allCourses.filter((course) => course.id !== courseId),
    course: null,
    isSingleCourseLoading: false,
  })),
  on(CourseActions.requestDeleteCourseFail, (state) => ({
    ...state,
    isSingleCourseLoading: false,
  })),

  //Reducers for editing a course
  on(CourseActions.requestEditCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(CourseActions.requestEditCourseSuccess, (state, { courseId }) => ({
    ...state,
    course: state.allCourses.find((course) => course.id === courseId),
    isSingleCourseLoading: false,
  })),
  on(CourseActions.requestEditCourseFail, (state) => ({
    ...state,
    isSingleCourseLoading: false,
  })),

  //Reducers for editing a course
  on(CourseActions.requestCreateCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
    on(CourseActions.requestCreateCourseSuccess, (state, { course }) => ({
      ...state,
    allCourses: [...state.allCourses, course],
    isSingleCourseLoading: false,
  })),
  on(CourseActions.requestCreateCourseFail, (state) => ({
    ...state,
    isSingleCourseLoading: false,
  }))
);
