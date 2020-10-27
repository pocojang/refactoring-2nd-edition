function checkForMiscreants(people) {
  if (people.some((p) => ['조커', '사루만'].includes(p))) {
    sendAlert();
  }

  // some code
}
