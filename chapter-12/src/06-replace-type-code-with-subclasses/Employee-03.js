/**
 * 예시: 간접 상속할 때
 */
class Employee {
  constructor(name) {
    this._name = name;
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  get typeString() {
    return this._type.toString();
  }

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = Employee.createEmployee(arg);
  }

  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }

  static createEmployee(aString) {
    switch (aString) {
      case 'engineer':
        return new Engineer();
      case 'salesperson':
        return new Salesperson();
      case 'manager':
        return new Manager();
      default:
        throw new Error(`${aString}라는 직원 유형은 없습니다.`);
    }
  }
}

class EmployeeType {
  get capitalizedName() {
    return (
      this.toString().charAt(0).toUpperCase() +
      this.toString().substr(1).toLowerCase()
    );
  }
}

class Engineer extends EmployeeType {
  toString() {
    return 'engineer';
  }
}

class Salesperson extends EmployeeType {
  toString() {
    return 'salesperson';
  }
}

class Manager extends EmployeeType {
  toString() {
    return 'manager';
  }
}

function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
    case 'salesperson':
      return new Salesperson(name);
    case 'manager':
      return new Manager(name);
    default:
      throw new Error(`${type}라는 직원 유형은 없습니다.`);
  }
}
