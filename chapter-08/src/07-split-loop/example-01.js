/**
 * 리팩토링 전
 */
let averageAge = 0;
let totalSalary = 0;

for (const p of people) {
  averageAge += p.age;
  totalSalary += p.salary;
}

averageAge = averageAge / people.length;

/**
 * 리팩토링 후
 */
let totalSalary = 0;

for (const p of people) {
  totalSalary += p.salary;
}
let averageAge = 0;

for (const p of people) {
  averageAge += p.age;
}

averageAge = averageAge / people.length;
