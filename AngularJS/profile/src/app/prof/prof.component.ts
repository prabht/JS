import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'prof',
  template: `
  <h2>Profile component</h2>

  <!--Username is {{username.name}}--> 
  <!--<input type="text" #ip [value]="username.name"/>-->  
   <!--<input type="text" [(ngModel)]="username.name"/>-->
  <button (click)="updateName()"></button>
  `
 
})
export class ProfComponent  {
@Input()
username:PersonComponent;
  constructor() { }
  //custom event update
  @Output()
  update:EventEmitter<string>=new EventEmitter<string>();
  updateName():void{
    //trigger a custom event update    
   // this.username.name=value;

    this.update.emit(this.username.name);
  }
}
