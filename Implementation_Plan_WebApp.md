# IMPLEMENTATION PLAN — WEB APP HỌC TIẾNG ANH THPTQG (MẤT GỐC)
*Dùng để đưa cho Agent code (Antigravity) sinh toàn bộ dự án.*

---

## 0. Mục tiêu & phạm vi

- App phục vụ **nhóm nhỏ 2-3 người học** + 1 người quản lý nội dung ("giáo viên"/admin — chính là bạn).
- 3 chức năng cốt lõi:
  1. **Lộ trình học** (Roadmap): 5 giai đoạn → nhiều chủ đề, mỗi chủ đề có lý thuyết tóm tắt + 3 ví dụ + link tham chiếu trang sách (Quyển 1/2) để học viên tự làm bài rồi tick hoàn thành.
  2. **Học từ vựng**: có bộ từ nền sẵn (theo chủ đề THPTQG) + học viên tự thêm từ mới; học theo 2 kiểu **Flashcard** và **Quiz trắc nghiệm**, có spaced repetition đơn giản (SRS).
  3. **Theo dõi tiến độ**: học viên thấy % hoàn thành lộ trình + trạng thái từ vựng (đã thuộc/đang học); admin xem được tiến độ của cả nhóm.
- **Không** nhúng nội dung 2 file PDF (bản quyền) — app chỉ chứa lý thuyết tự tổng hợp + số trang tham chiếu để học viên tự mở sách giấy/PDF cá nhân ra làm bài.
- Chạy dạng **PWA** để học offline được (lý thuyết + từ vựng cache local), vì học sinh có thể học lúc không có mạng.

---

## 1. Tech stack

| Thành phần | Lựa chọn | Lý do |
|---|---|---|
| Framework | **Next.js 14+ (App Router, TypeScript)** | SSR/SSG tốt cho nội dung tĩnh (lý thuyết), dễ làm PWA, deploy free trên Vercel |
| UI | **Tailwind CSS** + **shadcn/ui** | Dựng nhanh, đẹp mặc định, ít code CSS thủ công |
| Backend/DB | **Supabase** (Postgres + Auth + Row Level Security) | Free tier đủ dùng cho 2-3 người, có Auth sẵn, RLS bảo mật theo user dễ |
| State/data fetching | **@tanstack/react-query** + Supabase client | Cache dữ liệu, tốt cho offline-first |
| PWA | **@ducanh2912/next-pwa** (Workbox) | Cache theory + vocab để học offline; tương thích hoàn toàn với Next.js 14 App Router (next-pwa gốc không còn maintain tốt cho App Router) |
| Form | **react-hook-form + zod** | Validate khi thêm từ vựng mới |
| Deploy | **Vercel** (app) + **Supabase Cloud** (DB, free tier) | Miễn phí, đủ cho nhóm nhỏ |

> Nếu Agent code không hỗ trợ Next.js, phương án dự phòng: **Vite + React + React Router**, vẫn dùng Supabase + Tailwind, chỉ khác cách build PWA (dùng `vite-plugin-pwa`).

---

## 2. Kiến trúc tổng thể

```
[ Người dùng (trình duyệt / PWA đã cài) ]
              │
              ▼
   Next.js App (Vercel) ── React Query cache (offline-first)
              │
              ▼
   Supabase (Postgres + Auth + RLS)
      ├─ Auth: email/password (hoặc magic link), 2-3 tài khoản học viên + 1 admin
      ├─ Bảng nội dung tĩnh: topics, examples, vocab_words (đọc chung, admin mới sửa được)
      └─ Bảng dữ liệu riêng từng user: topic_progress, user_vocab_progress, error_log
```

- **Nội dung tĩnh** (topics, examples, vocab nền) → seed 1 lần vào Supabase qua script, mọi user đọc chung (RLS: SELECT cho tất cả user đã đăng nhập, INSERT/UPDATE chỉ cho role = admin).
- **Dữ liệu riêng user** (tiến độ, SRS từ vựng, từ tự thêm, sổ lỗi sai) → RLS: mỗi user chỉ đọc/ghi được dòng của chính mình (`auth.uid() = user_id`).

---

## 3. Cấu trúc thư mục (Next.js App Router)

