import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ///////////
  str1:string = 'Str';
  str2:string = 'Str2';
  onInput(event:any){
    this.str2 = event.target.value;
  }
  /////////
  flag:boolean = true;
  toggle:boolean = true;
  //////////
  arr = ["Антон", "Владимир", "Артем", "Григорий", "Георгий", "Степка"];
  ///
  objArr = [
    {fullName: "Александр Сергеевич Пушкин", birthdate: "26 мая 1799 г.", compositions: ["Капитанская дочка", "Евгений Онегин", "Медный всадник"]},
    {fullName: "Герберт Джордж Уэллс", birthdate: "21 сентября 1866 г.", compositions: ["Война миров", "Машина времени", "Человек-невидимка"]},
    {fullName: "Лев Николаевич Толсто́й", birthdate: "9 сентября 1828 г.", compositions: ["Война и мир", "Анна Каренина"]},
  ]
  ///pipes
  strForPipe:string = "Hello Angular World";
  date = new Date();
  number = 0.22;
}
