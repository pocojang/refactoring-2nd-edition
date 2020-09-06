const { assert } = require('console');

/**
 * 매개변수 추가하기
 */
class Book {
  // ... some code

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);

    this._reservations.push(customer);
  }
}
