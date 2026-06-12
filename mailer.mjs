function sendReceipt(order) { return "to: " + order.customer.email; }
setTimeout(() => console.log(sendReceipt({ id: 9 })), 400);
