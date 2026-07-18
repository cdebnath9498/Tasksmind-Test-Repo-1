// Per-day rate for a plan across a billing cycle. Integer cents.
export function dailyRateCents(planCents, daysInCycle) {
  return planCents / daysInCycle;
}