```
english-thptqg-app/
├─ app/
│  ├─ (auth)/
│  │  ├─ login/page.tsx
│  │  └─ register/page.tsx          # chỉ admin tạo tài khoản cho học viên, hoặc dùng invite link
│  ├─ (main)/
│  │  ├─ layout.tsx                 # layout có sidebar/nav + bottom nav (mobile)
│  │  ├─ page.tsx                   # Dashboard: % lộ trình, số từ cần ôn hôm nay
│  │  ├─ roadmap/
│  │  │  ├─ page.tsx                # danh sách 5 giai đoạn
│  │  │  └─ [phaseId]/
│  │  │     ├─ page.tsx             # danh sách chủ đề trong giai đoạn
│  │  │     └─ [topicId]/page.tsx   # chi tiết: lý thuyết + 3 ví dụ + nút "Đánh dấu đã học" + link trang sách
│  │  ├─ vocab/
│  │  │  ├─ page.tsx                # tổng quan bộ từ (theo chủ đề, lọc đã thuộc/chưa thuộc)
│  │  │  ├─ flashcard/page.tsx      # chế độ học thẻ lật
│  │  │  ├─ quiz/page.tsx           # chế độ trắc nghiệm
│  │  │  └─ add/page.tsx            # form thêm từ mới
│  │  ├─ error-log/page.tsx         # sổ lỗi sai (ghi tay chủ đề + lý do sai)
│  │  └─ admin/                     # chỉ hiện với role=admin
│  │     ├─ topics/page.tsx         # CRUD lý thuyết/ví dụ
│  │     ├─ vocab/page.tsx          # CRUD từ vựng nền
│  │     └─ progress/page.tsx       # xem tiến độ cả nhóm (bảng so sánh)
│  ├─ api/                          # route handlers nếu cần (ví dụ webhook), phần lớn gọi Supabase trực tiếp từ client
│  ├─ manifest.ts                   # PWA manifest
│  └─ layout.tsx                    # root layout, ThemeProvider, QueryClientProvider
├─ components/
│  ├─ ui/                           # shadcn components
│  ├─ roadmap/PhaseCard.tsx, TopicCard.tsx, ExampleBlock.tsx
│  ├─ vocab/FlashCard.tsx, QuizQuestion.tsx, VocabForm.tsx, SrsBadge.tsx
│  └─ shared/ProgressBar.tsx, Navbar.tsx, BottomNav.tsx
├─ lib/
│  ├─ supabase/client.ts, server.ts
│  ├─ srs.ts                        # thuật toán spaced repetition (SM-2 rút gọn)
│  ├─ types.ts                      # type từ Supabase schema (generate bằng supabase-cli)
│  └─ queries/ (topics.ts, vocab.ts, progress.ts)
├─ supabase/
│  ├─ schema.sql                    # toàn bộ CREATE TABLE + RLS policy
│  └─ seed/
│     ├─ seed_topics.json
│     └─ seed_vocab.json
├─ public/ (icons PWA 192x192, 512x512, favicon)
├─ next.config.js                   # cấu hình next-pwa
├─ tailwind.config.ts
└─ package.json
```

---

## 4. Data schema (Supabase / Postgres)

