# MindStudio Market — Next.js Skeleton (Pre‑wired)

This is a deploy-ready skeleton for your demo:
- App Router pages for Buyer, Builder, Admin
- TailwindCSS styling
- **Stripe Checkout pre‑wired** (TEST mode) — set env `STRIPE_PRICE_ID`, `NEXT_PUBLIC_BASE_URL`, and your Stripe keys
- Stripe Webhooks / Connect / Identity stubs
- Supabase minimal schema (`supabase.sql`)
- PII redaction helper for in‑platform chat

## One-click deploy (Vercel)

1. Push this code to GitHub, then import the repo into Vercel.
2. Add these **Environment Variables** (placeholders are fine for first deploy):
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_CONNECT_CLIENT_ID=ca_xxx
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
STRIPE_PRICE_ID=price_ABC123     # from Stripe → Products → your Price ID
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
3. Deploy and open your public URL.

### Stripe (test mode)

- Create a Product + Price in Stripe (e.g., $99 one‑time).
- Copy the **Price ID** (e.g., `price_ABC123`) into `STRIPE_PRICE_ID` env var.
- Go to `/checkout` in your site and click **Create Checkout Session** to open a real Stripe **test** Checkout.
- Use test card `4242 4242 4242 4242`.

### Webhook (optional now)

- In Stripe → Developers → Webhooks: add `https://YOUR-DEPLOYMENT/api/webhooks/stripe`
- Select events: `checkout.session.completed`, `invoice.paid`
- Paste the signing secret into `STRIPE_WEBHOOK_SECRET`

## Supabase (optional)

- Open Supabase → SQL Editor → run the contents of `supabase.sql`
- Add your Supabase keys to Vercel envs
- Later, replace mock arrays in `market/page.tsx` and `listings/[id]/page.tsx` with Supabase reads

## Local dev
```
npm i
npm run dev
```

## Structure
- `src/app/*` — pages and API routes
- `src/lib/*` — helpers (`stripe.ts`, `redact.ts`)
