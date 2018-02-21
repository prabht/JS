import { Component, OnInit } from '@angular/core';
import { TodoService } from '../to-do-list/todo.service';
import { items } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
  // providers:[{provide:TodoService,useClass:TodoService}]
  
})
export class CompletedComponent implements OnInit {

  citems: Array<items>;
  uname:string;

  constructor(private td:TodoService) {
   this.citems = this.td.getItems().filter(function (value: items) {
      return value.done == true;
    });
  this.uname=this.td.uname;
  }
  ngOnInit() {
  }

}
