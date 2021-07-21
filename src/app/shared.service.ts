import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
sendData = new EventEmitter<any>();
sendDataText='';
subject = new Subject<any>();


  constructor() { }

  sendData2(text: string){
this.sendDataText = text;
  }

  sendData3(message: string) {
    this.subject.next(message);
  }

  getData(){
    return this.sendDataText;
  }

  getData2(){
    return this.subject.asObservable();
  }
}
