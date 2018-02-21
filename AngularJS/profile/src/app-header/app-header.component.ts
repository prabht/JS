import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
  
})
export class AppHeaderComponent implements OnInit {
username:string;
  constructor(private ls:LoginService) {
    this.ls.getuser().subscribe(user=>{
      //whenever newname is recieved
      // this.username=newname;

this.username=user.username;
    });
     }

  ngOnInit() {
  }

}
