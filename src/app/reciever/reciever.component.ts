import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit,OnDestroy {
subscription: Subscription;

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
showData ='';
  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.getData2().subscribe(result=>{
      console.log('data via subject',result);
    })
   }

  ngOnInit(): void {
this.sharedService.sendData.subscribe(res=>{
  // this.showData = res;
  console.log('data recieved',res);
})


  }

  displayText(){
    console.log('via method',this.sharedService.getData());
    this.showData = this.sharedService.getData();
  }

}
