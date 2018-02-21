import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = "admin";
  password: string = "admin";

  constructor() {
  
   }

  ngOnInit() {
  }
  validate(u: string, p: string) {
    if (u == this.name && p == this.password) {
      alert("admin admin");
    }
    else
      alert("fill the details");
  }
}