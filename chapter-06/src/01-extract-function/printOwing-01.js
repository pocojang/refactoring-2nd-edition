function printOwing(invoice) {
  printBanner();

  let outstanding = calculatorOutstanding();

  function printDetails(outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
  }
}
