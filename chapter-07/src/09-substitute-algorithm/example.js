/**
 * 리팩토링 전
 */
function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don';
    }
    if (people[i] === 'John') {
      return 'John';
    }
    if (people[i] === 'Kent') {
      return 'Kent';
    }
  }

  return '';
}

/**
 * 리팩토링 후
 */
function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];

  return people.find((p) => candidates.includes(p) || '');
}
