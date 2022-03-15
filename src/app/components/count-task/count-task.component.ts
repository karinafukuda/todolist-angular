import { Component, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'count-task',
  templateUrl: './count-task.component.html',
  styleUrls: ['./count-task.component.css'],
})
export class CountTaskComponent {
  @Input() items: Item[];
}
