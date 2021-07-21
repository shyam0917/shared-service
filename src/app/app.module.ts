import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharingComponent } from './sharing/sharing.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoSearchComponent,
    TodoListComponent,
    TodoInputComponent,
    SharingComponent,
    SenderComponent,
    RecieverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
