import { describe, it, expect } from "vitest";
import { averageRating } from "../rating.mjs";

describe("averageRating", () => {
  it("excludes comment-only reviews from average calculation", () => {
    const reviews = [
      { stars: 5 },
      { stars: 5 },
      { stars: 5 },
      { comment: "nice" },
      { comment: "ok" },
    ];
    expect(averageRating(reviews)).toBe(5.0);
  });

  it("calculates correct average with mixed star ratings and comment-only reviews", () => {
    const reviews = [
      { stars: 4 },
      { stars: 5 },
      { comment: "great product" },
      { stars: 3 },
    ];
    expect(averageRating(reviews)).toBe(4.0);
  });

  it("handles all comment-only reviews", () => {
    const reviews = [
      { comment: "nice" },
      { comment: "ok" },
    ];
    expect(averageRating(reviews)).toBeNaN();
  });

  it("handles all star ratings with no comments", () => {
    const reviews = [
      { stars: 5 },
      { stars: 4 },
      { stars: 5 },
    ];
    expect(averageRating(reviews)).toBeCloseTo(4.666666666666667);
  });
});
