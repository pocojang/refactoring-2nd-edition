/**
 * 리팩토링 전
 */
get discountedTotal() {
  return this._discountedTotal;
}

set discountedTotal(aNumber) {
  const old = this._discount;
  this._discount = aNumber;
  this._discountTotal += old - aNumber;
}

/**
 * 리팩토링 후
 */
get discountedTotal() {
  return this._baseTotal - this._discount;
}

set discountedTotal(aNumber) {
  this._discount = aNumber;
}