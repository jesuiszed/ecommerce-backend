import { describe, expect, it } from "vitest";
import { authRegisterSchema, authLoginSchema } from "@/lib/validators/auth";

describe("auth validators", () => {
  it("accepts a valid registration payload", () => {
    const parsed = authRegisterSchema.safeParse({
      name: "Alicia",
      email: "alice@example.com",
      password: "Password123!",
      phone: "+24100000000"
    });

    expect(parsed.success).toBe(true);
  });

  it("accepts a valid login payload", () => {
    const parsed = authLoginSchema.safeParse({
      email: "alice@example.com",
      password: "Password123!"
    });

    expect(parsed.success).toBe(true);
  });
});
