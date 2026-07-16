// Order total for customer checkout: item subtotal, apply the discount code,
// then add sales tax. All amounts in integer cents.
const TAX_RATE = 0.08;

export function orderTotalCents({ items, discountPercent = 0 }) {
  const subtotal = items.reduce((sum, it) => sum + it.priceCents * it.qty, 0);
  const discount = Math.round(subtotal * (discountPercent / 100));
  const tax = Math.round(subtotal * TAX_RATE);
  return subtotal - discount + tax;
}

// demo: 1 item @ $100.00 with a 20%-off code
setTimeout(() => {
  const cents = orderTotalCents({ items: [{ priceCents: 10000, qty: 1 }], discountPercent: 20 });
  console.log(`Total: $${(cents / 100).toFixed(2)}`);
}, 200);
