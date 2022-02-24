import { Component, Input } from '@angular/core';

@Component({
  selector: 'control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css'],
})
export class ControlButtonComponent {
  @Input() itemInput: any;
  @Input() allItems: any;
  @Input() filter: 'all' | 'active' | 'done' = 'all';

  // get items() {
  //   if (this.filter === 'all') {
  //     return this.allItems;
  //   }
  //   return this.allItems.filter((item: Item) =>
  //     this.filter === 'done' ? item.done : !item.done
  //   );
  // }
}
