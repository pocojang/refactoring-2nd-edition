/**
 * 리팩토링 전
 */
function getRaiting(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLaterDeliveries > 5;
}

/**
 * 리팩토링 후 (함수 인라인하기)
 */
function getRaiting(driver) {
  return driver.numberOfLaterDeliveries > 5 ? 2 : 1;
}
