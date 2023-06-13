
class Basket {
  constructor() {
    this.basketBagels = [];
    this.maxCapacity = 3;
  }
  addBagel(bagel) {
    this.basketBagels = [...this.basketBagels, bagel];
  }
  removeBagel(bagelName) {
    const index = this.basketBagels.indexOf(bagelName);
    this.basketBagels.splice(index, 1);
  }
  isFull() {
    return this.basketBagels.length >= this.maxCapacity;
  }
} 
export default Basket;
