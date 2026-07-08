  export function invoiceTotal(lineItems, promoCredit, taxRate) {
    const subtotal = lineItems.reduce((sum, li) => sum + li.price * li.qty, 0);
  const taxed = (subtotal - promoCredit) * (1 + taxRate);
  return Math.round((taxed) * 100) / 100;
  }
