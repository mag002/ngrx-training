import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'https://5ed9b3304378690016c6b278.mockapi.io/api/todo'

  createTodo(model: Todo) {
    return this.http.post(this.baseURL, model)
  }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL)
  }

  editTodo(model: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseURL + model.id, model)
  }

  deleteTodo(todoId: any) {
    return this.http.delete(this.baseURL + todoId)
  }
}
