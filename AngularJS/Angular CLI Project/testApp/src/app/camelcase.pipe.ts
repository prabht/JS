import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(inputvalue: string, args: string[]): any {
    //logic to convert the first character to capital
    if(!inputvalue)return inputvalue;
  return inputvalue.replace(/\w\S*/g,function(txt){
      return txt.charAt(0).toUpperCase()+
      txt.substr(1).toLowerCase();
  })
  }

}
