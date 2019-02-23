import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    let setitems = [];
    setitems.push(items);
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }
}
