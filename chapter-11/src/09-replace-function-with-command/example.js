/**
 * 리팩토링 전
 */
function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;

  // some code
}

/**
 * 리팩토링 후
 */
class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;

    // some code
  }
}
