/**
 * 리팩토링 전
 */
const aReading = acquireReading();
const basicChargeAmount = calculateBaseChage(aReading);

function calculateBaseChage(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

/**
 * 리팩토링 후
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.taxableCharge;
