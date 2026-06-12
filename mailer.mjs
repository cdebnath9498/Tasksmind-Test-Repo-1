function sendReceipt(order) { return "to: " + (order.customer && order.customer.email); }
setTimeout(() => console.log(sendReceipt({ id: 9 })), 400);
