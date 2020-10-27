/**
 * 리팩토링 전
 */
for (const p of people) {
  if (!found) {
    if (p === '조커') {
      sendAlert();
      found = true;
    }
  }
}

/**
 * 리팩토링 후
 */
for (const p of people) {
  if (p === '조커') {
    sendAlert();
    break;
  }
}
