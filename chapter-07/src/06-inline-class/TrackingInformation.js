class TrackingInformation {
  get shippingCompnay() {
    return this._shippingCompnay;
  }

  set shippingCompnay(arg) {
    this._shippingCompnay = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompnay}: ${this.trackingNumber}`;
  }
}
