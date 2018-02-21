import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { photo } from './photo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotoService {
  
  //injecting a service within a service
  constructor(private http:HttpClient) {

   }
  getphotos():Observable<any>{
return this.http.get('https://jsonplaceholder.typicode.com/photos')
    }


    // get():Promise<any>{
    //   return this.http.get('https://jsonplaceholder.typicode.com/photos')
    //       }
}
