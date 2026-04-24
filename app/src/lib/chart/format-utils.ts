/**
 * Safe formatting utilities to prevent NaN/Infinity from leaking to the UI.
 */

/**
 * Formats a price with fixed precision.
 * Returns a placeholder if price is invalid.
 */
export function formatPrice(price: number | null | undefined, precision: number = 2): string {
  if (price === null || price === undefined || isNaN(price) || !isFinite(price)) {
    return "—";
  }
  return price.toFixed(precision);
}

/**
 * Formats a currency value (e.g., Equity, Balance).
 */
export function formatCurrency(value: number | null | undefined): string {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) {
    return "$0.00";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/**
 * Formats PnL with sign and color context.
 */
export function formatPnL(value: number | null | undefined): string {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) {
    return "+$0.00";
  }
  const sign = value >= 0 ? "+" : "";
  return `${sign}${formatCurrency(value)}`;
}

/**
 * Formats a percentage.
 */
export function formatPercent(value: number | null | undefined, precision: number = 2): string {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) {
    return "0.00%";
  }
  return `${value.toFixed(precision)}%`;
}
