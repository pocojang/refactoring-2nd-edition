/**
 * 리팩토링 전
 */
function bookConcert(aCustomer, isPremium) {
  if (isPremium) {
    // 프리미엄 예약용 로직
  } else {
    // 일반 예약용 로직
  }
}

// 프리미엄 예약
bookConcert(aCustomer, true);
bookConcert(aCustomer, Customer.PREMIUM);
bookConcert(aCustomer, 'premium');

/**
 * 리팩토링 후
 */
premiumBookConcert(aCustomer);
