class DataStorage<T> {
  private items: T[] = [];
  addItems(item: T) {
    this.items.push(item);
  }
  removeItems(item: T) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  getItems() {
    return [...this.items];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItems("text");
// textStorage.addItems(5); -> error Argument of type 'number' is not assignable to parameter of type 'string'.
textStorage.addItems("rahim");
textStorage.removeItems("rahim");
textStorage.getItems();
