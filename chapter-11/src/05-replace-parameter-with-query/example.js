/**
 * 리팩토링 전
 */
availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {
  // 연휴 계산...
}

/**
 * 리팩토링 후
 */
availableVacation(anEmployee);

function availableVacation(anEmployee) {
  const grade = anEmployee.grade;

  // 연휴 계산...
}
