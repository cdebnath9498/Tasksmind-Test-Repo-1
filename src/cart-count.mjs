// Total number of items in the cart across all line items.
export function cartItemCount(lineItems) {
  return lineItems.reduce((sum, item) => sum + item.qty, 0);
}

// demo: 2 of product A + 3 of product B = 5 items
setTimeout(() => {
  const cart = [{ sku: "A", qty: 2 }, { sku: "B", qty: 3 }];
  console.log(`Cart items: ${cartItemCount(cart)}`);
}, 200);
