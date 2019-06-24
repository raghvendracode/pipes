import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    //console.log(value);

    let currentdate:any = new Date().getFullYear()  //year


 let  userdate:any = new Date(value).getFullYear()//

  let myage:any = currentdate-userdate

    return myage;
  }

}
