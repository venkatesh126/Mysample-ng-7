import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let curentdate = new Date().getFullYear();
    let pipedate = new Date(value).getFullYear();
    let result = curentdate - pipedate;
    return result;
  }

}

