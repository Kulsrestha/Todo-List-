import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';



@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: { title: string; description: string; done: boolean }[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this Todo?');
    if (confirmDelete) {
      this.todoService.deleteTodo(index);
      alert('Todo deletion successful');
      this.loadTodos(); // Reload todos to reflect the change
    }
  }

  toggleTodo(index: number) {
    this.todoService.toggleTodo(index);
    this.loadTodos(); // Reload todos to reflect the updated done state
  }
}
