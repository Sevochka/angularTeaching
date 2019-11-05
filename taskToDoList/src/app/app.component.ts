import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemAdd = "";
  check = true;
  toDoArr:Array<Object> = [
    {value:"Wake up", color:"#f8d7da"}, 
    {value:"Feed the dog", color:"white"}, 
    {value:"Sing songs", color:"white"}, 
    {value:"Put on the best clothes", color:"white"}, 
    {value:"Go to work", color:"white"}, 
  ]

  onDeleteItem(b){
    for (let i = 0; i < this.toDoArr.length; i++) {
      if (this.toDoArr[i] == b) {
        this.toDoArr.splice(i,1);
      }
    }
  }

  onChangePriority(b){
    if (b.color == "#f8d7da") {
      b.color = "white";
    }
    else{
      b.color = "#f8d7da"
    }
  }

  onSaveItem(){
    let obj = {
      value: this.itemAdd,
      color: this.check ? "white" : "#f8d7da"
    }
    this.toDoArr.push(obj);
  }

  onDeleteAll(){
    this.toDoArr = [];
  }
}
