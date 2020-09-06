/**
 * 지역 변수의 값을 변경할 때
 */
function printOwing(invoice) {
  printBanner();

  // 함수 추출 완료. 추출한 함수가 반환한 값을 원래 변수에 저장
  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let result = 0;

  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function printBanner() {
  console.log('*****************');
  console.log('**** 고객 채무 ****');
  console.log('*****************');
}

function printDetails() {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
}
