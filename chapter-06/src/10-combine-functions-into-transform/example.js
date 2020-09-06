/**
 * 리팩토링 전
 */
function base(aReading) {}
function taxableCharge(aReading) {}

/**
 * 리팩토링 후
 */
function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);

  return aReading;
}
