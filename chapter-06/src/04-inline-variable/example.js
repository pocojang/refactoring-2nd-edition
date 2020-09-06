/**
 * 리팩토링 전
 */
((anOrder) => {
  let basePrice = anOrder.basePrice;

  return basePrice > 1000;
})(anOrder);

/**
 * 리팩토링 후 (변수 인라인하기)
 */
((anOrder) => {
  return anOrder.basePrice > 1000;
})(anOrder);
