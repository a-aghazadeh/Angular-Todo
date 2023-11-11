import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { TodoServiceManager } from '../todo-service-manager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,TodoComponent,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  list: TodoServiceManager  = new TodoServiceManager();
  name :string = '';
  constructor(public toDoService: TodoService) {
    this.list.mylist = toDoService.getListItem();
  }

  addNewItem(){
  this.list.AddNewItemToDo(this.name)
  this.name =''
  }
}
