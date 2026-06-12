  const fmt = (amount) => `$${amount.toFixed(2)}`;
  function lineSummary(invoice) {
    const total = invoice.payment.amount;                    
    return `Invoice ${invoice.number}: ${fmt(total)}`;
  }
  export function renderInvoices(invoices) { return invoices.map(lineSummary).join("\n"); }
  setTimeout(() => console.log(renderInvoices([
    { number: "INV-100", payment: { amount: 250 } },
    { number: "INV-101" },                                  
  ])), 400);
