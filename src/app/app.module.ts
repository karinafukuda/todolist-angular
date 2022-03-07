import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ControlButtonComponent } from './components//control-button/control-button.component';
import { TodoListComponent } from './components//todo-list/todo-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TitleComponent } from './components//title/title.component';
import { CountTaskComponent } from './components/count-task/count-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TitleComponent,
    CountTaskComponent,
    ControlButtonComponent,
    TodoListComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
