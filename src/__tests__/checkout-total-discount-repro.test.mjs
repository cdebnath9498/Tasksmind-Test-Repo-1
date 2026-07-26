import { describe, it, expect } from "vitest";
import { checkoutTotalCents } from "../checkout-total.mjs";

describe("checkout total with discount codes", () => {
  it("calculates correct total for $150 order with SAVE20 (20% off)", () => {
    // Report: $150 order with SAVE20 (20% off) should be $120 after discount.
    // With free shipping threshold at $50, post-discount $120 qualifies for free shipping.
    // Expected: $150 - $30 discount + $0 shipping = $120.00 (12000 cents)
    // Actual bug: passes discount amount (3000) to shippingFeeCents instead of post-discount subtotal (12000),
    // causing shipping to be $5.99 instead of free, yielding $125.99 (12599 cents)
    const itemsSubtotal = 15000; // $150.00
    const promoPercent = 20;     // 20% off (SAVE20)
    
    const total = checkoutTotalCents(itemsSubtotal, promoPercent);
    
    // Correct calculation: $150 - $30 discount + $0 shipping = $120.00
    expect(total).toBe(12000);
  });

  it("applies free shipping when post-discount subtotal meets threshold", () => {
    // $80 cart with 10% off = $72 post-discount, which is >= $50 threshold
    // Should get free shipping
    const itemsSubtotal = 8000; // $80.00
    const promoPercent = 10;    // 10% off
    
    const total = checkoutTotalCents(itemsSubtotal, promoPercent);
    
    // Correct: $80 - $8 discount + $0 shipping = $72.00
    expect(total).toBe(7200);
  });

  it("charges shipping when post-discount subtotal is below threshold", () => {
    // $40 cart with 10% off = $36 post-discount, which is < $50 threshold
    // Should charge $5.99 shipping
    const itemsSubtotal = 4000; // $40.00
    const promoPercent = 10;    // 10% off
    
    const total = checkoutTotalCents(itemsSubtotal, promoPercent);
    
    // Correct: $40 - $4 discount + $5.99 shipping = $41.99
    expect(total).toBe(4199);
  });
});