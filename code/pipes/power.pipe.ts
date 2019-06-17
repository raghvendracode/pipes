import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
///note - PowerPipe is responsible for returns the base to the exponent power, that is, baseexponent.

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(base: number, exponent: number): number {
    return Math.pow(base, exponent);
 }
}
