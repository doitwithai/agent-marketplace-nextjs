create table if not exists fees_config(id serial primary key, commission_bps integer default 1200, escrow_hold_days integer default 7);
