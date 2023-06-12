
class Basket {
  constructor() {
    this.basketBagels = [];
  }
  addBagel(bagel) {
    this.basketBagels = [...this.basketBagels, bagel];
  }
  removeBagel(bagelName) {
    const index = this.basketBagels.indexOf(bagelName);
    this.basketBagels.splice(index, 1);
  }
}
module.exports = Basket;
