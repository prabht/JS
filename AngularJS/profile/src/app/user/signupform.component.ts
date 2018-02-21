import { Component, OnInit } from '@angular/core';
import {User} from './User';
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
    ]
})
export class SignUpFormComponent  {
    user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }
    postForm():void{
        //HTTP Post request
        alert("posted the form"); 
    }
 
}