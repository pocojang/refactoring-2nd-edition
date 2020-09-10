/**
 * 리팩토링 전
 */
manager = aPerson.department.manager;

/**
 * 리팩토링 후
 */
manager = aPerson.manager;

class Person {
  get manager() {
    return this.department.manager;
  }
}
