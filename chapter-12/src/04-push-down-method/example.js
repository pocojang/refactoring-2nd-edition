// Code base Java

/**
 * 리팩토링 전
 */
class Employee {
  get quota() {}
}

class Engineer extends Employee {}
class Salesperson extends Employee {}

/**
 * 리팩토링 후
 */
class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
