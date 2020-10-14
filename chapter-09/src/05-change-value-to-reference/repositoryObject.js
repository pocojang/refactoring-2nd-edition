let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customer = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customer.has(id)) {
    _repositoryData.customer.set(id, new Customer(id));
  }

  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customer.get(id);
}
