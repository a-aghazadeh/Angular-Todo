export class listItemModel {
  constructor(public title: string, public isComplete: boolean = false) {
    this.title = title;
    this.isComplete = isComplete;
  }
}
