import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitComma'
})
export class SplitPipe implements PipeTransform {
  transform(val:string):string[] {
    return val.split(',');
  }
}