import { Component, OnInit } from '@angular/core';
import { TodoService } from '../to-do-list/todo.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[{provide:TodoService,useClass:TodoService}]
})
export class HomeComponent implements OnInit {

  user:string;
  constructor(private activeRoute:ActivatedRoute,private td:TodoService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams=>{
      this.user=routeParams['username'];
      console.log(this.user);
    })
  }
  changen(name:string){
    this.td.uname=name;
    console.log(this.td.uname);
}
change(){
  console.log();
  this.td.uname=this.user;
}
}
