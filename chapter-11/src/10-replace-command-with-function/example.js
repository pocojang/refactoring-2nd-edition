/**
 * 리팩토링 전
 */
class ChargeCalculator {
  constructor(customer, usage) {
    this._customer = customer;
    this._usage = usage;
  }

  execute() {
    return this._customer.rate * this._usage;
  }
}

/**
 * 리팩토링 후
 */
function charge(customer, usage) {
  return customer.rate * usage;
}
