// Code base Java

/**
 * 리팩토링 전
 */
class Employee {
  private String quota;
}

class Engineer extends Employee {}
class Salesperson extends Employee {}

/**
 * 리팩토링 후
 */
class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  protected String quota;
}
