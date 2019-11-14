import { Component, OnInit, Input } from '@angular/core';
import { Worker, WorkersService } from 'src/app/workers.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  flag:boolean = false;

  str:string = "Edit";

  @Input() worker:Worker;

  constructor(private workersService:WorkersService) { }

  ngOnInit() {
    
  }

  onClick(){
    if (this.flag) {
      this.str = "Edit";
    }
    else{
      this.str = "Save";
    }
    this.flag = !this.flag;
  }

  removeWorker(){
    this.workersService.delWorker(this.worker);
  }


}
