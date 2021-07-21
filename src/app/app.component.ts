import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp-train';
toggleSearch = true;
listArr: any = [];
mainArr: any = [];
searchText='';


  doSearch(){
this.toggleSearch = true;
  }

  doAdd(){
    this.toggleSearch = false;
    this.listArr = this.mainArr;
  }

  addTodo(event: any){
    if(event){
      this.toggleSearch = false;
      this.listArr.push(event);
      this.mainArr = this.listArr;
    }

  }

  deleteTodo(event: any){
 this.listArr.splice(event,1);
  }

  searchTodo(event: any){
if(event)
this.searchText = event;
this.listArr = this.listArr.filter((i: any)=> i == this.searchText);
  }
}
