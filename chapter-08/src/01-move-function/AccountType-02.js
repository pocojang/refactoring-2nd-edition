/**
 * 소스 컨텍스트 데이터가 많을 때
 */
class AccountType {
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;

      if (account.daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (account.daysOverdrawn - 7) * 0.85;
      }
    } else {
      return account.daysOverdrawn * 1.75;
    }
  }
}
