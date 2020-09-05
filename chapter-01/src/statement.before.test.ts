import invoicesData from './mock/invoices.json';
import playsData from './mock/plays.json';

import statement from './statement.before';

describe('비디오 대여점에서 영수증을 출력하는 프로그램', () => {
  const [invoice] = JSON.parse(JSON.stringify(invoicesData));
  const plays = JSON.parse(JSON.stringify(playsData));

  test('첫 번째 예시', () => {
    expect(statement(invoice, plays).replace(/\s/g, '')).toMatch(
      `청구내역 (고객명: BigCo)
      총액 hamlet : $650.00 (55석)
      총액 As You Like It : $580.00 (35석)
      총액 Othello : $500.00 (40석)
      총액: $1,730.00
      적립 포인트: 47점`.replace(/\s/g, ''),
    );
  });
});
