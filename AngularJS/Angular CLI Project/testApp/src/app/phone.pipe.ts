import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): any {
    let t:string="";
    for (let i = 0; i < value.length; i++) {
      
      t+=value.charAt(i);
      if(i!=0 &&(i+1)%3==0){
        t+='-';
      }
        console.log(value[i]);
    }
      return t;
    }
    
  }

