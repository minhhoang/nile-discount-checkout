export type SKU = string;

export type Product = {
  sku: SKU;
  name: string;
  price: number;
};

export type Cart = Map<SKU, number>;

export type DiscountRule = {
  sku: SKU;
  apply: (qty: number, unitPrice: number) => number;
};
