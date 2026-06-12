const TAX_RATES = { US: 0.07, CA: 0.05, EU: 0.20, UK: 0.20 };
const TIER_DISCOUNT = { free: 0, starter: 0.05, pro: 0.10, enterprise: 0.20 };

const lineTotal = (item) => item.unitPrice * item.quantity;
const subtotalOf = (cart) => cart.items.reduce((s, i) => s + lineTotal(i), 0);

function discountFor(account, subtotal) {
  const rate = TIER_DISCOUNT[account.plan.tier] ?? 0;
  return subtotal * rate;
}
function taxFor(account, taxable) { return taxable * (TAX_RATES[account.region] ?? 0); }

export function buildInvoice(account, cart) {
  const subtotal = subtotalOf(cart);
  const discount = discountFor(account, subtotal);
  const taxable  = subtotal - discount;
  return { subtotal, discount, tax: taxFor(account, taxable), total: taxable + taxFor(account, taxable) };
}
