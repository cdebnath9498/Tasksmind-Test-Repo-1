import { describe, it, expect } from "vitest";
import { orderTotalCents } from "../order-total.mjs";

describe("orderTotalCents", () => {
  it("applies tax to the discounted subtotal, not the original subtotal", () => {
    // Customer report: $100 order with 20% discount should be $86.40
    // ($80 after discount + $6.40 tax at 8% = $86.40)
    // Bug: tax was computed on $100 instead of $80, yielding $88.00
    const result = orderTotalCents({
      items: [{ priceCents: 10000, qty: 1 }],
      discountPercent: 20
    });
    
    // Correct calculation:
    // subtotal = 10000 cents ($100.00)
    // discount = 2000 cents (20% of $100.00)
    // discounted subtotal = 8000 cents ($80.00)
    // tax = 640 cents (8% of $80.00)
    // total = 8000 + 640 = 8640 cents ($86.40)
    expect(result).toBe(8640);
  });
});
