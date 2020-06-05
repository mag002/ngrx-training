import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ tasks: todoReducer.reducer }),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    // }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
