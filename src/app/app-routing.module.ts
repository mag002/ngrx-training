import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path:"",
    component:TodoComponent  
  },
  {
    path:"todo/:id",
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
