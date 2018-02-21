import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todolist',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  todoitems: Array<items>;
  uname:string;
  constructor(private td:TodoService) {
    console.log("comp construct");
    
  
  this.td.getitem().subscribe(data=>{
    if(this.td.f==0){
    for(let i of data){
    let t=new items(i.title,i.completed,new Date(),new Date());
  
    this.td.todoitems.push(t);
    this.td.f=1;
    }
  }
});
this.uname= this.td.uname;


  }

  ngOnInit() {
 
}
  addItem(t: string) {
    let i = new items(t,false,new Date(2017,12,14),new Date(2017,12,16));

    console.log(i.title);
    this.td.setItem(i);
  }
  delItem(i) {
    
    this.td.removeItem(i);
  }
  markDone(i) {
    if(this.td.todoitems[i].done==true)
    this.td.todoitems[i].done=false;
    else
    this.td.todoitems[i].done=true;
    
  }
  
}
export class items {
  title: string;
  done: boolean;
  creationdate: Date;
  duedate: Date;

    // this.todoitems=new Array<items>();
  constructor(title: string,done: boolean,creationdate:Date,  duedate: Date) {
    this.title = title;
    this.done = done;
    this.creationdate=creationdate;
    this.duedate=duedate;
    
  }

}