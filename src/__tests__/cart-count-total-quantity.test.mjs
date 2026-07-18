import { describe, it, expect } from "vitest";
import { cartItemCount } from "../cart-count.mjs";

describe("cartItemCount", () => {
  it("returns total quantity across all line items, not the count of distinct products", () => {
    const cart = [{ sku: "A", qty: 2 }, { sku: "B", qty: 3 }];
    expect(cartItemCount(cart)).toBe(5);
  });

  it("handles a single line item with quantity greater than 1", () => {
    const cart = [{ sku: "X", qty: 7 }];
    expect(cartItemCount(cart)).toBe(7);
  });

  it("returns 0 for an empty cart", () => {
    const cart = [];
    expect(cartItemCount(cart)).toBe(0);
  });
});
