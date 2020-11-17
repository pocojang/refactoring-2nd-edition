/**
 * 리팩토링 전
 */
class Person {
  get genderCode() {
    return 'X';
  }
}

class Male extends Person {
  get genderCode() {
    return 'M';
  }
}

class Female extends Person {
  get genderCode() {
    return 'F';
  }
}

/**
 * 리팩토링 후
 */
class Person {
  get genderCode() {
    return this._genderCode;
  }
}
