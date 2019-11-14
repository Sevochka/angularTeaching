import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(workers: Worker[], search:string): Worker[] {
    if (!search.trim()) {
      return workers;
    }
    return workers.filter(post => {
      return post["lastName"].toLowerCase().includes(search.toLowerCase());
    })
  }

}
