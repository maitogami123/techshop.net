import { Routes } from '@angular/router';
import { TodoComponent } from './sample/todo/todo.component';
import { CounterComponent } from './sample/counter/counter.component';
import { HomeComponent } from './sample/home/home.component';
import { FetchDataComponent } from './sample/fetch-data/fetch-data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'todo', component: TodoComponent },
];
