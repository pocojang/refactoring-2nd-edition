/**
 * 리팩토링 전
 */
double getValueForPeriod (int number){
  try {
    return values[periodNumber]
  } catch (ArrayIndexOutOfBoundsException: error) {
    return 0
  }
}

/**
 * 리팩토링 후
 */
double getValueForPeriod (int periodNumber) {
  return (periodNumber >= values.length) ? 0 : values[periodNumber]
}