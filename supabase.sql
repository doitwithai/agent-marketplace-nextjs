-- MindStudio Market — Minimal Supabase Schema for MVP Demo
-- Run this in Supabase SQL Editor.

create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  type text check (type in ('agent','service')) not null,
  title text not null,
  description text,
  category text,
  tags text[],
  price_cents integer not null default 0,
  sub_price_cents integer,
  rating numeric,
  reviews integer default 0,
  media jsonb default '[]'::jsonb,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid,
  listing_id uuid references listings(id) on delete set null,
  status text check (status in ('pending','paid','delivered','disputed','refunded','completed','escrowed')) default 'pending',
  mode text check (mode in ('one_time','subscription','escrow')) not null,
  amount_cents integer not null default 0,
  currency text default 'usd',
  stripe_payment_intent text,
  stripe_checkout_session text,
  created_at timestamptz default now()
);

create table if not exists ledger (
  id uuid primary key default gen_random_uuid(),
  ref_type text,
  ref_id uuid,
  user_id uuid,
  gross_cents integer default 0,
  commission_cents integer default 0,
  fees_cents integer default 0,
  net_cents integer default 0,
  currency text default 'usd',
  status text,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  rating integer check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);

create table if not exists fees_config (
  id serial primary key,
  commission_bps integer default 1200,
  escrow_hold_days integer default 7,
  tier_thresholds jsonb default '{}'::jsonb
);

insert into fees_config (commission_bps, escrow_hold_days) values (1200, 7)
on conflict do nothing;
