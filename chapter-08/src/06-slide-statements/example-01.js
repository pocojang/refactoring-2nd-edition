/**
 * 리팩토링 전
 */
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();

let charge;
const chargePerUnit = pricingPlan.unit;

/**
 * 리팩토링 후
 */
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();

let charge;
