/**
 * 리팩토링 전
 */
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

/**
 * 리팩토링 후
 */
if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}
