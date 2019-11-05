import { Injectable } from '@angular/core';


export interface Student{
  fullName:string,
  grade:string,
  age:number
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  students:Student[] = [
    {fullName: "Anton", grade: "11A", age:17},
    {fullName: "Griga", grade: "6B", age:15},
    {fullName: "Masha", grade: "5L", age:12},
    {fullName: "Sasha", grade: "3C", age:33},
    {fullName: "Kesha", grade: "6K", age:78},
  ];
  addStudent(st:Student){
    this.students.unshift(st);
  }

  delStudent(st:Student){
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i] == st) {
        this.students.splice(i,1);
        return;
      }
    }
  }
  
}
