function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms();

      return;
    }
    if (p === '사루만') {
      setOffAlarms();

      return;
    }
  }

  return '';
}
