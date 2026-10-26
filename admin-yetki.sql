-- Bu kodu Supabase SQL Editor'de bir kez çalıştırın.
-- Yalnızca belirtilen yönetici e-postası veri ekleyebilir, değiştirebilir ve silebilir.

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((auth.jwt() ->> 'email') = 'masnuzeka@gmail.com', false);
$$;

-- Eski yönetici politikaları varsa temizle
drop policy if exists "admin camps all" on camps;
drop policy if exists "admin lessons all" on lessons;
drop policy if exists "admin quizzes all" on quizzes;
drop policy if exists "admin questions all" on questions;

create policy "admin camps all" on camps for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin lessons all" on lessons for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin quizzes all" on quizzes for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin questions all" on questions for all to authenticated using (public.is_admin()) with check (public.is_admin());
