import { CoursesState } from './courses/courses.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    courses: CoursesState,
}

export const reducers: ActionReducerMap<State> = {
    courses: undefined
};
