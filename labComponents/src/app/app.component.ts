import { Component } from '@angular/core';

export interface Post {
  title: string;
  text:string,
  id?:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title: "I want to learn Angular Components", text: "I'm still learning components", id: 1},
    {title: "The next lesson", text: "is about pipes", id: 2}
  ];

  updatePosts(post){
    //console.log(post);
    this.posts.unshift(post);
  }

  removePost(id){
    //this.posts = this.posts.filter(p => p.id !== id);
    
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        this.posts.splice(i,1);
      }
      
    }
  }
}
