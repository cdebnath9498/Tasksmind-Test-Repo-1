
  const BANDS = [{ name: "low", maxScore: 30 }, { name: "mid", maxScore: 70 }, { name: "high", maxScore: 100 }];
  function bandForScore(score) {
    const band = BANDS.find((b) => score <= b.maxScore);
    return band.name;
  }
  setTimeout(() => console.log(`20 → ${bandForScore(20)} band`), 400);
