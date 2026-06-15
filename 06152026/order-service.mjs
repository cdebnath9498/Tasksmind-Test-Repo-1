  const CATALOG = {
    "SKU-100": { name: "Wireless Mouse", unitPrice: 2999 },
    "SKU-205": { name: "Mechanical Keyboard", unitPrice: 8999 },
    "SKU-310": { name: "USB-C Hub", unitPrice: 4500 },
  };
  const SHIPPING_RATES = { standard: 599, express: 1299, overnight: 2999 };

  function priceProduct(item) {
    const product = CATALOG[item.sku];
    if (!product) throw new Error(`Unknown SKU: ${item.sku}`);
    return product.unitPrice * item.quantity;
  }

  function priceShipping(item) {
    return SHIPPING_RATES[item.method] ?? SHIPPING_RATES.standard;
  }

  function priceItem(item) {
    switch (item.type) {
      case "product":
        return priceProduct(item);
      case "shipping":
        return priceShipping(item);
    }
    return priceProduct(item);
  }

  function summarize(order) {
    let subtotal = 0;
    const lines = [];
    for (const item of order.items) {
      const amount = priceItem(item);
      lines.push({ type: item.type, label: item.sku ?? item.code ?? item.method, amount });
      subtotal += amount;
    }
    return { orderId: order.id, lines, subtotal };
  }

  function formatReceipt(summary) {
    const rows = summary.lines.map(
      (l) => `  ${l.type.padEnd(10)} ${String(l.label).padEnd(12)} ${(l.amount / 100).toFixed(2)}`,
    );
    return [
      `Receipt — order ${summary.orderId}`,
      "  " + "-".repeat(34),
      ...rows,
      "  " + "-".repeat(34),
      `  TOTAL: ${(summary.subtotal / 100).toFixed(2)}`,
    ].join("\n");
  }

  setTimeout(() => {
    const order = {
      id: "ORD-7781",
      items: [
        { type: "product", sku: "SKU-100", quantity: 1 },
        { type: "product", sku: "SKU-205", quantity: 2 },
        { type: "discount", code: "SAVE10", amountOff: 1000 },
        { type: "shipping", method: "express" },
      ],
    };
    console.log(formatReceipt(summarize(order)));
  }, 400);
