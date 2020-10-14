class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer); // 고객 ID
  }

  get customer() {
    return this._customer;
  }
}
