import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Products } from '../products-components/products-components.component';

@Injectable()
export class CartService {
  namesub:Subject<any>=new Subject<any>();
  remsub:Subject<any>=new Subject<any>();
  
  setuser(uo:any){
    this.namesub.next(uo);//add the new name to the subject
  }
  getuser():Observable<any>{
    //Invoked by header comp
    return this.namesub.asObservable();//as a stream of values
  }

  removal(p:Products){
    this.remsub.next(p);
  }
  getRemoved():any{
    return this.remsub.asObservable();
  }
  constructor() { 
    
    
  }


}
