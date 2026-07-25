import { describe, it, expect } from "vitest";
import { orderTotalCents } from "../order-total.mjs";

describe("orderTotalCents with discount", () => {
  it("calculates tax on post-discount amount, not pre-discount subtotal", () => {
    // Reported case: $100 subtotal, 20% off (SAVE20 code)
    // Expected: ($100 - $20 discount) * 1.0725 tax = $85.80
    // Bug produces: $100 - $20 + ($100 * 0.08 tax) = $88.00 with TAX_RATE=0.08
    // Report states customer paid $87.25 with 7.25% tax, but source shows TAX_RATE=0.08
    // Using source's actual TAX_RATE=0.08:
    // Correct: subtotal $100 - discount $20 = $80, tax on $80 = $80 * 0.08 = $6.40, total = $86.40 (8640 cents)
    // Bug: tax on $100 = $8.00, total = $100 - $20 + $8 = $88.00 (8800 cents)
    const result = orderTotalCents({
      items: [{ priceCents: 10000, qty: 1 }],
      discountPercent: 20
    });
    
    // Tax should be calculated on post-discount amount ($80)
    // $80 * 0.08 = $6.40, so total = $80 + $6.40 = $86.40
    expect(result).toBe(8640);
  });
});
