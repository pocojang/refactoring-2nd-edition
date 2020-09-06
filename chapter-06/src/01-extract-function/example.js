/**
 * 리팩토링 전
 */
function printOwing(invoice) {
  printBanner();

  let outstanding = calculatorOutstanding();

  // 세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
}

/**
 * 리팩토링 후 (함수 추출하기)
 */
function printOwing(invoice) {
  printBanner();
  let outstanding = calculatorOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
  }
}
