import { Component, OnInit } from '@angular/core';
import {User} from './User';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { TodoService } from '../to-do-list/todo.service';
@Component({
    selector:'userform',
    templateUrl: 'signupform.component.html',
    styles:[
        `
        input.ng-valid{
            border-left:solid 5px green;
        }
        
        input.ng-invalid{
            border-left:solid 5px red;
        }
        `
    ],
    providers:[LoginService,TodoService]
})
export class SignUpFormComponent  {

    uname:string;
    constructor(private ls:LoginService,private router:Router,private td:TodoService) {
       }
  
    ngOnInit() {
    }
    
    login(n:string,pass:string):void{
    //   console.log("Asass"+n+pass);

      //redirect to Products Component
      if(n=="Prabhav"&&pass=="admin123"){
      this.router.navigate(['/home',n]);
      
      this.uname=n;
     
    }
    }
    change(){
        this.td.uname=this.uname;
    }
    logout():void{
      let u=new User("","");
      
      this.ls.setuser(u);
    }

    user:User = {
            name : 'Prabhav',             
            password:'admin123'
        
    }
    postForm():void{
        //HTTP Post request
        alert("posted the form"); 
    }
 
}