import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,OnChanges {
@Input() todoArr: any;
@Input() searchKey: any;
@Input() flag: any;
@Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges){
console.log(this.todoArr,change);
  }

  delete(index: number){
this.onDelete.emit(index);
  }

}
