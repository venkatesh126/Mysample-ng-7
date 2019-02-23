import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  public transform(value: any,args?:any): any {
    console.log(value,args, "pipe valuess");
    let curentdate = new Date().getFullYear();
    let pipedate = new Date(value).getFullYear();
    console.log(pipedate, "pipee dateee");
    let result = curentdate - pipedate;
    return result;
  }

}
