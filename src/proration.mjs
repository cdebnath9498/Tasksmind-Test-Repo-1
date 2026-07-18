import { dailyRateCents } from "./billing-rates.mjs";

// Charge to upgrade from old plan to new plan mid-cycle. Integer cents.
// Credit the UNUSED portion of the old plan, charge the new plan for the days left.
export function upgradeChargeCents(oldPlanCents, newPlanCents, daysUsed, daysInCycle) {
  const daysRemaining = daysInCycle - daysUsed;
  const oldCredit = dailyRateCents(oldPlanCents, daysInCycle) * daysRemaining;
  const newCharge = dailyRateCents(newPlanCents, daysInCycle) * daysRemaining;
  return Math.round(newCharge - oldCredit);
}

// demo: $30 → $50 plan, 30-day cycle, 10 days used (20 left)
setTimeout(() => {
  console.log(`Upgrade charge: $${(upgradeChargeCents(3000, 5000, 10, 30) / 100).toFixed(2)}`);
}, 200);
