import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `<h1>Hi,Admin here!</h1>`,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name:string;

address:string;

  constructor() { 
    this.name="prabhavmm";
    this.address="dddsdsd";
  }

  ngOnInit() {
  }

}
