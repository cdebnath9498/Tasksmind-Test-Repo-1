
  const TIERS = [{ name: "standard", maxKg: 1 }, { name: "heavy", maxKg: 10 }, { name: "freight", maxKg: 100 }];
  function tierForWeight(kg) {
    const tier = TIERS.find((t) => kg > t.maxKg);
    return tier.name;
