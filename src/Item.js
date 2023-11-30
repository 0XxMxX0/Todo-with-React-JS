
class Item {

  static lastID = 0;

  constructor(text){
    this.id = Item.lastID++;
    this.text = text;
    this.done = false;
  }
}

export default Item;