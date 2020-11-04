class Order {
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;

    let discountLevel;

    if (this.quantity > 100) {
      discountLevel = 2;
    } else {
      discountLevel = 1;
    }

    return this.discountLevel(basePrice, discountLevel);
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}
