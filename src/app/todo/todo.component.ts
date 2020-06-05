import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private store: Store,

  ) { }
  public todo: Todo = {
    id: "",
    name: "",
    description: "",
    completed: false
  }
  public list = [
    {
      name: "task 1",
      description: "Task 1 description",
      completed: true
    },
    {
      name: "task 2",
      description: "Task 2 description",
      completed: false
    },
    {
      name: "task 3",
      description: "Task 3 description",
      completed: false
    },
    {
      name: "task 4",
      description: "Task 4 description",
      completed: false
    },
  ]
  public task_input = "New"
  onSubmit(event) {
    event.preventDefault();
    this.todo.id = Math.random().toString();
    this.todo.name = this.task_input;
    this.todo.description = "new description";
    this.todo.completed = false
    console.log('%cHere!!!', 'color:red;font-size:2rem')
    // this.store.select()

  }
  ngOnInit(): void {
  }

}
