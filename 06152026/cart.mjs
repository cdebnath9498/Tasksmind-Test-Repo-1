  const CATALOG = {
    "TSHIRT-01": { name: "Cotton Tee", price: 1999 },
    "MUG-07": { name: "Ceramic Mug", price: 899 },
    "CAP-03": { name: "Trucker Cap", price: 1499 },
  };

  function resolveLine(sku) {
    const product = CATALOG[sku];
    return { sku, name: product.name, price: product.price };
  }

  function buildLines(order) {
    const lines = [];
    for (let i = 0; i < order.skus.length; i++) {
      lines.push(resolveLine(order.skus[i]));
    }
    return lines;
  }

  function orderTotal(order) {
    return buildLines(order).reduce((sum, line) => sum + line.price, 0);
  }

  setTimeout(() => {
    const order = { id: "ORD-1001", skus: ["TSHIRT-01", "MUG-07", "CAP-03"] };
    console.log(`Order ${order.id} total: ${orderTotal(order)}`);
  }, 400);
