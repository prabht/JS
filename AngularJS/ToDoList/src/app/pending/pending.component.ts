import { Component, OnInit } from '@angular/core';
import { TodoService } from '../to-do-list/todo.service';
import { items } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'],
  // providers: [{ provide: TodoService, useClass: TodoService }]

})
export class PendingComponent implements OnInit {

  pitems: Array<items>;

  uname:string;

  constructor(private td: TodoService) {

    this.pitems = this.td.getItems().filter(function (value: items) {
      return value.done == false;
    });
    this.uname=this.td.uname;
    
  }
  ngOnInit() {
    
}
}