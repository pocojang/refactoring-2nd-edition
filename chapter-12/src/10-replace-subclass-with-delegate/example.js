/**
 * 리팩토링 전
 */
class Order {
  get daysToShip() {
    return this._warehouse.daysToShip;
  }
}

class PriorityOrder extends Order {
  get daysToShip() {
    return this._priorityPlan.daysToShip;
  }
}

/**
 * 리팩토링 후
 */
class Order {
  get daysToShip() {
    return this._priorityDelegate
      ? this._priorityPlan.daysToShip
      : this._warehouse.daysToShip;
  }
}

class PriorityOrderDelegate {
  get daysToShip() {
    return this._priorityPlan.daysToShip;
  }
}
