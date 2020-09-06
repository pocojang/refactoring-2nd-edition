/**
 * 리팩토링 전
 */
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

/**
 * 리팩토링 후
 */
const newReading = acquireReading();
const aReading = new aReading(rawReading);
const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year),
);
