  const PLANS = [
    { name: "free", maxSeats: 3 },
    { name: "team", maxSeats: 25 },
    { name: "business", maxSeats: 100 },
  ];


  function planForSeats(seats) {
    const plan = PLANS.find((p) => seats <= p.maxSeats);
    return plan.name;
  }
  setTimeout(() => {
    console.log(`2 seats → ${planForSeats(2)} plan`);
  }, 400);
