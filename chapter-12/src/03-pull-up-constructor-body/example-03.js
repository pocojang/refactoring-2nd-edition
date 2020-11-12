/**
 * 예시: 공통 코드가 나중에 올 때
 */
class Employee {
  constructor(name) {
    this._name = name;
  }

  get isPrivileged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);

    this._grade = grade;

    if (this.isPrivileged) {
      // 모든 서브 클래스가 수행
      this.assignCar();
    }
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}
