import { Component, OnInit } from '@angular/core';
import { WorkersService, Worker } from 'src/app/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers:Worker[];
  search:string = "";

  constructor(private workersService: WorkersService) { }
  
  ngOnInit() {
    this.workers = this.workersService.workers;
  }

}
