  export function invoiceTotal(lineItems, promoCredit, taxRate) {
    const subtotal = lineItems.reduce((sum, li) => sum + li.price * li.qty, 0);
    const taxed = subtotal * (1 + taxRate);
    return Math.round((taxed - promoCredit) * 100) / 100;
  }
