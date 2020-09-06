/**
 * 리팩토링 전
 */
function base(aReading) {}
function taxableCharge(aReading) {}
function calculateBaseChange(aReading) {}

/**
 * 리팩토링 후
 */
class Reading {
  base() {}
  taxableCharge() {}
  calculateBaseChange() {}
}
