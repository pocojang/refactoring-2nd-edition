/**
 * 리팩토링 전
 */
let customer = new customer(customerData);

/**
 * 리팩토링 후
 */
let customer = customerRepository.get(customer.id);
