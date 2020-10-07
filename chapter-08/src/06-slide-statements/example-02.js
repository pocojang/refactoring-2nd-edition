/**
 * 예시
 */
const chargePerUnit = pricingPlan.unit;

const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
if (order.isRepeat) {
  discount += 20;
}
charge = charge - discount;
chargeOrder(charge);
