import { listItemModel } from './model';
export class TodoServiceManager {
  mylist: listItemModel[];
  constructor() {
    this.mylist = [];
  }

  get OpenTodo(): listItemModel[] {
    return this.mylist.filter((x) => x.isComplete === true);
  }
  get CloseToDo(): listItemModel[] {
    return this.mylist.filter((x) => x.isComplete === false);
  }
  AddNewItemToDo(title: string):any {
    this.mylist.push(new listItemModel(title));
  }
}
