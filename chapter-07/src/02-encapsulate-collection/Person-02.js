class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this.courses.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fbIfAbsent = () => {
      throw new RangeError();
    },
  ) {
    const index = this._courses.indexOf(aCourse);

    if (index === -1) {
      fbIfAbsent();
    } else {
      this._courses.splice(index, 1);
    }
  }

  set courses(aList) {
    this._courses = aList.slice();
  }
}
