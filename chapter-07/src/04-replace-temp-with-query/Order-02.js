class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get basePrice() {
    return this._quantity * this._itemPrice;
  }

  get discountFactor() {
    var discountFactor = 0.98;

    if (basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return discountFactor;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
