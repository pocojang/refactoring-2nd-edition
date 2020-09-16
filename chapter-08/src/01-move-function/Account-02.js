/**
 * 다른 클래스 옮기기
 */
class Account {
  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;

    if (this.daysOverdrawn > 0) {
      // 초과 인출 이자 계산
      result += this.type.overdraftCharge(this.daysOverdrawn);
    }

    return result;
  }
}
