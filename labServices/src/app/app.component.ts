import { Component, OnInit } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { StudentsService, Student } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  students:Student[];
  constructor(private appCounterService: AppCounterService, private stService: StudentsService){}

  ngOnInit(): void {
    this.students = this.stService.students; 
  }


}
