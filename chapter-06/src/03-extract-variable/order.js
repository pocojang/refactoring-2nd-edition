/**
 * 리팩토링 전
 */
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }

  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return (
      order.quantity * order.itemPrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
      Math.min(order.quantity * order.itemPrice * 0.1, 0.05)
    );
  }
}

/**
 * 리팩토링 후 (변수 추출하기)
 */
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }

  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return order.quantity * order.itemPrice - quantityDiscount + shipping;
  }

  get basePrice() {
    return order.quantity * order.itemPrice;
  }

  get quantityDiscount() {
    return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(order.quantity * order.itemPrice * 0.1, 0.05);
  }
}
