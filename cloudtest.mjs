function chargeCard(payment) { return payment.card?.last4; }
  setTimeout(() => console.log(chargeCard({ amount: 50 })), 400);
