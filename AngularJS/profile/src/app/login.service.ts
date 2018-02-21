import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { user } from './user';

@Injectable()
export class LoginService {

  constructor() { }
namesub:Subject<user>=new Subject<user>();

  setuser(uo:user){
    this.namesub.next(uo);//add the new name to the subject
  }
  getuser():Observable<user>{
    //Invoked by header comp
    return this.namesub.asObservable();//as a stream of values
  }
}
