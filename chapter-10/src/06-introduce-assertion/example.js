/**
 * 리팩토링 전
 */
if (this.discountRate) {
  base = base - this.discountRate * base;
}

/**
 * 리팩토링 후
 */
assert(this.discountRate >= 0);

if (this.discountRate) {
  base = base - this.discountRate * base;
}
