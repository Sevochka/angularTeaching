import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arr:Array<String> = ["Иванов", "Петров", "Сидоров", "Ахмедов", "Ерошкин"];
  name: string = "";
  addUser(){
    this.arr.push(this.name);
  }
  deleteUser(user:string){
    for (let i = 0; i < this.arr.length; i++) {
      if (user == this.arr[i]) {
        this.arr.splice(i,1);
      }
    }
  }
}
