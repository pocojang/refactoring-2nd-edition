/**
 * 리팩토링 전
 */
class Employee {}

class Salesperson extends Employee {
  get name() {}
}

class Engineer extends Employee {
  get name() {}
}

/**
 * 리팩토링 후
 */
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
