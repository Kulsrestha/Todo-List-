import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  title: string = '';
  description: string = '';

  constructor(private todoService: TodoService, private router:Router) {}

  saveTodo() {
    if (!this.title || !this.description) {
      alert('Title and description must be filled');
      return;
    }
    const newTodo = { title: this.title, description: this.description, done: false };
    this.todoService.addTodo(newTodo);

    // Reset form fields after saving
    this.title = '';
    this.description = '';

    this.router.navigate(['/todo-list']);
  }
}
