import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkersService } from 'src/app/workers.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  form: FormGroup; //Создание переменной группы

  constructor(private workersService:WorkersService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      patronymic: new FormControl("", Validators.required),
      department: new FormControl("", Validators.required)
    });
  }

  submit(){
    this.workersService.addWorker(this.form.value);
    this.form.reset(); //очистка формы после добавления
  }

}
