import { Component, Input } from '@angular/core';

@Component({
  selector: 'count-task',
  templateUrl: './count-task.component.html',
  styleUrls: ['./count-task.component.css'],
})
export class CountTaskComponent {
  @Input() items: any[];
}
