import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { TitleComponent } from './components//title/title.component';
import { CountTaskComponent } from './components//count-task/count-task.component';
import { ControlButtonComponent } from './components//control-button/control-button.component';
import { TodoListComponent } from './components//todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TitleComponent,
    CountTaskComponent,
    ControlButtonComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
