import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app/login.service';
import { user } from '../app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  name: string = "admin";
  password: string = "admin";
isAdmin:boolean=true;
  constructor(private ls:LoginService,private router:Router) {
    
     }

  ngOnInit() {
  }
  login():void{
    let u=new user("admin","admin",true);
    this.ls.setuser(u);
    //redirect to Products Component
    this.router.navigate(['/product-components']);
  }
  logout():void{
    let u=new user("","",false);
    
    this.ls.setuser(u);
  }
  // validate(u: string, p: string) {
  //   if (u == this.name && p == this.password) {
  //     alert("admin admin");
  //   }
  //   else
  //     alert("fill the details");
  // }
}
