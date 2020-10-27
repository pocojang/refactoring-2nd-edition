class Customer {
  applyDiscount(aNumber) {
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
  }
}
