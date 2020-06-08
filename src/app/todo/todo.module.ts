import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodoState from './store';

import { TodoComponent } from '../todo/todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodoState.todoStateFeatureKey, fromTodoState.reducers, { metaReducers: fromTodoState.metaReducers }),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule { }
