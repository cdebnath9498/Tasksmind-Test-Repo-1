  export function chargeUpgrade(subscription, newPlanPrice) {
    const { daysRemaining, daysInCycle } = subscription;
    const amount = proratedCharge(newPlanPrice, daysRemaining, daysInCycle);
    return { amount, currency: "USD", reason: "mid-cycle upgrade" };
  }
