  const TIERS = [
    { name: "free", limit: 100 },
    { name: "pro", limit: 1000 },
    { name: "enterprise", limit: Infinity },
  ];

  export function pickTier(usage) {
    const tier = TIERS.find((t) => usage <= t.limit);
    return tier.name;
  }
