/**
 * 예시: 서브클래스가 여러 개일 때
 */

function createBird(data) {
  return new Bird(data);
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._specialPlumage = this.selectSpecialDelegate(data);
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return this._specialDelegate.plumage;
  }

  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }

  selectSpecialDelegate(data) {
    switch (data.type) {
      case '유럽 제비':
        return new EuropeanSwallowDelegate(data, this);
      case '아프리카 제비':
        return new AfricanSwallowDelegate(data, this);
      case '노르웨이 파랑 앵무':
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }
}
class SpeciesDelegate {
  constructor(data, bird) {
    this._bird = bird;
  }

  get plumage() {
    return this._bird._plumage || '보통이다';
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data) {
    super(data, bird);

    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }

  get plumage() {
    return this._bird._plumage || '보통이다';
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);

    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }

  get plumage() {
    if (this._voltage > 100) {
      return '그을렸다';
    } else {
      return this._bird_plumage || '예쁘다';
    }
  }
}
