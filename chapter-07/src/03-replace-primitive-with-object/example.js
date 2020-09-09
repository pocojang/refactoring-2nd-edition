/**
 * 리팩토링 전
 */
orders.filter((o) => 'high' === o.priority || 'rush' === o.priority);

/**
 * 리팩토링 후
 */
orders.filter((o) => o.priority.higherThan(new Priority('normal')));
