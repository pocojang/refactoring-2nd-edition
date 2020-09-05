import { Invoice, Plays, StatementData } from './types';

import createStatementData from './createStatementData';

function usd(aNumber: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

// 중간 데이터 구조를 인수로 전달
function renderPlainText(statementData: StatementData) {
  let result = `청구내역 (고객명: ${statementData.customer})\n`;

  for (let perf of statementData.performances) {
    // 청구 내역 출력
    result += ` ${perf.play.name} : ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(statementData.totalAmount)}\n`;
  result += `적립 포인트: ${statementData.totalVolumeCredits}점\n`;

  return result;
}

function renderHtml(statementData: StatementData) {
  let result = `<h1>청구 내역 (고객명: ${statementData.customer} )</h1>\n`;

  result += '<table>\n';
  result += '<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>';

  for (let perf of statementData.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += '</table>\n';
  result += `<p>총액: <em>${usd(statementData.totalAmount)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${statementData.totalVolumeCredits}</em>점</p>\n`;
  result += '</table>\n';

  return result;
}

export function plainStatement(invoice: Invoice, plays: Plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

export function htmlStatement(invoice: Invoice, plays: Plays) {
  return renderHtml(createStatementData(invoice, plays));
}
