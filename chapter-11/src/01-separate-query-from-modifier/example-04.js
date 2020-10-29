function alertForMiscreant(people) {
  if (findMiscreant(people) !== '') {
    setOffAlarms();
  }
}
