import { describe, it, expect } from "vitest";
import { shippingCents } from "../shipping.mjs";

describe("shipping threshold behavior", () => {
  it("charges flat shipping for orders below $50.00", () => {
    expect(shippingCents(4999)).toBe(599);
  });

  it("provides free shipping for orders at exactly $50.00", () => {
    expect(shippingCents(5000)).toBe(0);
  });

  it("provides free shipping for orders above $50.00", () => {
    expect(shippingCents(5001)).toBe(0);
  });
});