class Site {
  get customer() {
    return this._customer === '미확인 고객'
      ? new UnknownCustomer()
      : this._customer;
  }
}
