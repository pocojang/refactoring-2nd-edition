/**
 * 리팩토링 전
 */
function createEmployee(name, type) {
  return new Employee(name, type);
}

/**
 * 리팩토링 후
 */
function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
    case 'salesperson':
      return new Salesperson(name);
    case 'manager':
      return new Manager(name);
  }
}
