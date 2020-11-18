class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);

    this._id = id;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

