import { describe, expect, it } from "vitest";
import { orderCreateSchema } from "@/lib/validators/order";
import { calculateOrderTotal, summarizeRevenueByPeriod } from "@/lib/order-utils";

describe("order validation and totals", () => {
  it("accepts a valid order payload", () => {
    const parsed = orderCreateSchema.safeParse({
      shippingAddressId: "addr_123",
      items: [{ variantId: "var_1", quantity: 2 }]
    });

    expect(parsed.success).toBe(true);
  });

  it("calculates the total from line items", () => {
    const total = calculateOrderTotal([
      { unitPrice: 1000, quantity: 2 },
      { unitPrice: 2500, quantity: 1 }
    ]);

    expect(total).toBe(4500);
  });

  it("summarizes revenue by day", () => {
    const summary = summarizeRevenueByPeriod([
      { createdAt: "2026-01-01T10:00:00Z", totalAmount: 2000 },
      { createdAt: "2026-01-01T12:00:00Z", totalAmount: 3000 },
      { createdAt: "2026-01-02T09:00:00Z", totalAmount: 1500 }
    ]);

    expect(summary).toEqual([
      { date: "2026-01-01", revenue: 5000 },
      { date: "2026-01-02", revenue: 1500 }
    ]);
  });
});
