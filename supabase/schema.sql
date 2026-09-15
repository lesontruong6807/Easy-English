-- ==============================================================================
-- SCHEMA CHO WEB APP HỌC TIẾNG ANH THPTQG (EASY ENGLISH)
-- ==============================================================================

-- Người dùng (mở rộng từ auth.users)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz default now()
);

-- Giai đoạn học (4 giai đoạn)
create table if not exists phases (
  id serial primary key,
  order_index int not null,
  title text not null,
  description text
);

-- Chủ đề trong từng giai đoạn (30 chủ đề)
create table if not exists topics (
  id serial primary key,
  phase_id int references phases(id) on delete cascade,
  order_index int not null,
  title text not null,
  theory_md text not null,
  book1_ref text,
  book2_p1_ref text,
  book2_p2_ref text
);

-- Ví dụ minh họa (3 ví dụ/chủ đề)
create table if not exists topic_examples (
  id serial primary key,
  topic_id int references topics(id) on delete cascade,
  order_index int not null,
  content text not null
);

-- Tiến độ học của từng user với từng chủ đề
create table if not exists topic_progress (
  user_id uuid references profiles(id) on delete cascade,
  topic_id int references topics(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started','learning','done')),
  updated_at timestamptz default now(),
  primary key (user_id, topic_id)
);

-- Từ vựng (bộ nền do admin seed + từ user tự thêm)
create table if not exists vocab_words (
  id serial primary key,
  word text not null,
  ipa text,
  audio_url text,
  meaning_vi text not null,
  example_sentence text,
  phase_id int references phases(id) on delete cascade,
  theme text,
  is_base boolean default false,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- Tiến độ học từ vựng của từng user (SRS)
create table if not exists user_vocab_progress (
  user_id uuid references profiles(id) on delete cascade,
  word_id int references vocab_words(id) on delete cascade,
  srs_level int default 0,
  next_review_date date default current_date,
  correct_count int default 0,
  wrong_count int default 0,
  status text default 'new' check (status in ('new','learning','mastered')),
  updated_at timestamptz default now(),
  primary key (user_id, word_id)
);

-- Sổ lỗi sai
create table if not exists error_log (
  id serial primary key,
  user_id uuid references profiles(id) on delete cascade,
  topic_id int references topics(id) on delete set null,
  question_text text not null,
  correct_answer text not null,
  reason text not null,
  created_at timestamptz default now()
);

-- Kích hoạt RLS (Row Level Security)
alter table profiles enable row level security;
alter table phases enable row level security;
alter table topics enable row level security;
alter table topic_examples enable row level security;
alter table topic_progress enable row level security;
alter table vocab_words enable row level security;
alter table user_vocab_progress enable row level security;
alter table error_log enable row level security;

-- Policies
create policy "everyone reads profiles" on profiles for select using (true);
create policy "admin updates profiles" on profiles for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

create policy "everyone reads phases" on phases for select using (true);

create policy "everyone reads topics" on topics for select using (true);
create policy "admin writes topics" on topics for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

create policy "everyone reads topic_examples" on topic_examples for select using (true);

create policy "user reads own progress" on topic_progress for select using (auth.uid() = user_id);
create policy "user writes own progress" on topic_progress for insert with check (auth.uid() = user_id);
create policy "user updates own progress" on topic_progress for update using (auth.uid() = user_id);

create policy "everyone reads base vocab, own custom vocab" on vocab_words
  for select using (is_base = true or created_by = auth.uid());
create policy "user adds own vocab" on vocab_words
  for insert with check (created_by = auth.uid());

-- Cho phép user cache audio_url đã phát âm
create policy "authenticated users can cache audio_url" on vocab_words
  for update using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "user manages own vocab progress" on user_vocab_progress
  for all using (auth.uid() = user_id);

create policy "user manages own error log" on error_log
  for all using (auth.uid() = user_id);
