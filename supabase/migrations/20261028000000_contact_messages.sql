-- Contact form messages from the portfolio site.
-- The site inserts with the public (anon/publishable) key; RLS allows inserts only,
-- so nobody can read messages back with that key. Read them in the Supabase dashboard
-- (Table Editor -> contact_messages).

create table if not exists public.contact_messages (
  id         bigint generated always as identity primary key,
  name       text not null check (char_length(name) between 1 and 200),
  email      text not null check (char_length(email) between 3 and 320),
  message    text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can send a contact message" on public.contact_messages;
create policy "Anyone can send a contact message"
  on public.contact_messages
  for insert
  to anon
  with check (true);

grant insert on public.contact_messages to anon;