```sql
-- Người dùng (mở rộng từ auth.users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz default now()
);

-- Giai đoạn học (5 giai đoạn)
create table phases (
  id serial primary key,
  order_index int not null,
  title text not null,           -- "Giai đoạn 1 — Ngữ âm & Từ loại nền tảng"
  description text
);

-- Chủ đề trong từng giai đoạn (khớp với 30 mục trong tài liệu lý thuyết)
create table topics (
  id serial primary key,
  phase_id int references phases(id),
  order_index int not null,
  title text not null,           -- "Các thì trong tiếng Anh"
  theory_md text not null,       -- nội dung lý thuyết, markdown
  book1_ref text,                -- "Chuyên đề 3, Phần 1, tr.78-81"
  book2_p1_ref text,             -- "Phần I, Chuyên đề 2, tr.20-26"
  book2_p2_ref text              -- "Phần II, Chuyên đề 3, tr.147-152"
);

-- Ví dụ minh họa (3 ví dụ/chủ đề)
create table topic_examples (
  id serial primary key,
  topic_id int references topics(id) on delete cascade,
  order_index int not null,      -- 1,2,3
  content text not null          -- câu ví dụ + giải thích ngắn
);

-- Tiến độ học của từng user với từng chủ đề
create table topic_progress (
  user_id uuid references profiles(id) on delete cascade,
  topic_id int references topics(id) on delete cascade,
  status text not null default 'not_started'
        check (status in ('not_started','learning','done')),
  updated_at timestamptz default now(),
  primary key (user_id, topic_id)
);

-- Từ vựng (bộ nền do admin seed + từ user tự thêm)
create table vocab_words (
  id serial primary key,
  word text not null,
  ipa text,
  audio_url text,                -- link phát âm chuẩn (cache lại sau lần fetch đầu từ Free Dictionary API)
  meaning_vi text not null,
  example_sentence text,
  phase_id int references phases(id),  -- CHUẨN HÓA: filter /vocab theo đúng Giai đoạn của Roadmap (bắt buộc)
  theme text,                    -- nhãn chủ đề bổ sung để hiển thị/lọc phụ, KHÔNG dùng để đồng bộ với Roadmap
                                  -- vd: "Education", "Phrasal Verbs" — xem seed_vocab.json để biết danh sách theme chuẩn
  is_base boolean default false, -- true = từ nền hệ thống, false = user tự thêm
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- Tiến độ học từ vựng của từng user (SRS)
create table user_vocab_progress (
  user_id uuid references profiles(id) on delete cascade,
  word_id int references vocab_words(id) on delete cascade,
  srs_level int default 0,          -- 0-5, càng cao càng nhớ lâu
  next_review_date date default current_date,
  correct_count int default 0,
  wrong_count int default 0,
  status text default 'new' check (status in ('new','learning','mastered')),
  updated_at timestamptz default now(),
  primary key (user_id, word_id)
);

-- Sổ lỗi sai (theo đúng nguyên tắc học trong lộ trình)
create table error_log (
  id serial primary key,
  user_id uuid references profiles(id) on delete cascade,
  topic_id int references topics(id),
  question_text text,
  correct_answer text,
  reason text,
  created_at timestamptz default now()
);

-- RLS (bật cho tất cả bảng)
alter table profiles enable row level security;
alter table topic_progress enable row level security;
alter table user_vocab_progress enable row level security;
alter table error_log enable row level security;
alter table vocab_words enable row level security;
alter table topics enable row level security;

-- profiles: mọi user đăng nhập đều đọc được (để hiện tên trong bảng admin/progress),
-- chỉ admin mới sửa được role của người khác
create policy "everyone reads profiles" on profiles for select using (true);
create policy "admin updates profiles" on profiles for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- Ví dụ policy chính:
create policy "user reads own progress" on topic_progress
  for select using (auth.uid() = user_id);
create policy "user writes own progress" on topic_progress
  for insert with check (auth.uid() = user_id);
create policy "user updates own progress" on topic_progress
  for update using (auth.uid() = user_id);

create policy "everyone reads topics" on topics for select using (true);
create policy "admin writes topics" on topics for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

create policy "everyone reads base vocab, own custom vocab" on vocab_words
  for select using (is_base = true or created_by = auth.uid());
create policy "user adds own vocab" on vocab_words
  for insert with check (created_by = auth.uid());

-- QUAN TRỌNG: cho phép bất kỳ user đã đăng nhập nào cập nhật audio_url
-- (bắt buộc phải có, nếu không tính năng cache âm thanh ở Prompt 4 sẽ bị RLS chặn
-- vì user thường không phải admin/created_by của từ nền is_base=true)
create policy "authenticated users can cache audio_url" on vocab_words
  for update using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "user manages own vocab progress" on user_vocab_progress
  for all using (auth.uid() = user_id);

create policy "user manages own error log" on error_log
  for all using (auth.uid() = user_id);
```

### 4.1. Ghi chú chuẩn hóa phân loại từ vựng (`phase_id` vs `theme`)

