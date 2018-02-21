import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  template:`<h1>welcome {{welcomeMsg}}</h1>
  Lowercase/Uppercase Pipe:{{welcomeMsg | uppercase}}<br>
  Currency Pipe:{{price | currency:"INR"}}<br>
  Date Formats:{{today|date}};<br>
  Date Formats:{{today|date:"mediumDate"}};<br>
  Date Formats:{{today|date:"shortDate"}};<br>
  Date Formats:{{today|date:"longDate"}};<br>
  Date Formats:{{today|date:"MM/dd/yy"}};<br>
  JSON pipe:{{obj|json}};<br>
  CamelCase:{{welcomeMsg|camelcase}}<br>
  phone:{{phonen|phone}}
  `,
  styles:['h1{color:red;}']
})
export class WelcomeComponent implements OnInit {
welcomeMsg:string="sdsdsd";
price:number=345;
today:Date=new Date();
phonen:string="3454567";

// obj=new WelcomeComponent();
constructor() { 
    this.welcomeMsg="ABCD";
    // this.obj=[{username:'asas',password:'dfdhdf'}];
  }

  ngOnInit() {
  }

}
