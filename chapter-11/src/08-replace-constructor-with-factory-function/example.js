/**
 * 리팩토링 전
 */
loadEngineer = new Employee(document.loadEngineer, 'E');

/**
 * 리팩토링 후
 */
loadEngineer = createEngineer(document.loadEngineer);
