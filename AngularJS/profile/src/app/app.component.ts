import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  providers:[LoginService]  
  
})
export class AppComponent {
  name='addads';
  // u:PersonComponent;
  // u=new PersonComponent();
  handleUpdate(newvalue:any):void{
    //set the name to new value
  this.name=newvalue;
  } 
}
