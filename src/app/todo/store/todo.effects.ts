import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from 'src/app/services/todo.service';
import * as TodoActions from './todo.actions'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs';


@Injectable()
export class TodoEffects {

  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getTodo().pipe(
          map(todo => TodoActions.loadTodosSuccess({ todo })),
          catchError(err => of(TodoActions.loadTodosFailure({ error: err })))
        ))
    )
  )

  constructor(private actions$: Actions, private todoService: TodoService) { }

}
