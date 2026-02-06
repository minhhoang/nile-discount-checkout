import type { Cart, DiscountRule, SKU } from "./types";
import { products } from "./products";

export const createCheckout = (rules: DiscountRule[]) => {
  const cart: Cart = new Map();

  const addToCart = (sku: SKU) => {
    cart.set(sku, (cart.get(sku) ?? 0) + 1);
  };

  const total = (): number => {
    let sum = 0;

    for (const [sku, qty] of cart.entries()) {
      const product = products[sku];
      if (!product) 
        throw new Error(`Unknown SKU: ${sku}`);

      const rule = rules.find(r => r.sku === sku);

      const price = rule
        ? rule.apply(qty, product.price)
        : qty * product.price;

      sum += price;
    }

    return Number(sum.toFixed(2));
  };

  return { addToCart, total };
};