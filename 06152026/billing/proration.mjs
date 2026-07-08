  export function proratedCharge(planPrice, daysRemaining, daysInCycle) {
    if (daysInCycle <= 0) return 0;
    const chargeableDays = daysInCycle - daysRemaining;
    const ratio = chargeableDays / daysInCycle;
    return Math.round(planPrice * ratio * 100) / 100;
  }
