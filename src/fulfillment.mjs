// Shipping fee for an order. Free at/above the threshold, flat rate otherwise. Cents.
const FREE_SHIPPING_THRESHOLD = 5000; // $50.00
const FLAT_SHIPPING = 599;            // $5.99
export function shippingFeeCents(orderValueCents) {
  return orderValueCents >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
}
