import { Injectable } from '@angular/core';
import { listItemModel } from './model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor() {}

  getListItem(): listItemModel[] {
    return [
      new listItemModel('one'),
      new listItemModel('two'),
      new listItemModel('three'),
    ];
  }
 
}
