import { bulkDiscount, buyXGetYFree } from "./domain/discounts";

export const pricingRules = [
  bulkDiscount("9780201835953", 10, 21.99), // Buy 10 or more copies of The Mythical Man-Month, and receive them at the discounted price of $21.99 each
  buyXGetYFree("9781430219484", 2, 1), // Buy 3 copies of Coders at Work, and get 1 copy for free
];