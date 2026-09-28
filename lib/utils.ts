export function formatXAF(amount: number) {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(amount) + " FCFA";
}

export function jsonError(code: string, message: string, status: number) {
  return Response.json({ error: { code, message } }, { status });
}
