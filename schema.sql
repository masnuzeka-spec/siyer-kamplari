-- İkinci aşamadaki platform içi kamplar ve yönetim paneli için veri modeli
create extension if not exists pgcrypto;
create table if not exists camps (id uuid primary key default gen_random_uuid(), title text not null, slug text unique not null, description text, cover_url text, type text not null check(type in ('internal','external')), external_url text, status text default 'draft', starts_at date, ends_at date, created_at timestamptz default now());
create table if not exists lessons (id uuid primary key default gen_random_uuid(), camp_id uuid references camps on delete cascade, title text not null, slug text not null, summary text, golden_notes jsonb default '[]', content jsonb default '{}', position int default 0, published boolean default false, unique(camp_id,slug));
create table if not exists quizzes (id uuid primary key default gen_random_uuid(), camp_id uuid references camps on delete cascade, lesson_id uuid references lessons on delete cascade, title text not null, kind text default 'lesson', duration_minutes int, published boolean default false);
create table if not exists questions (id uuid primary key default gen_random_uuid(), quiz_id uuid references quizzes on delete cascade, body text not null, choices jsonb not null, correct_index int not null, explanation text, position int default 0);
alter table camps enable row level security; alter table lessons enable row level security; alter table quizzes enable row level security; alter table questions enable row level security;
create policy "public read camps" on camps for select using(status='published');
create policy "public read lessons" on lessons for select using(published=true);
create policy "public read quizzes" on quizzes for select using(published=true);
create policy "public read questions" on questions for select using(exists(select 1 from quizzes q where q.id=quiz_id and q.published=true));