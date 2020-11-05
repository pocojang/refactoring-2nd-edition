function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

const leadEngineer = createEmployee(document.leadEngineer, 'E');
