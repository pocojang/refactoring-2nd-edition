function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) {
    return 0;
  }

  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthDisabled < 12 ||
    anEmployee.isPartTime
  );
}
