/**
 * 리팩토링 전
 */
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};

/**
 * 리팩토링 후
 */
let defaultOwnerData = {
  firstName: '마틴',
  lastName: '파울러',
};

export function defaultOwner() {
  return defaultOwnerData;
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
