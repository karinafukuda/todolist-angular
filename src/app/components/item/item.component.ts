import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable: boolean = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();
  @Output() update = new EventEmitter<object>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  isEditable(): void {
    this.editable = !this.editable;
  }
}
