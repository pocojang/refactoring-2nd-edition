class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);

    this.code = errorCode;
  }

  get name() {
    return 'OrderProcessingError';
  }
}

try {
  calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({
      order: orderData,
      errorCode: e.code,
    });
  }

  throw e;
}

function localShippingRules(country) {
  const data = countryData.shippingRules[country];

  if (data) {
    return new ShippingRules(data);
  } else {
    throw new OrderProcessingError(-23);
  }
}

function calculateShippingCosts(anOrder) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);

  // 더 관련 없는 코드
}
