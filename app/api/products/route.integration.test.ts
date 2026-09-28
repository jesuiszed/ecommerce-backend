import { describe, expect, it } from "vitest";
import { calculateOrderTotal } from "@/lib/order-utils";

describe("products integration logic", () => {
  it("computes total for product items in order flow", () => {
    const total = calculateOrderTotal([
      { unitPrice: 12000, quantity: 1 },
      { unitPrice: 8000, quantity: 2 }
    ]);

    expect(total).toBe(28000);
  });

  it("keeps totals stable for single product purchase", () => {
    const total = calculateOrderTotal([{ unitPrice: 5000, quantity: 3 }]);

    expect(total).toBe(15000);
  });
});
