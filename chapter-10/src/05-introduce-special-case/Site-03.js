/**
 * 예시: 객체 리터럴 이용하기
 */
class Site {
  get customer() {
    return this._customer === '미확인 고객'
      ? createUnknownCustomer()
      : this._customer;
  }
}
