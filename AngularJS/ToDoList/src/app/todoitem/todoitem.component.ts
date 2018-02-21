import { Component, OnInit,Input } from '@angular/core';
import { TodoService } from '../to-do-list/todo.service';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css'],
  
})
export class TodoitemComponent {

  @Input()
  obj=ToDoListComponent;

  constructor() { }

  ngOnInit() {
  }

}
