-- Karyawan AI starter schema. Enable RLS before production deployment.
create extension if not exists pgcrypto;
create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null default 'Administrator',
 role text not null default 'admin' check (role in ('admin','staff')),
 created_at timestamptz not null default now()
);
create table if not exists public.affiliate_networks (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 name text not null, status text not null default 'disconnected', config jsonb not null default '{}', created_at timestamptz not null default now()
);
create table if not exists public.products (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 network_id uuid references public.affiliate_networks(id) on delete set null, external_id text, title text not null,
 product_url text, affiliate_url text, price numeric(14,2), commission_rate numeric(8,3), rating numeric(3,2), status text not null default 'candidate', metadata jsonb not null default '{}', created_at timestamptz not null default now()
);
create table if not exists public.content_items (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 product_id uuid references public.products(id) on delete set null, title text not null, format text not null check(format in ('short_video','promo_image','caption_article','story_reels','review_video','live_shopping')),
 body text, asset_path text, channel text, affiliate_url text, status text not null default 'draft' check(status in ('draft','queued','review','approved','published','rejected','failed')),
 policy_checks jsonb not null default '{}', scheduled_at timestamptz, published_at timestamptz, created_at timestamptz not null default now()
);
create table if not exists public.social_accounts (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 platform text not null, account_label text, external_account_id text, status text not null default 'disconnected', token_secret_ref text, scopes text[] not null default '{}', created_at timestamptz not null default now()
);
create table if not exists public.prospects (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 display_name text, source text, interest text, stage text not null default 'new', consent_status text not null default 'unknown' check(consent_status in ('unknown','granted','withdrawn')),
 consent_at timestamptz, notes text, created_at timestamptz not null default now()
);
create table if not exists public.click_events (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 content_id uuid references public.content_items(id) on delete set null, affiliate_url text not null, source_channel text, clicked_at timestamptz not null default now()
);
create table if not exists public.conversions (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 network_id uuid references public.affiliate_networks(id) on delete set null, external_order_id text, amount numeric(14,2), commission numeric(14,2), status text not null default 'pending', reported_at timestamptz, created_at timestamptz not null default now()
);
create table if not exists public.audit_logs (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 action text not null, entity_type text, entity_id uuid, details jsonb not null default '{}', created_at timestamptz not null default now()
);
-- Row-level isolation for all owner-scoped data.
do $$ declare t text; begin foreach t in array array['affiliate_networks','products','content_items','social_accounts','prospects','click_events','conversions','audit_logs'] loop
 execute format('alter table public.%I enable row level security',t);
 execute format('drop policy if exists owner_all on public.%I',t);
 execute format('create policy owner_all on public.%I for all using (owner_id = auth.uid()) with check (owner_id = auth.uid())',t);
end loop; end $$;
alter table public.profiles enable row level security;
drop policy if exists profile_self on public.profiles;
create policy profile_self on public.profiles for all using (id=auth.uid()) with check (id=auth.uid());
