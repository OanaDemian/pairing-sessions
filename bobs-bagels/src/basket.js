const basket = {
  basketItems: [],
  addItem: function (item) {
    this.basketItems.push(item);
  },
  removeItem: function (item) {
    const index = this.basketItems.indexOf(item);
    this.basketItems.splice(index, 1);
  }
}

module.exports = basket;
