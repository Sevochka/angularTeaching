import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Post} from "../app.component"


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
                                                       
  @Input('myPost') post: Post; 

  @Output() onRemove = new EventEmitter();
  constructor() { 
    console.log("constructor");
  }

  removePost(){
    this.onRemove.emit(this.post.id);
  }
  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAFterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }



 



}
