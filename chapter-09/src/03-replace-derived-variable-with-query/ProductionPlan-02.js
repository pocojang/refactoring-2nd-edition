class ProductionPlan {
  constructor(production) {
    this._production = production;
    this._adjustments = [];
  }

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  get calculatedProduction() {
    return this._adjustments;
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}
