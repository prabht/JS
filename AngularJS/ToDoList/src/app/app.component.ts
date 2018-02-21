import { Component } from '@angular/core';
import { items } from './to-do-list/to-do-list.component';
// import 'bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item1=new items("dsd",false,new Date(2017,12,7),new Date(2017,12,10));
  
}
