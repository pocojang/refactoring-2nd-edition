class Department extends Party {
  constructor(name, staff) {
    super(name);

    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }
  get name() {
    return this._name;
  }

  get totalMonthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }
}
