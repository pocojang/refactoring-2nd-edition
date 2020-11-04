const { textSpanIsEmpty } = require('typescript');

/**
 * 예시: 새 함수를 다른 방식으로 만들기
 */
class HeatingPlan {
  xxNEWwithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low, high);

    return isWithinRange;
  }
}

const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(tempRange);

if (!isWithinRange) {
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}
