'use strict';

/**
 * Checkout pricing engine.
 * Computes what a customer is charged for an order:
 * line-item subtotal → coupon discount → tax → shipping → total.
 * Money is handled in dollars and rounded to whole cents.
 */

// Sales-tax rate by billing region.
const TAX_RATES = {
  US: 0.0725,
  CA: 0.0825,
  UK: 0.20,
  EU: 0.19,
};
const DEFAULT_TAX_RATE = 0;

// Free shipping once the (post-discount) order reaches this amount.
const FREE_SHIPPING_THRESHOLD = 75;
const FLAT_SHIPPING_FEE = 6.99;

/** Round a dollar amount to whole cents, avoiding float drift. */
function roundMoney(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

/** Sum of price * quantity across all line items. */
function calcSubtotal(items) {
  if (!Array.isArray(items)) return 0;
  return roundMoney(
    items.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 0;
      return sum + price * qty;
    }, 0)
  );
}

/**
 * Discount amount for a coupon against a subtotal. Supports percentage
 * and fixed-amount coupons, an optional minimum spend, and an optional
 * maximum-discount cap. Returns 0 when the coupon doesn't apply.
 */
function calcDiscount(subtotal, coupon) {
  if (!coupon) return 0;
  if (coupon.minSpend && subtotal < coupon.minSpend) return 0;

  let discount = 0;
  if (coupon.type === 'percent') {
    discount = subtotal * (Number(coupon.value) / 100);
  } else if (coupon.type === 'fixed') {
    discount = Number(coupon.value) || 0;
  }

  if (coupon.maxDiscount) discount = Math.min(discount, coupon.maxDiscount);
  discount = Math.min(discount, subtotal); // never below zero
  return roundMoney(discount);
}

/**
 * Shipping fee. Free once the order (after discount) hits the
 * free-shipping threshold; a flat fee otherwise.
 */
function calcShipping(discountedSubtotal, freeShipping) {
  if (freeShipping) return 0;
  if (discountedSubtotal >= FREE_SHIPPING_THRESHOLD) return 0;
  return FLAT_SHIPPING_FEE;
}

/**
 * Full order breakdown and the final total the customer is charged.
 * @returns {{subtotal:number, discount:number, taxableAmount:number,
 *            tax:number, shipping:number, total:number}}
 */
function calculateOrderTotal(order) {
  const subtotal = calcSubtotal(order.items);
  const discount = calcDiscount(subtotal, order.coupon);
  const discountedSubtotal = roundMoney(subtotal - discount);

  const taxRate = TAX_RATES[order.region] ?? DEFAULT_TAX_RATE;
  const tax = roundMoney(subtotal * taxRate);

  const shipping = calcShipping(discountedSubtotal, order.freeShipping);
  const total = roundMoney(discountedSubtotal + tax + shipping);

  return {
    subtotal,
    discount,
    taxableAmount: discountedSubtotal,
    tax,
    shipping,
    total,
  };
}

module.exports = {
  calculateOrderTotal,
  calcSubtotal,
  calcDiscount,
  calcShipping,
  TAX_RATES,
  FREE_SHIPPING_THRESHOLD,
};
