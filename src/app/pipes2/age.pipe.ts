import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);

    let currentyear  = new Date().getFullYear() //2019
    let userbirthyear  = new Date(value).getFullYear() //2019
let userage = currentyear-userbirthyear;
    //return null;
    return userage;

  }

}
