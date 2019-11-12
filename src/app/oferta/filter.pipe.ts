import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterUnique',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: String, args?: String): any {

  }
}