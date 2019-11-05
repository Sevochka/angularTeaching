import { Component } from '@angular/core';

export interface Post{
  title: string,
  text:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  e:number = Math.E;
  searchField = "title";
  flag:boolean = false;
  posts: Post[] = [
    {title: 'Beer', text: 'The best beer in the world'},
    {title: 'JavaScript', text: 'The best language in the world'},
    {title: 'Bred', text: 'The best bread in the world'},
    {title:"angular8", text:"hello world"}
  ];
  search = "";
  addPost(){
    this.posts.unshift({title:"Angular8", text:"hello world"});
  }
}
