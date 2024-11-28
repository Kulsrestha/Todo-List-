import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageKey = 'todos';
  private currentRole: string | null = null;

  getRole() {
    return this.currentRole;
  }

  setRole(role: string) {
    this.currentRole = role;
  }

  isAdmin() {
    return this.currentRole === 'Admin';
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Assuming you store an auth token
  }

  getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveTodos(todos: Todo[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  addTodo(todo: { title: string; description: string; done: boolean }) {
    const todos = this.getTodos();
    const newTodo = { ...todo, id: Date.now() };
    todos.push(newTodo);
    this.saveTodos(todos);
  }

  deleteTodo(index: number) {
    const todos = this.getTodos();
    todos.splice(index, 1);
    this.saveTodos(todos);
  }

  toggleTodo(index: number) {
    const todos = this.getTodos();
    todos[index].done = !todos[index].done;
    this.saveTodos(todos);
  }

  getTodoById(id: number): Todo | undefined {
    return this.getTodos().find((todo: Todo) => todo.id === id);
  }

  updateTodo(id: number, updatedTodo: { title: string; description: string }) {
    const todos = this.getTodos();
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);
    if (todoIndex > -1) {
      todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
      this.saveTodos(todos);
    }
  }
}
