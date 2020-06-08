import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../models/todo'
export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Effect Success',
  props<{ todo: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Effect Failure',
  props<{ error: any }>()
);
