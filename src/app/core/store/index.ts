import { CoursesState } from './courses/courses.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export interface State {
    CoursesState: CoursesState,
}

export const reducers: ActionReducerMap<State> = {
    CoursesState: undefined
};

export const effects: any[] = [];
