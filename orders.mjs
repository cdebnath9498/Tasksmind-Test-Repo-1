  const SHIPPING = { standard: 5, express: 15, overnight: 30 };

  function itemsTotal(order) {
    return order.lineItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function shippingCost(order) {
    return SHIPPING[order.shipping.method] ?? SHIPPING.standard;   // assumes every order has a shipping block
  }

  function formatOrder(order) {
    const goods = itemsTotal(order);
    const ship  = shippingCost(order);
    return `Order ${order.id}: $${goods + ship} (${order.lineItems.length} items)`;
  }

  export function processOrders(orders) {
    return orders.map(formatOrder).join("\n");
  }

  
  setTimeout(() => {
    const orders = [
      { id: 1001, lineItems: [{ price: 20, qty: 2 }], shipping: { method: "express" } },
      { id: 1002, lineItems: [{ price: 50, qty: 1 }] }, 
    ];
    console.log(processOrders(orders));
  }, 400);
