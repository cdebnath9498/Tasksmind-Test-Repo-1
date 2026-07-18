import { describe, it, expect } from "vitest";
import { upgradeChargeCents } from "../proration.mjs";

describe("upgrade proration billing", () => {
  it("charges only the price difference for remaining days on mid-cycle upgrade", () => {
    // Customer case: $30/month → $50/month plan, 10 days used, 20 days left in 30-day cycle
    // Expected: credit unused portion of old plan (20 days × $1/day = $20)
    //           charge new plan for remaining days (20 days × $1.67/day = $33.33)
    //           net charge: $33.33 - $20 = $13.33
    const oldPlanCents = 3000; // $30/month
    const newPlanCents = 5000; // $50/month
    const daysUsed = 10;
    const daysInCycle = 30;
    
    const charge = upgradeChargeCents(oldPlanCents, newPlanCents, daysUsed, daysInCycle);
    
    // Correct calculation:
    // daysRemaining = 30 - 10 = 20
    // oldCredit = (3000/30) * 20 = 100 * 20 = 2000 cents
    // newCharge = (5000/30) * 20 = 166.67 * 20 = 3333.33 cents
    // result = Math.round(3333.33 - 2000) = 1333 cents = $13.33
    expect(charge).toBe(1333);
  });
});