- Trang `/vocab` cần lọc từ vựng **khớp hoàn toàn với Roadmap** → mỗi từ **bắt buộc** gắn với đúng 1 `phase_id` (FK tới bảng `phases`, giá trị 1-4 tương ứng 4 giai đoạn có nội dung: Ngữ âm & từ loại / Ngữ pháp cốt lõi / Cấu trúc nâng cao & từ vựng chuyên sâu / Đọc hiểu & Viết). Đây là trường **dùng để đồng bộ filter chính** giữa `/vocab` và `/roadmap`.
- `theme` là nhãn phụ (Education, Environment, Phrasal Verbs, Idioms...) chỉ để **hiển thị/lọc thêm cho đẹp**, không bắt buộc và không ảnh hưởng tới liên kết với Roadmap.
- Quy tắc gán `phase_id` cho từ vựng thuộc chủ đề đọc hiểu (Education, Environment, Technology, Health, Family & Society, General...) → gán vào **Giai đoạn 4** (vì đây là vốn từ phục vụ đọc hiểu). Từ vựng thuộc Phrasal Verbs, Idioms, Collocations, Prepositions, Synonyms & Antonyms → gán vào **Giai đoạn 3** (đúng nhóm chủ đề tương ứng trong Roadmap). Khi seed thêm batch từ mới sau này, giữ đúng quy tắc này để filter luôn nhất quán.
- Vì file `seed_topics.json` insert `phases` theo thứ tự (`order_index` 1-4) và Supabase tự sinh `id` lúc insert, `seed_vocab.json` dùng trường **`phase_order`** (khớp với `phases.order_index`, KHÔNG phải id thật) — script seed sẽ tự tra map `order_index → id` rồi mới insert vào `vocab_words.phase_id` (xem script cập nhật ở mục 8).

---

## 5. Thuật toán SRS (đơn giản hoá SM-2, cho `lib/srs.ts`)

- `srs_level` chạy 0→5. Trả lời đúng → `srs_level += 1` (tối đa 5); trả lời sai/"Chưa nhớ" → **`srs_level = Math.max(0, srs_level - 1)`** (giảm 1 bậc, KHÔNG reset thẳng về 0) — vì người mất gốc dễ nản nếu mỗi lần quên là mất sạch tiến độ đã ôn được; giảm dần vẫn tạo áp lực ôn lại sớm hơn nhưng công sức học trước đó không "mất trắng".
- Khoảng cách ôn lại theo level: `[0:1 ngày, 1:2 ngày, 2:4 ngày, 3:7 ngày, 4:14 ngày, 5:30 ngày]`.
- `next_review_date = today + khoảng_cách[srs_level mới]` (tính theo level **sau khi** đã cộng/trừ).
- `status`: `new` (chưa học lần nào) → `learning` (đã học, srs_level 1-3) → `mastered` (srs_level ≥ 4). Nếu bị giảm bậc xuống dưới 4, `status` tự động chuyển lại từ `mastered` về `learning`.
- Trang **Flashcard/Quiz** mỗi ngày chỉ hiển thị từ có `next_review_date <= today`, ưu tiên `status = new` trước rồi đến từ cần ôn lại.

---

## 6. User flow chi tiết

### 6.1. Onboarding
1. Admin tạo tài khoản cho 2-3 học viên (Supabase Auth Admin API hoặc invite qua email) → mỗi học viên có 1 dòng trong `profiles` với `role='student'`.
2. Học viên đăng nhập lần đầu → Dashboard trống, roadmap 5 giai đoạn hiện % = 0%.

### 6.2. Học theo lộ trình
1. Học viên vào **Roadmap** → chọn Giai đoạn → chọn Chủ đề.
2. Trang Chủ đề hiển thị: lý thuyết tóm tắt (markdown render) → 3 ví dụ → khối "📖 Làm bài tập tại: Quyển 1 tr.X, Quyển 2 Phần I tr.Y / Phần II tr.Z" (chỉ text tham chiếu, không nhúng sách) → nút **"Tôi đã học xong, đánh dấu hoàn thành"**.
3. Khi bấm hoàn thành → upsert vào `topic_progress` (`status='done'`) → Dashboard cập nhật % ngay (React Query invalidate).
4. Có thể đánh dấu trạng thái trung gian `learning` (đang học dở) để biết còn dang dở chỗ nào.

### 6.3. Học từ vựng — Flashcard
1. Vào `/vocab/flashcard` → hệ thống lấy danh sách từ có `next_review_date <= hôm nay` (join `vocab_words` + `user_vocab_progress`, tạo dòng progress mới nếu từ đó user chưa từng học).
2. Hiển thị mặt trước (từ + IPA + **nút loa 🔊**), bấm để lật → mặt sau (nghĩa + câu ví dụ, vẫn giữ nút loa).
   - Nút loa: bấm → phát âm chuẩn của từ (xem logic fetch ở mục 6.3.1 bên dưới).
3. Học viên tự đánh giá: **"Chưa nhớ"** / **"Nhớ rồi"** → cập nhật `srs_level`, `next_review_date` theo thuật toán ở mục 5 (lưu ý: "Chưa nhớ" chỉ **giảm 1 bậc**, không reset về 0).

