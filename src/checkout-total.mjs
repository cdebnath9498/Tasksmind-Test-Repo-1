import { shippingFeeCents } from "./fulfillment.mjs";
// Final total for a checkout with an optional promo code. Cents.
export function checkoutTotalCents(itemsSubtotalCents, promoPercent = 0) {
  const discount = Math.round(itemsSubtotalCents * (promoPercent / 100));
  const shipping = shippingFeeCents(discount);   // ← the bug
  return itemsSubtotalCents - discount + shipping;
}
