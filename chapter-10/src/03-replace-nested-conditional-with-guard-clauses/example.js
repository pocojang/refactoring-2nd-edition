/**
 * 리팩토링 전
 */
function getPayAmount() {
  let result;

  if (isDead) {
    result = deadAmount();
  } else {
    if (isSeparated) {
      result = separateAmount();
    } else {
      if (isRetired) {
        result = retiredAmount();
      } else {
        result = normalPayAmount();
      }
    }
  }
}

/**
 * 리팩토링 후
 */
function getPayAmount() {
  if (isDead) {
    return deadAmount();
  }
  if (isSeparated) {
    return separateAmount();
  }
  if (isRetired) {
    return retiredAmount();
  }

  return normalPayAmount();
}
