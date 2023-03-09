import { CoursesState } from './courses.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCoursesState = createFeatureSelector<CoursesState>('courses');

// export const getAllBooks = createSelector(
//   getBookState,
//   (state: State) => state.booksList
// );

// export const getBooksWithHightRate = createSelector(
//   getBookState,
//   (state: State) => state.booksList.filter((book: Book) => book.rate > 4)
// );

export const isAllCoursesLoadingSelector = createSelector(
  getCoursesState,
  (state: CoursesState) => state.isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
  getCoursesState,
  (state: CoursesState) => state.isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
  getCoursesState,
  (state: CoursesState) => state.isSingleCourseLoading
);

export const getCourses = () => {}; // ? what is it

export const getAllCourses = createSelector(
  getCoursesState,
  (state: CoursesState) => state.allCourses
);

export const getCourse = createSelector(
  getCoursesState,
  (state: CoursesState) => state.course
);

export const getErrorMessage = createSelector(
  getCoursesState,
  (state: CoursesState) => state.errorMessage
);
