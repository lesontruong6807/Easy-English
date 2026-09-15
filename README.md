# Easy English — Web App Học Tiếng Anh THPTQG (Dành Cho Người Mất Gốc)

Ứng dụng web/PWA học tiếng Anh thi THPTQG bám sát tài liệu bài tập, phục vụ nhóm học 2-3 học viên + 1 giáo viên/admin.

---

## 🌟 Tính Năng Nổi Bật

1. **Lộ trình học 4 Giai đoạn chuẩn hóa (Roadmap)**:
   - 30 chủ đề lý thuyết cốt lõi bám sát kỳ thi THPTQG.
   - Mỗi chủ đề bao gồm: Lý thuyết tóm tắt markdown, 3 ví dụ minh họa điển hình, hộp tham chiếu số trang bài tập trong **Quyển 1** và **Quyển 2 (Phần 1 & 2)**.
   - Nút đánh dấu "Đang học" và "Đã hoàn thành" cập nhật tiến độ tức thì.

2. **Kho Từ Vựng & Spaced Repetition (SRS SM-2)**:
   - 50+ từ vựng nền hệ thống phân loại theo Giai đoạn Roadmap (bắt buộc) và Chủ đề (Education, Environment, Phrasal Verbs, Idioms...).
   - **Flashcard 3D**: Lật thẻ trực quan, hỗ trợ phím tắt (Space để lật, Mũi tên trái "Chưa nhớ", Mũi tên phải "Nhớ rồi").
   - **Phát âm chuẩn 3 lớp**: Ưu tiên Cache -> Free Dictionary API -> Web Speech API (hoạt động tốt cả khi offline).
   - **Thuật toán SRS thông minh**: Trả lời đúng tăng 1 bậc (Level 0-5 giãn cách 1, 2, 4, 7, 14, 30 ngày); trả lời sai **chỉ giảm 1 bậc** (không reset về 0 để tránh gây nản cho người mất gốc).
   - **Quiz trắc nghiệm**: 4 lựa chọn với phản hồi màu sắc đúng/sai tức thì, thống kê kết quả và nút ghi ngay các từ sai vào Sổ lỗi.

3. **Sổ Tay Lỗi Sai (Error Notebook)**:
   - Ghi lại các câu làm sai trong sách Quyển 1 & 2 hoặc khi làm Quiz.
   - Ghi chú lý do sai, bẫy ngữ pháp cần tránh và liên kết trực tiếp tới chủ đề lý thuyết tương ứng.

4. **Khu vực Admin & Giáo viên**:
   - Bảng so sánh tiến độ cả nhóm học viên: % lộ trình, số từ mastered, số từ cần ôn hôm nay.
   - Quản lý và chỉnh sửa trực tiếp lý thuyết, ví dụ, tham chiếu trang sách mà không cần deploy lại.

5. **PWA & Mobile First**:
   - Cài đặt lên màn hình chính điện thoại (iOS / Android / Desktop) như app native.
   - Thanh điều hướng BottomNav cố định tiện lợi trên di động.

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Local Development)

Ứng dụng có thể chạy và tương tác **ngay lập tức** không cần cấu hình Supabase nhờ vào chế độ Local Demo Mode:

```bash
# 1. Cài đặt thư viện (nếu chưa cài)
npm install

# 2. Khởi động server phát triển
npm run dev
```

Mở trình duyệt truy cập: [http://localhost:3000](http://localhost:3000)

> **Mẹo**: Ở góc trên bên phải màn hình có nút đổi tài khoản (Minh Anh, Bảo Long, Quỳnh Chi, Thầy Sơn Admin) để bạn có thể kiểm tra mọi góc nhìn học viên và giáo viên một cách tiện lợi!

---

## ☁️ Hướng Dẫn Kết Nối Supabase Cloud (Tùy chọn khi đưa lên mạng)

1. Tạo một dự án mới miễn phí tại [Supabase](https://supabase.com).
2. Vào **SQL Editor** trong Supabase Dashboard, copy toàn bộ nội dung file `supabase/schema.sql` và nhấn **Run** để khởi tạo các bảng và phân quyền RLS.
3. Tạo file `.env.local` tại thư mục gốc với các thông tin API keys từ Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
   ```
4. Chạy script seed dữ liệu:
   ```bash
   npx ts-node supabase/seed/run-seed.ts
   ```

---

## 📦 Deploy Lên Vercel

1. Đẩy code lên GitHub repository của bạn.
2. Vào [Vercel](https://vercel.com) -> New Project -> Import repository.
3. Điền các biến môi trường từ `.env.local` vào mục **Environment Variables**.
4. Nhấn **Deploy** là xong!
