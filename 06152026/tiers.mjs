  const TIERS = [
    { name: "free", limit: 100 },
    { name: "pro", limit: 1000 },
    { name: "enterprise", limit: Infinity },
  ];

  function pickTier(usage) {
    const tier = TIERS.find((t) => usage > t.limit);
    return tier.name;
  }

  function describe(account) {
    return `${account.org} is on the ${pickTier(account.monthlyUsage)} tier`;
  }

  setTimeout(() => {
    console.log(describe({ org: "Acme", monthlyUsage: 50 }));
  }, 400);
