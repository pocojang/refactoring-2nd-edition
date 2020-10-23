// example-02
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return '알 수 없다';
  }

  get airSpeedVelocity() {
    return null;
  }
}
