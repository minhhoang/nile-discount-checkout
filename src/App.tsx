import { useState, useEffect } from "react";
import { createCheckout } from "./domain/checkout";
import { pricingRules } from "./pricingRules";

export default function App() {
  const [example1Total, setExample1Total] = useState<number | null>(null);
  const [example2Total, setExample2Total] = useState<number | null>(null);

  useEffect(() => {
    const checkout1 = createCheckout(pricingRules);

    // Example 1
    for (let i = 0; i < 10; i++) {
      checkout1.addToCart("9780201835953");
    }
    checkout1.addToCart("9325336028278");
    
    setExample1Total(checkout1.total());


    // Example 2
    const checkout2 = createCheckout(pricingRules);
    for (let i = 0; i < 3; i++) {
      checkout2.addToCart("9781430219484");
    }
    
    checkout2.addToCart("9780132071482");

    setExample2Total(checkout2.total());
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Checkout Totals</h1>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Example 1:</strong>{" "}
        {example1Total !== null ? `$${example1Total.toFixed(2)}` : "Loading..."}
      </div>

      <div>
        <strong>Example 2:</strong>{" "}
        {example2Total !== null ? `$${example2Total.toFixed(2)}` : "Loading..."}
      </div>
    </div>
  );
}