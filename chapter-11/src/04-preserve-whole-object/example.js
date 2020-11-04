/**
 * 리팩토링 전
 */
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;

if (aPlan.withinRage(low, high)) {
  // some code
}

/**
 * 리팩토링 후
 */
if (aPlan.withinRage(aRoom.daysTempRange)) {
  // some code
}
