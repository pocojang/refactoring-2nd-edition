/**
 * 리팩토링 전
 */
if (data) {
  return new ShippingRules(data);
} else {
  return -23;
}

/**
 * 리팩토링 후
 */
if (data) {
  return new ShippingRules(data);
} else {
  throw new OrderProcessingError(-23);
}
