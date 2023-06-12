
class Basket {
  constructor() {
  this.basketBagels = [];
  }
  addBagel(bagel) {
    this.basketBagels = [...this.basketBagels, bagel];
  }
}
module.exports = Basket;