class Party {
  constructor(name) {
    this._name = name;
    this._monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}
