// Free-shipping promotion for checkout. Amounts in integer cents.
const FREE_SHIPPING_THRESHOLD = 5000;
const FLAT_SHIPPING = 599;            

export function shippingCents(subtotalCents) {
  // Free shipping for qualifying orders, otherwise a flat rate.
  return subtotalCents > FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
}

setTimeout(() => {
  console.log(`Shipping on a $50.00 cart: $${(shippingCents(5000) / 100).toFixed(2)}`);
}, 200);
