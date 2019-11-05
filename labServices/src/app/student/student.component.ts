import { Component, OnInit, Input } from '@angular/core';
import { Student, StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  @Input() st:Student;

  constructor(private stService:StudentsService) { }

  ngOnInit() {
  }

  delStudent(){
    this.stService.delStudent(this.st);
  }

}
