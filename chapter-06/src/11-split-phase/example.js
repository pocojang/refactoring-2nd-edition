/**
 * 리팩토링 전
 */
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split('-')[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;

/**
 * 리팩토링 후
 */
const orderRecord = parseOrder(order)
const orderPrice = parseInt(orderData[1]) * productPrice;

function parseOrder(aString) {
  const values = aString.split(/\s+/);

  return ({
    productID: values[0].split('-')[1]
    quantity: parseInt(values[1])
  })
}

function price(order, priceList) {
  return order.quantity * priceList[order.productID]
}
