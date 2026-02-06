import type { DiscountRule } from "./types";

/*
 * Discount rule 1: 
 * Buy x or more copies of The Mythical Man-Month, and receive them at the discounted price of $y each
 */
export const bulkDiscount = (
  sku: string,
  minQty: number,
  discountedPrice: number
): DiscountRule => ({
  sku,
  apply: (qty, unitPrice) =>
    qty >= minQty ? qty * discountedPrice : qty * unitPrice,
});


/*
 * Discount rule 2: 
 * Buy x copies of a product, and get y copies for free
 */
export const buyXGetYFree = (
  sku: string,
  buyQty: number,
  freeQty: number
): DiscountRule => ({
  sku,
  apply: (qty, unitPrice) => {
    const groupSize = buyQty + freeQty;
    const freeItems = Math.floor(qty / groupSize) * freeQty;
    return (qty - freeItems) * unitPrice;
  },
});
