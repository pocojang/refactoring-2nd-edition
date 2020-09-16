/**
 * 소스 컨텍스트 데이터가 많을 때
 */
class Account {
  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;

    if (this.daysOverdrawn > 0) {
      // 초과 인출 이자 계산
      result += this.overdraftCharge;
    }

    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }
}
