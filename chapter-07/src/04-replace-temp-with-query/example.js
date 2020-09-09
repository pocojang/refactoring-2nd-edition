/**
 * 리팩토링 전
 */
const basePrice = this._quantity * this._itemPrice;

if (basePrice > 1000) {
  return basePrice * 0.95;
} else {
  return basePrice * 0.98;
}

/**
 * 리팩토링 후
 */
get basePrice(){
  return this._quantity * this._itemPrice;
}

if (basePrice > 1000) {
  return basePrice * 0.95;
} else {
  return basePrice * 0.98;
}