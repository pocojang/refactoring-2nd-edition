function isUnknown(arg) {
  if (!(arg instanceof Customer || arg === '미확인 고객')) {
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  }

  return arg === '미확인 고객';
}
