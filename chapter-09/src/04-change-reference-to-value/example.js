/**
 * 리팩토링 전
 */
class Product {
  applyDiscount(arg) {
    this._price.amount -= arg;
  }
}
/**
 * 리팩토링 후
 */
class Product {
  applyDiscount(arg) {
    this._price = new Money(this._price.amount - arg, this._price.currency);
  }
}
