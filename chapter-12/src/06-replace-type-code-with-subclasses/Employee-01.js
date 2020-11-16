class Employee {
  constructor(name, type) {
    this.validateType(type);

    this._name = name;
    this._type = type;
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = arg;
  }

  get capitalizedType() {
    return (
      this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase()
    );
  }

  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}

class Salesperson extends Employee {
  get type() {
    return 'salesperson';
  }
}

class Manager extends Employee {
  get type() {
    return 'manager';
  }
}

function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      return new Engineer(name, type);
    case 'salesperson':
      return new Salesperson(name, type);
    case 'manager':
      return new Manager(name, type);
  }

  return new Employee(name, type);
}
