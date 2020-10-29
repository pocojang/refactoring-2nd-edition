/**
 * 리팩토링 전
 */
function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

/**
 * 리팩토링 후
 */
function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}
