/**
 * 리팩토링 전
 */
class Customer {
  get plan() {
    return this._plan;
  }

  get discountRate() {
    return this._discountRate;
  }
}
/**
 * 리팩토링 후
 */
class Customer {
  get plan() {
    return this._plan;
  }

  get discountRate() {
    return this.plan.discountRate;
  }
}
