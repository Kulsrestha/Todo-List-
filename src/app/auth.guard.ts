import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private todoService: TodoService, private router: Router) {}

  canActivate(): boolean {
    if (this.todoService.isAuthenticated()) {
      return true; // Allow access
    }
    this.router.navigate(['/login']); // Redirect to login if not authenticated
    return false; // Deny access
  }
}