#### 6.3.1. Logic nút phát âm (dùng chung cho Flashcard + Quiz)

File `lib/vocab/pronounce.ts` — code mẫu đầy đủ để Agent dùng luôn, không cần suy diễn lại logic:

```ts
export async function playPronunciation(
  word: string,
  cachedAudioUrl?: string | null
): Promise<{ playedUrl?: string }> {
  // 1. Dùng URL đã cache trong DB (nếu có)
  if (cachedAudioUrl) {
    try {
      const audio = new Audio(cachedAudioUrl);
      await audio.play();
      return { playedUrl: cachedAudioUrl };
    } catch (e) {
      console.warn("Cached audio failed, falling back to API", e);
    }
  }

  // 2. Fetch từ Free Dictionary API
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.trim())}`
    );
    if (res.ok) {
      const data = await res.json();
      const phonetics = data[0]?.phonetics || [];
      const audioObj = phonetics.find((p: any) => p.audio && p.audio.length > 0);
      if (audioObj?.audio) {
        const audio = new Audio(audioObj.audio);
        await audio.play();
        return { playedUrl: audioObj.audio }; // component gọi nơi khác UPDATE vocab_words.audio_url để cache
      }
    }
  } catch (err) {
    console.warn("Dictionary API failed, falling back to Web Speech", err);
  }

  // 3. Fallback Web Speech API — hoạt động cả khi offline (hợp với yêu cầu PWA)
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  return {};
}
```

Cách dùng trong component (Flashcard/Quiz):
1. Bấm nút loa → gọi `playPronunciation(word, vocab_words.audio_url)`.
2. Nếu kết quả trả về `playedUrl` VÀ `vocab_words.audio_url` đang `null` → gọi Supabase `update` để cache lại (nhờ policy `"authenticated users can cache audio_url"` ở mục 4, lệnh update này chạy được dù người dùng không phải chủ sở hữu từ đó).
3. Nếu không có `playedUrl` (rơi vào fallback Web Speech) → không cần update gì, lần sau bấm lại sẽ tự phát bằng giọng máy tương tự.

### 6.4. Học từ vựng — Quiz
1. Vào `/vocab/quiz` → chọn phạm vi (theo `phase_id` — khớp Giai đoạn Roadmap — hoặc lọc thêm theo `theme`, hoặc "tất cả từ cần ôn hôm nay").
2. Mỗi câu: hiện 1 từ tiếng Anh + **nút loa 🔊** (dùng lại `playPronunciation`), 4 đáp án nghĩa tiếng Việt (3 nhiễu lấy random từ các từ khác cùng tập) → chọn đáp án → chấm ngay, cập nhật `correct_count`/`wrong_count` và SRS như flashcard (sai → giảm 1 bậc, không reset).
3. Cuối phiên hiện điểm tổng + danh sách từ sai để ôn lại ngay hoặc thêm vào sổ lỗi sai.

### 6.5. Thêm từ vựng mới
1. Vào `/vocab/add` → form (react-hook-form + zod): word, ipa (optional, có thể để trống rồi tự fetch sau), meaning_vi (bắt buộc), example_sentence (optional), **Giai đoạn** = `phase_id` (dropdown bắt buộc, lấy từ bảng `phases` — đây là trường quyết định từ này hiện ở đâu trong `/vocab` khi lọc theo Roadmap), **Chủ đề** = `theme` (input tự do hoặc dropdown gợi ý các theme đã có, optional, chỉ để lọc phụ).
2. Submit → insert `vocab_words` với `created_by = user.id`, `is_base = false`, `audio_url = null` (sẽ tự fetch khi lần đầu bấm nút loa) → tự động tạo dòng `user_vocab_progress` (`status='new'`).

### 6.6. Sổ lỗi sai
1. Học viên có thể tự thêm nhanh (question, correct_answer, reason) khi làm bài tập trong Quyển 1/2 gặp lỗi.
2. Trang `/error-log` liệt kê theo chủ đề, lọc theo giai đoạn, dùng để ôn cuối tuần (đúng nguyên tắc "đọc sổ lỗi sai" trong lộ trình).

### 6.7. Admin — quản lý nội dung & xem tiến độ nhóm
1. `/admin/topics`: sửa lý thuyết/ví dụ trực tiếp (không cần deploy lại) — CRUD đơn giản.
2. `/admin/vocab`: thêm/sửa bộ từ nền.
3. `/admin/progress`: bảng so sánh % hoàn thành lộ trình + số từ đã mastered của từng học viên (query `topic_progress` và `user_vocab_progress` group by user).

---

## 7. PWA & Offline

- `manifest.ts` (Next.js 14 hỗ trợ native): tên app, icon 192/512, theme_color, display: "standalone".
- Dùng `next-pwa` để tạo service worker: cache-first cho các route `/roadmap/**` (nội dung tĩnh) và `/vocab` list, network-first cho các API ghi dữ liệu (progress, thêm từ) — khi mất mạng thì queue lại và đồng bộ khi có mạng lại (dùng React Query `mutate` + `persistQueryClient` hoặc IndexedDB queue đơn giản).
- Icon/app tên gợi ý: "Ôn Anh THPTQG" hoặc theo tên nhóm bạn đặt.

---

## 8. Seed data

Hai file JSON đã chuẩn bị sẵn để import (script Node đơn giản đọc JSON → insert Supabase qua service role key):

- `seed_topics.json` — 30 chủ đề đầy đủ lý thuyết + 3 ví dụ + tham chiếu trang sách (chuyển thẳng từ tài liệu lý thuyết đã tạo).
- `seed_vocab.json` — bộ từ vựng nền khởi điểm (50 từ, dùng để test code trước — sẽ gen thêm batch sau). Mỗi từ có `phase_order` (1-4, khớp `phases.order_index`, KHÔNG phải `phases.id` thật) để script seed tự tra map sang `phase_id` đúng, cộng `theme` để lọc phụ. `audio_url` để trống (`null`) — app tự fetch & cache khi user bấm nút loa lần đầu (xem mục 6.3.1).

*(2 file này được đính kèm riêng, xem phần "Files đính kèm" cuối tài liệu.)*

Script seed mẫu (`supabase/seed/run-seed.ts`):
```ts
import { createClient } from "@supabase/supabase-js";
import topics from "./seed_topics.json";
import vocab from "./seed_vocab.json";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function run() {
  // map order_index -> id thật sau khi insert, dùng lại cho cả topics và vocab_words
  const phaseIdByOrder: Record<number, number> = {};

  for (const phase of topics.phases) {
    const { data: p } = await supabase.from("phases").insert({
      order_index: phase.order_index, title: phase.title
    }).select().single();
    phaseIdByOrder[phase.order_index] = p.id;

    for (const t of phase.topics) {
      const { data: topicRow } = await supabase.from("topics").insert({
        phase_id: p.id, order_index: t.order_index, title: t.title,
        theory_md: t.theory_md, book1_ref: t.book1_ref,
        book2_p1_ref: t.book2_p1_ref, book2_p2_ref: t.book2_p2_ref
      }).select().single();

      await supabase.from("topic_examples").insert(
        t.examples.map((content: string, i: number) => ({
          topic_id: topicRow.id, order_index: i + 1, content
        }))
      );
    }
  }

  // vocab: chuyển phase_order (1-4) trong seed_vocab.json sang phase_id thật vừa insert ở trên
  await supabase.from("vocab_words").insert(
    vocab.words.map((w: any) => ({
      word: w.word,
      ipa: w.ipa,
      audio_url: w.audio_url ?? null,
      meaning_vi: w.meaning_vi,
      example_sentence: w.example_sentence,
      phase_id: phaseIdByOrder[w.phase_order],
      theme: w.theme,
      is_base: true
    }))
  );
}
run();
```

---

## 9. Danh sách PROMPT cụ thể để đưa cho Agent (Antigravity) — theo từng bước

> Đưa lần lượt từng prompt, để agent hoàn thành xong bước trước rồi mới sang bước sau, tránh agent làm rối cùng lúc quá nhiều việc.

**PROMPT 1 — Khởi tạo project**
```
Tạo mới 1 dự án Next.js 14 (App Router, TypeScript) tên "english-thptqg-app".
Cài đặt: tailwindcss, shadcn/ui, @supabase/supabase-js, @supabase/ssr,
@tanstack/react-query, react-hook-form, zod, @ducanh2912/next-pwa, lucide-react.
Cấu hình Tailwind + shadcn cơ bản (base color: slate, font: Inter).
Tạo cấu trúc thư mục đúng như sau: [dán nguyên mục 3 "Cấu trúc thư mục" ở trên].
Không cần viết logic gì vội, chỉ tạo khung file rỗng theo đúng cấu trúc.
```

**PROMPT 2 — Supabase schema & auth**
```
Trong thư mục supabase/, tạo file schema.sql với đúng nội dung sau: [dán nguyên mục 4 "Data schema"].
Tạo lib/supabase/client.ts (browser client) và lib/supabase/server.ts (server client, dùng cookies từ next/headers)
theo hướng dẫn @supabase/ssr mới nhất cho Next.js App Router.
Tạo trang app/(auth)/login/page.tsx: form đăng nhập email/password bằng Supabase Auth,
redirect về "/" (dashboard) sau khi đăng nhập thành công. Không cần trang đăng ký công khai
(chỉ admin tạo tài khoản qua Supabase Dashboard hoặc 1 script riêng).
Tạo middleware.ts bảo vệ toàn bộ route trong group (main) — chưa đăng nhập thì redirect /login.
```

**PROMPT 3 — Module Roadmap**
```
Xây dựng các trang:
- app/(main)/roadmap/page.tsx: fetch bảng "phases" (order by order_index), hiển thị 5 card giai đoạn,
  mỗi card có progress bar (% topic đã done / tổng topic trong giai đoạn, tính từ topic_progress của user hiện tại).
- app/(main)/roadmap/[phaseId]/page.tsx: fetch topics theo phase_id, hiển thị list, mỗi item có icon trạng thái
  (chưa học/đang học/đã xong dựa vào topic_progress).
- app/(main)/roadmap/[phaseId]/[topicId]/page.tsx: fetch topic + topic_examples, render theory_md bằng
  react-markdown, hiển thị 3 ví dụ trong card riêng, hiển thị box tham chiếu sách (book1_ref, book2_p1_ref,
  book2_p2_ref), có 2 nút "Đánh dấu: Đang học" và "Đánh dấu: Đã hoàn thành" → upsert vào topic_progress
  bằng Supabase client, dùng React Query mutation + invalidate query liên quan.
Dùng component components/roadmap/PhaseCard.tsx, TopicCard.tsx, ExampleBlock.tsx tương ứng.
```

**PROMPT 4 — Module Từ vựng (Flashcard + Quiz + Thêm từ + Phát âm)**
```
Cài đặt file lib/srs.ts với hàm updateSrs(current: {srs_level, next_review_date}, isCorrect: boolean)
theo đúng logic: khoảng cách ôn = [1,2,4,7,14,30] ngày tương ứng srs_level 0-5.
- Đúng: srs_level = Math.min(5, srs_level + 1).
- Sai/"Chưa nhớ": srs_level = Math.max(0, srs_level - 1) — CHỈ GIẢM 1 BẬC, KHÔNG reset thẳng về 0
  (mục đích: người mất gốc không bị mất hết tiến độ ôn chỉ vì quên 1 lần, tránh gây nản).
next_review_date = hôm nay + khoảng cách tương ứng level MỚI (sau khi đã +1/-1).
status: level 0 và chưa học lần nào = "new", level 1-3 = "learning", level >= 4 = "mastered"
(nếu bị giảm bậc từ mastered xuống dưới 4 thì status quay lại "learning").

Tạo file lib/vocab/pronounce.ts đúng nguyên code trong mục 6.3.1 của Plan (hàm playPronunciation:
thử audio cache -> fetch Free Dictionary API -> fallback Web Speech API).

Trang app/(main)/vocab/page.tsx: hiển thị tổng số từ, số từ cần ôn hôm nay, lọc theo phase_id (dropdown
"Giai đoạn" lấy từ bảng phases — đây là filter CHÍNH khớp với Roadmap), lọc phụ theo theme (nếu có) và theo
status, nút vào Flashcard/Quiz.

Trang app/(main)/vocab/flashcard/page.tsx: lấy danh sách từ có next_review_date <= hôm nay (tạo dòng
user_vocab_progress mới nếu chưa có, next_review_date mặc định hôm nay), hiển thị từng thẻ component
components/vocab/FlashCard.tsx (mặt trước: word + ipa + nút loa 🔊 gọi playPronunciation, bấm thẻ để lật
mặt sau: meaning_vi + example_sentence, vẫn giữ nút loa), 2 nút "Chưa nhớ" / "Nhớ rồi" gọi updateSrs rồi lưu
Supabase (khi playPronunciation trả về playedUrl mới từ Dictionary API và vocab_words.audio_url đang null,
UPDATE luôn cột audio_url để cache cho lần sau — policy "authenticated users can cache audio_url" trong
schema.sql đã cho phép việc này), tự chuyển sang thẻ tiếp theo, hết thẻ thì hiện màn hình tổng kết.

Trang app/(main)/vocab/quiz/page.tsx: cùng nguồn dữ liệu như flashcard, mỗi câu hiện từ tiếng Anh + nút loa
(dùng lại playPronunciation) + 4 đáp án nghĩa (1 đúng + 3 nhiễu random từ các từ khác trong tập đang học),
chấm điểm ngay khi chọn, cập nhật correct_count/wrong_count + updateSrs (logic giảm-1-bậc như trên), cuối
phiên hiện điểm và danh sách từ sai.

Trang app/(main)/vocab/add/page.tsx: form dùng react-hook-form + zod (word bắt buộc, meaning_vi bắt buộc,
ipa optional, example_sentence optional, phase_id là select BẮT BUỘC lấy từ bảng phases — đây là trường
quyết định từ mới hiện ở Giai đoạn nào trong /vocab —, theme là input tự do optional), submit insert vào
vocab_words với created_by = user hiện tại, is_base = false, audio_url = null, đồng thời tạo dòng
user_vocab_progress mới.
```

**PROMPT 5 — Dashboard, Sổ lỗi sai, Admin**
```
Trang app/(main)/page.tsx (Dashboard): hiển thị % tổng tiến độ roadmap (tổng topic done / tổng topic),
số từ cần ôn hôm nay, số từ đã mastered, nút tắt nhanh tới Roadmap/Vocab/Error log.

Trang app/(main)/error-log/page.tsx: form thêm nhanh (question_text, correct_answer, reason, chọn topic
liên quan) + danh sách lỗi đã ghi, lọc theo giai đoạn/chủ đề, sort theo mới nhất.

Trang app/(main)/admin/topics/page.tsx, admin/vocab/page.tsx: chỉ render nếu profiles.role = 'admin'
(check phía server component), là bảng CRUD đơn giản (dùng shadcn Table + Dialog form) để sửa theory_md,
examples, thêm/sửa vocab_words is_base=true.

Trang app/(main)/admin/progress/page.tsx: bảng so sánh tất cả học viên (join profiles + topic_progress +
user_vocab_progress), cột: Tên, % roadmap, số từ mastered, số từ cần ôn hôm nay, hoạt động gần nhất.
```

**PROMPT 6 — PWA & hoàn thiện**
```
Cấu hình @ducanh2912/next-pwa trong next.config.js theo cú pháp package này (withPWA từ
"@ducanh2912/next-pwa", KHÔNG dùng cú pháp next-pwa gốc):
  const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    register: true,
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    workboxOptions: { disableDevLogs: true }
  });
Cache-first cho các route tĩnh /roadmap/** và danh sách /vocab (GET requests), network-first cho các
mutation (progress, thêm từ, cập nhật audio_url). Tạo app/manifest.ts với name "Ôn Anh THPTQG", icons
192x192 và 512x512 (dùng placeholder icon tạm), theme_color phù hợp UI, display "standalone", start_url "/".
Kiểm tra toàn bộ app responsive tốt trên mobile (ưu tiên mobile-first vì học viên chủ yếu học trên điện thoại),
thêm BottomNav.tsx cố định dưới màn hình mobile với 4 tab: Dashboard, Roadmap, Từ vựng, Sổ lỗi sai.
```

---

## 10. Ghi chú triển khai thực tế

- **Chi phí**: Supabase free tier (500MB DB, 50k monthly active users) và Vercel Hobby đều đủ dư cho 2-3 người dùng → **miễn phí hoàn toàn**.
- **Tài khoản học viên**: vì nhóm nhỏ, không cần trang đăng ký công khai — admin tạo tài khoản thủ công qua Supabase Dashboard (Authentication → Add user) rồi gửi mật khẩu tạm cho học viên, an toàn hơn và đỡ phải code thêm.
- **Cập nhật nội dung sau này**: vì lý thuyết/ví dụ nằm trong DB (không hardcode trong code), khi cần sửa/thêm chủ đề chỉ cần vào trang `/admin/topics`, không cần deploy lại code.
- **Thứ tự build đề xuất**: PROMPT 1 → 2 → 3 → 4 → 5 → 6, sau mỗi prompt nên chạy thử `npm run dev` kiểm tra trước khi sang bước tiếp theo.
