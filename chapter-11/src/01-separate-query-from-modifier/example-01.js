function alertForMiscreants(people) {
  for (const p of people) {
    if (p === '조커') {
      sendAlert();

      return '조커';
    }
    if (p === '사루만') {
      sendAlert();

      return '사루만';
    }
  }

  return;
}
