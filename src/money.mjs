
  export function parseAmount(raw) {
    const cleaned = raw.replace("$", "");
    return Math.round(parseFloat(cleaned) * 100);
  }

  export function formatCents(cents) {
    return `$${(cents / 100).toFixed(2)}`;
  }
