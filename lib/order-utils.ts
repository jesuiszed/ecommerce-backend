export type OrderLine = {
  unitPrice: number;
  quantity: number;
};

export function calculateOrderTotal(items: OrderLine[]) {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

export function summarizeRevenueByPeriod(
  rows: Array<{ createdAt: string | Date; totalAmount: number | string }>
) {
  const map = new Map<string, number>();

  rows.forEach((row) => {
    const date = new Date(row.createdAt).toISOString().slice(0, 10);
    const amount = Number(row.totalAmount);
    map.set(date, (map.get(date) ?? 0) + amount);
  });

  return Array.from(map.entries()).map(([date, revenue]) => ({ date, revenue }));
}

export type ProductFilterInput = {
  category?: string | null;
  size?: string | null;
  color?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  search?: string | null;
};

export function buildProductWhere(filters: ProductFilterInput) {
  const conditions: Record<string, any> = {
    status: "ACTIVE"
  };

  if (filters.category) {
    conditions.category = { slug: filters.category };
  }

  if (filters.size || filters.color) {
    conditions.variants = {
      some: {
        ...(filters.size ? { size: { contains: filters.size, mode: "insensitive" } } : {}),
        ...(filters.color ? { color: { contains: filters.color, mode: "insensitive" } } : {})
      }
    };
  }

  if (filters.minPrice != null || filters.maxPrice != null) {
    conditions.basePrice = {
      ...(filters.minPrice != null ? { gte: Number(filters.minPrice) } : {}),
      ...(filters.maxPrice != null ? { lte: Number(filters.maxPrice) } : {})
    };
  }

  if (filters.search) {
    conditions.OR = [
      { name: { contains: filters.search, mode: "insensitive" } },
      { description: { contains: filters.search, mode: "insensitive" } }
    ];
  }

  return conditions;
}
