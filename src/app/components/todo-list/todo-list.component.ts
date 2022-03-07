import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input('newItem') input: any;
  @Input() itemList: string;
  msg = 'Você precisa adicionar um texto para uma nova tarefa!';
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Estudar + cedo porque descanso é sagrado', done: false },
    { description: 'Ver anime', done: false },
    { description: 'Dormir às 21h', done: true },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  //unshift: é um método de array que adiciona o el. no index 0 de retorna novo array.
  addItem(item: Item) {
    this.allItems.unshift(item);
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  ngOnInit(): void {}
}
