// Free-shipping promotion for checkout. Amounts in integer cents.
const FREE_SHIPPING_THRESHOLD = 7500;
const FLAT_SHIPPING = 499;

export function shippingCents(subtotalCents) {
  // Free shipping for qualifying orders, otherwise a flat rate.
  return subtotalCents > FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
}

setTimeout(() => {
  console.log(`Shipping on a $75.00 cart: $${(shippingCents(7500) / 100).toFixed(2)}`);
}, 200);
