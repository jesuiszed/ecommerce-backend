# Backend — Boutique Mode (Gabon)

Ce backend suit les conventions définies dans [CONVENTIONS.md](CONVENTIONS.md) et couvre la boutique publique, les comptes clients et le back-office admin.

## Stack

- Next.js 14 App Router
- TypeScript strict
- Prisma + PostgreSQL
- NextAuth.js credentials + bcrypt
- Zod pour la validation
- Vitest pour les tests

## Installation

```bash
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

## Variables d’environnement

- DATABASE_URL
- NEXTAUTH_SECRET

## API publique

### Produits

- GET /api/products
  - Retourne la liste des produits actifs
  - Filtres possibles : category, size, color, minPrice, maxPrice, search, page

- GET /api/products/:slug
  - Retourne le détail d’un produit public

### Catégories

- GET /api/categories
  - Retourne l’arborescence des catégories

### Authentification

- POST /api/auth/register
  - Body attendu : { name, email, password, phone? }

- POST /api/auth/login
  - Body attendu : { email, password }

- POST /api/auth/logout
  - Déconnexion locale

- POST /api/auth/forgot-password
  - Body attendu : { email }

- POST /api/auth/reset-password
  - Body attendu : { token, password }

### Panier

- GET /api/cart
  - Retourne le panier courant de l’utilisateur connecté

- POST /api/cart/items
  - Body attendu : { variantId, quantity }

- PUT /api/cart/items/:id
  - Body attendu : { quantity }

- DELETE /api/cart/items/:id
  - Supprime l’article

### Adresses

- GET /api/addresses
- POST /api/addresses
  - Body attendu : { label, city, district, country, phone, isDefault? }
- PUT /api/addresses/:id
- DELETE /api/addresses/:id

### Commandes

- POST /api/orders
  - Body attendu : { shippingAddressId, items: [{ variantId, quantity }] }
  - Revalide prix et stock serveur

- GET /api/orders
- GET /api/orders/:id

### Paiements

- POST /api/payments/initiate
  - Body attendu : { orderId, method, amount }

- POST /api/payments/webhook
  - Callback de passerelle mobile money

### Avis

- POST /api/reviews
  - Body attendu : { productId, rating, comment? }

### Coupons

- POST /api/coupons/validate
  - Body attendu : { code, subtotal }

## API admin

Toutes les routes sous /api/admin/** nécessitent un admin côté serveur.

### Produits

- GET /api/admin/products
- POST /api/admin/products
- GET /api/admin/products/:id
- PUT /api/admin/products/:id
- DELETE /api/admin/products/:id
- POST /api/admin/products/:id/variants
- PUT /api/admin/products/:id/variants/:variantId
- DELETE /api/admin/products/:id/variants/:variantId

### Catégories

- GET /api/admin/categories
- POST /api/admin/categories
- GET /api/admin/categories/:id
- PUT /api/admin/categories/:id
- DELETE /api/admin/categories/:id

### Commandes

- GET /api/admin/orders
- GET /api/admin/orders/:id
- PUT /api/admin/orders/:id/status
- POST /api/admin/orders/:id/refund

### Coupons

- GET /api/admin/coupons
- POST /api/admin/coupons
- GET /api/admin/coupons/:id
- PUT /api/admin/coupons/:id
- DELETE /api/admin/coupons/:id

### Utilisateurs

- GET /api/admin/users
- GET /api/admin/users/:id
- PUT /api/admin/users/:id/role
- PUT /api/admin/users/:id/status
- DELETE /api/admin/users/:id

### Avis admin

- GET /api/admin/reviews
- PUT /api/admin/reviews/:id/approve
- DELETE /api/admin/reviews/:id

### Logs

- GET /api/admin/logs

### Dashboard KPI

- GET /api/admin/dashboard/stats
- GET /api/admin/dashboard/revenue?period=day|week|month
- GET /api/admin/dashboard/orders-by-status
- GET /api/admin/dashboard/top-products?limit=5
- GET /api/admin/dashboard/low-stock?threshold=3
- GET /api/admin/dashboard/new-customers?period=month
- GET /api/admin/dashboard/conversion

## Codes d’erreur

Toutes les erreurs suivent ce format :

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "Message clair en français." } }
```

Codes autorisés : 400, 401, 403, 404, 409, 422, 500.

## Tests

```bash
npm test
npm run typecheck
```
