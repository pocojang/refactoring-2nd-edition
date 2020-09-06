/**
 * 리팩토링 전
 */
function raiting(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLaterDeliveries > 5;
}

/**
 * 리팩토링 후 (함수 인라인하기)
 */
function raiting(aDriver) {
  return aDriver.numberOfLaterDeliveries > 5 ? 2 : 1;
}
