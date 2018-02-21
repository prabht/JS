import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { User } from './user/User';

@Injectable()
export class LoginService {

  constructor() { }
namesub:Subject<User>=new Subject<User>();

  setuser(uo:User){
    this.namesub.next(uo);//add the new name to the subject
  }
  getuser():Observable<User>{
    //Invoked by header comp
    return this.namesub.asObservable();//as a stream of values
  }
}
