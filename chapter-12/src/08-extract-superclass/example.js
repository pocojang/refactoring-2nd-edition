/**
 * 리팩토링 전
 */
class Department {
  get totalAnnualCost() {}

  get name() {}

  get headCount() {}
}

class Employee {
  get annualCost() {}

  get name() {}

  get id() {}
}

/**
 * 리팩토링 후
 */
class Party {
  get name() {}

  get annualCost() {}
}

class Department extends Party {
  get annualCost() {}

  get headCount() {}
}

class Employee extends Party {
  get annualCost() {}

  get id() {}
}
