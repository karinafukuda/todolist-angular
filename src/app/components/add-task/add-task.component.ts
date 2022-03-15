import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @ViewChild('newItem') input: ElementRef;
  @Output() itemAdd = new EventEmitter<Item>();
  msg: string = 'Você precisa adicionar um texto para uma nova tarefa!';

  addItem(description: string) {
    if (!description) {
      alert(this.msg);
      return;
    }

    this.itemAdd.emit({ description, done: false });

    this.input.nativeElement.value = '';
  }
}
