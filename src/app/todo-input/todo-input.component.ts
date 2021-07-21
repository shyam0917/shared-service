import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
todoText = "";
@Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.onAdd.emit(this.todoText);
  this.todoText = "";
  }

}
