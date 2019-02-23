import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'table'
})
export class TablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {

      return value.filter(items => {
        items.startswith(args == true)
      })
    }
  }

}
