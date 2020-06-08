import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Todo } from 'src/models/todo';
import { TodoState, selectTodo } from './store';
import * as TodoActions from './store/todo.actions'
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo$: Observable<Todo[]>;

  constructor(
    private store: Store<TodoState>,
    private todoService: TodoService

  ) { }
  public todo: Todo = {
    id: "",
    name: "",
    description: "",
    completed: false
  }
  public list: Todo[] = [{
    id: '1',
    name: 'abc',
    completed: false,
    description: 'abzzz'
  }]
  public task_input = "New"


  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos())
    this.loadTodo();

  }
  loadTodo() {
    // this.todoService.getTodo().subscribe(
    //   res => {
    //     this.store.dispatch(TodoActions.loadTodosSuccess({ todo: res }))
    //   },
    //   error => {
    //     this.store.dispatch(TodoActions.loadTodosFailure({ error }))
    //     console.log(error)
    //   }
    // )

    this.todo$ = this.store.pipe(select(selectTodo))

  }
  onSubmit(event) {
    event.preventDefault();
    this.todo.id = Math.random().toString();
    this.todo.name = this.task_input;
    this.todo.description = "new description";
    this.todo.completed = false
    console.log('%cHere!!!', 'color:red;font-size:2rem')
    // this.store.select()

  }
}
