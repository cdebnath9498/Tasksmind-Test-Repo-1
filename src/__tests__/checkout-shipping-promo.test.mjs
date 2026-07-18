import { describe, it, expect } from "vitest";
import { checkoutTotalCents } from "../checkout-total.mjs";

describe("checkout total with promo code", () => {
  it("applies free shipping on $80 cart with 10% promo (post-discount $72 > $50 threshold)", () => {
    // $80 cart, 10% promo → $8 discount → $72 subtotal
    // $72 > $50 free shipping threshold → shipping should be $0
    // Expected: $72.00 (7200 cents)
    const total = checkoutTotalCents(8000, 10);
    expect(total).toBe(7200);
  });

  it("applies free shipping on $70 cart with no promo (exceeds $50 threshold)", () => {
    // $70 cart, no promo → $70 subtotal
    // $70 > $50 free shipping threshold → shipping should be $0
    // Expected: $70.00 (7000 cents)
    const total = checkoutTotalCents(7000, 0);
    expect(total).toBe(7000);
  });

  it("charges shipping on $40 cart with 10% promo (post-discount $36 < $50 threshold)", () => {
    // $40 cart, 10% promo → $4 discount → $36 subtotal
    // $36 < $50 free shipping threshold → shipping should be $5.99
    // Expected: $36.00 + $5.99 = $41.99 (4199 cents)
    const total = checkoutTotalCents(4000, 10);
    expect(total).toBe(4199);
  });
});
