// Code base Java

/**
 * 리팩토링 전
 */
class Employee {}

class Salesperson extends Employee {
  private String name;
}

class Engineer extends Employee {
  private String name;
}

/**
 * 리팩토링 후
 */
class Employee {
  protected String name;
}

class Salesperson extends Employee {}
class Engineer extends Employee {}
