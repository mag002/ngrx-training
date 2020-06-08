import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Todo } from 'src/models/todo';
import { loadTodosSuccess, loadTodosFailure } from './todo.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export const todoStateFeatureKey = 'todoState';

export interface TodoState {
  todo: Todo[],
  error: any
}

export const initialState: TodoState = {
  todo: undefined,
  error: undefined
}

export const reducers = createReducer(
  initialState,
  on(loadTodosSuccess, (state, action) => {
    return {
      ...state,
      todo: action.todo
    }
  }),
  on(loadTodosFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
)

export const selectTodoFeature = createFeatureSelector<TodoState>(
  todoStateFeatureKey
)

export const selectTodo = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.todo
)

export const metaReducers: MetaReducer<TodoState>[] = !environment.production ? [] : [];
