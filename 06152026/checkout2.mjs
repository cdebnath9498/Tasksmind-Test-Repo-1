  import { parseAmount, formatCents } from "../src/money.mjs";

  function checkout(prices) {
    const total = prices.reduce((sum, p) => sum + parseAmount(p), 0);
    return formatCents(total);
  }

  setTimeout(() => {
    console.log(`Total: ${checkout(["$19.99", 5.0, "$3.50"])}`);
  }, 400);
