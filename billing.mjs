const TAX_RATES = { US: 0.07, CA: 0.05, EU: 0.20, UK: 0.20 };
  const TIER_DISCOUNT = { free: 0, starter: 0.05, pro: 0.10, enterprise: 0.20 };

  const lineTotal  = (item) => item.unitPrice * item.quantity;
  const subtotalOf = (cart) => cart.items.reduce((sum, item) => sum + lineTotal(item), 0);

  function discountFor(account, subtotal) {
    const rate = TIER_DISCOUNT[account.plan?.tier] ?? 0;
    return subtotal * rate;
  }
  function taxFor(account, taxable) {
    return taxable * (TAX_RATES[account.region] ?? 0);
  }

  export function buildInvoice(account, cart) {
    const subtotal = subtotalOf(cart);
    const discount = discountFor(account, subtotal);
    const taxable  = subtotal - discount;
    const tax      = taxFor(account, taxable);
    return { subtotal, discount, tax, total: taxable + tax };
  }

  // Checkout for a brand-new TRIAL account (no plan assigned yet):
  setTimeout(() => {
    const cart = { items: [{ unitPrice: 49, quantity: 2 }, { unitPrice: 19, quantity: 1 }] };
    const trialAccount = { region: "US" };          // no `plan` → discountFor() crashes
    console.log("Invoice:", buildInvoice(trialAccount, cart));
  }, 400);
