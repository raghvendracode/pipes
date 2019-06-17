import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hobbypipe'
})
export class HobbypipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: any, hobbie: string): any {
    if(hobbie === 'dancing'){
     return "good hobbie is "+value;
     }
      else
     {
       return "bad hobbie is "+value;
     }
 }
}
