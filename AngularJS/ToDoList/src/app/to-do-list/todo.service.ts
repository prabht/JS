import { Injectable } from '@angular/core';
import { ToDoListComponent, items } from './to-do-list.component';
import { PendingComponent } from '../pending/pending.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

@Injectable()
export class TodoService {
    todoitems: Array<items>;
    tobj:items;f:number=0;
    count:number;uname:string;
    constructor(private http:HttpClient)
    {   
        console.log("service");
    this.todoitems = new Array<items>();
        this.tobj=new items("dsd",true,new Date(2016,12,24),new Date(2016,12,25));
        this.todoitems.push(this.tobj);
        this.tobj=new items("dsd",false,new Date(2017,12,24),new Date(2018,1,24));
        this.todoitems.push(this.tobj);
        this.tobj=new items("dsd",true,new Date(2017,11,24),new Date(2018,3,1));
        this.todoitems.push(this.tobj);
        this.tobj=new items("dsd",false,new Date(2017,1,24),new Date(2017,4,25));
        this.todoitems.push(this.tobj);        
        this.tobj=new items("dsd",true,new Date(2016,12,24),new Date(2016,12,25));
        this.todoitems.push(this.tobj);
        
        
        }
getItems(){
  return this.todoitems;
}

getItemsAsObservable():Observable<items[]>{
    return Observable.of(this.todoitems);
  }
setItem(obj:items){

    this.todoitems.push(obj);

}
removeItem(index:number){
    this.todoitems.splice(index, 1)
    
    
}
getitem():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
    
    }

}
