  const REORDER_AT = 10;
  function stockStatus(p) {
    const onHand = p.stock.available;                         
    return onHand < REORDER_AT ? `${p.sku}: REORDER (${onHand})` : `${p.sku}: ok`;
  }
  export function auditInventory(products) { return products.map(stockStatus).join("\n"); }
  setTimeout(() => console.log(auditInventory([
    { sku: "WIDGET-1", stock: { available: 4 } },
    { sku: "GADGET-9" },                                      
  ])), 400);
