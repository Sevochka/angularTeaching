import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'alphabet'
})
export class AlphabetPipe implements PipeTransform {

  transform(posts:Post[], flag:boolean): Post[] {
    if (flag) {
      return posts.sort(function (a,b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1; 
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1; 
        return 0;
      })
    }
    else{
      return posts;
    }

    
  }

}
