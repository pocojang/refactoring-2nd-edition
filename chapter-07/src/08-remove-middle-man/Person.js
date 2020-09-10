/**
 * 리팩토링 전
 */
class Person {
  get department() {
    return this._department.manager;
  }
}

/**
 * 리팩토링 후
 */
class Person {
  get department() {
    return this._department;
  }
}
