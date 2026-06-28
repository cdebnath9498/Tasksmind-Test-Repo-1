function applyDiscount(plan) { return plan.discount?.percent; }
setTimeout(() => console.log(applyDiscount({ name: "Pro" })), 400);
