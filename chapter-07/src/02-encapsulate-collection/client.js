const basicCourseNames = readBaseCourseNames(filename);
aPerson.courses = basicCourseNames.map((name) => new Course(name, false));

for (const name of readBaseCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}
