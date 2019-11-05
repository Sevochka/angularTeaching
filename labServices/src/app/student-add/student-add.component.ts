import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../services/students.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private stService:StudentsService) { }

  fullName:string;
  grade:string;
  age:number;

  ngOnInit() {
  }

  addSt(){
    this.stService.addStudent({fullName:this.fullName, grade: this.grade, age: this.age});
  }

}
