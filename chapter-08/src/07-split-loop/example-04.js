function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;

  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
  }

  return youngest;
}

function totalSalary() {
  let totalSalary = 0;

  for (const p of people) {
    totalSalary += p.salary;
  }

  return totalSalary;
}

function example() {
  return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;
}
