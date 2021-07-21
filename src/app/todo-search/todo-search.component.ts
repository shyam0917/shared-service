import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
todoSearch = "";
@Output() onSearch = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){
this.onSearch.emit(this.todoSearch);
  }

}
