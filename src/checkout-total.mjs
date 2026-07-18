import { shippingFeeCents } from "./fulfillment.mjs";
// Final total for a checkout with an optional promo code. Cents.
export function checkoutTotalCents(itemsSubtotalCents, promoPercent = 0) {
  const discount = Math.round(itemsSubtotalCents * (promoPercent / 100));
  const shipping = shippingFeeCents(itemsSubtotalCents - discount);
  return itemsSubtotalCents - discount + shipping;
}

// demo: $80 cart, 10% promo — should ship free ($80 ≥ $50)
setTimeout(() => {
  const t = checkoutTotalCents(8000, 10);
  console.log(`Total: $${(t / 100).toFixed(2)}`);
}, 200);
