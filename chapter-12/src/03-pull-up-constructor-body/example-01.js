class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();

    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super();

    this._name = name;
    this._staff = staff;
  }
}
