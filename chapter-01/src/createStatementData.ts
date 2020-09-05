import {
  Invoice,
  Plays,
  Play,
  Performance,
  EnrichPerformance,
  StatementData,
} from './types';

class PerformanceCalculator {
  performance: Performance;
  play: Play;

  constructor(aPerformance: Performance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 40000;

    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }

    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 30000;

    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }

    result += 300 * this.performance.audience;

    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

function createPerformanceCalculator(
  aPerformance: Performance,
  aPlay: Play,
):
  | InstanceType<typeof TragedyCalculator>
  | InstanceType<typeof ComedyCalculator> {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);

    default:
      throw new Error(`알 수 없는 장르 :  ${aPlay.type}`);
  }
}

export default function createStatementData(
  invoice: Invoice,
  plays: Plays,
): StatementData {
  const enrichPerformances = invoice.performances.map(enrichPerformance);

  return {
    customer: invoice.customer,
    performances: enrichPerformances,
    totalAmount: totalAmount(enrichPerformances),
    totalVolumeCredits: totalVolumeCredits(enrichPerformances),
  };

  function enrichPerformance(aPerformance: Performance): EnrichPerformance {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance),
    );

    return {
      ...Object.assign({}, aPerformance),
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
  }

  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(enrichPerformances: EnrichPerformance[]) {
    return enrichPerformances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(enrichPerformances: EnrichPerformance[]) {
    return enrichPerformances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
