import { Routes } from '@angular/router';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { LoginComponent } from './Components/login/login.component';


export const routes: Routes = [
    {path:'add-todo' ,component: TodoComponent},
    {path:'todo-list' ,component: TodoListComponent},
    {path:'login' ,component: LoginComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
