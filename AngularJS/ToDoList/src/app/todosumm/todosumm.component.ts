import { Component, OnInit } from '@angular/core';
import { TodoService } from '../to-do-list/todo.service';
import { items } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-todosumm',
  templateUrl: './todosumm.component.html',
  styleUrls: ['./todosumm.component.css']
})
export class TodosummComponent implements OnInit {
count:number;
  constructor(private td:TodoService) {
    
    // this.count=td.todoitems.length;
    this.td.getitem().subscribe(data => {
      
        // this.pitems.push(t);
this.count=this.td.todoitems.length;
                 


  }); 
   }

  ngOnInit() {
  }

}
