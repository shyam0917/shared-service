import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
todoText = '';
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  addTodo(){
    this.sharedService.sendData.emit(this.todoText);
    this.sharedService.sendData2(this.todoText);
    this.sharedService.sendData3(this.todoText);
  }

}
