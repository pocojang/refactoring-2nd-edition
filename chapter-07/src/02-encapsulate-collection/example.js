/**
 * 리팩토링 전
 */
class Person {
  get courses() {
    return this.courses;
  }
  set courses(aList) {
    this.courses = aList;
  }
}

/**
 * 리팩토링 후
 */
class Person {
  get courses() {
    return this.courses.slice();
  }

  addCourse(aCourse) {}
  removeCourse(aCourse) {}
}
