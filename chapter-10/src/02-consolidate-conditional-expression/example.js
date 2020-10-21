/**
 * 리팩토링 전
 */
if (anEmployee.seniority < 2) {
  return 0;
}
if (anEmployee.monthDisabled > 12) {
  return 0;
}
if (anEmployee.isPartTime) {
  return 0;
}

/**
 * 리팩토링 후
 */
if (isNotEligibleForDisability()) {
  return 0;
}

function isNotEligibleForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthDisabled < 12 ||
    anEmployee.isPartTime
  );
}
