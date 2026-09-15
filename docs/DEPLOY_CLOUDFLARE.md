# Hướng Dẫn Deploy Ứng Dụng "Easy English" Lên Cloudflare Pages

Tài liệu này hướng dẫn chi tiết từng bước để bạn đưa web app **Easy English** lên Cloudflare Pages hoàn toàn miễn phí, có HTTPS tự động, CDN toàn cầu siêu tốc và liên kết trực tiếp với GitHub để mỗi khi cập nhật code là Cloudflare tự động build lại.

---

## 📋 Bước 1: Chuẩn bị thông tin tài khoản Supabase

Bạn cần chuẩn bị 3 biến môi trường (Environment Variables) từ file `.env.local` của bạn:
1. `NEXT_PUBLIC_SUPABASE_URL`: `https://sttsgjppamwekojxudfv.supabase.co`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (Khóa anon trong Supabase Dashboard)
3. `SUPABASE_SERVICE_ROLE_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (Khóa service_role để xử lý tạo user server-side)

---

## 🌐 Bước 2: Kết nối GitHub với Cloudflare Pages

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Ở thanh menu bên trái, chọn **Workers & Pages**.
3. Bấm vào nút **Create application** ➔ Chọn tab **Pages** ➔ Chọn **Connect to Git**.
4. Chọn tài khoản GitHub của bạn (`lesontruong6807`), tìm và chọn repository:
   👉 **`Easy-English`**
5. Bấm **Begin setup**.

---

## ⚙️ Bước 3: Cấu hình Build Settings trên Cloudflare

Tại trang cấu hình dự án (**Set up builds and deployments**):

1. **Project name**: Đặt tên dự án (mặc định là `easy-english`). Tên miền miễn phí sẽ có dạng: `easy-english.pages.dev`.
2. **Production branch**: Chọn `main`.
3. **Framework preset**: Chọn **Next.js** (hoặc **None** nếu tùy biến).
4. **Build command**:
   ```bash
   npm run build
   ```
5. **Build output directory**:
   ```bash
   .next
   ```
   *(Nếu bạn sử dụng OpenNext / Next-on-Pages: output là `.vercel/output/static` hoặc theo preset)*

---

## 🔐 Bước 4: Thêm Biến Môi Trường (Environment Variables)

Cuộn xuống mục **Environment variables (advanced)**, bấm **Add variable** và thêm đủ các biến sau:

| Variable Name | Value | Lưu ý |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://sttsgjppamwekojxudfv.supabase.co` | Dùng cho Client & Server |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | *(Khóa anon public của bạn)* | Dùng cho Client & Server |
| `SUPABASE_SERVICE_ROLE_KEY` | *(Khóa service_role bí mật)* | Dùng cho API route đăng ký |
| `NODE_VERSION` | `20` hoặc `22` | Khuyên dùng Node 20 LTS |

### Cấu hình Compatibility Flags (Quan trọng cho Cloudflare Pages Functions)
Vào mục **Settings** ➔ **Functions** ➔ **Compatibility flags**:
- Thêm flag: `nodejs_compat`
- Compatibility date: `2024-09-23` (hoặc mới nhất)

---

## 🚀 Bước 5: Bấm Save and Deploy

1. Bấm nút **Save and Deploy**.
2. Cloudflare Pages sẽ tự động kéo code từ GitHub `lesontruong6807/Easy-English`, cài đặt dependencies và build dự án.
3. Khi hoàn tất (khoảng 1–2 phút), Cloudflare sẽ cấp cho bạn một đường link chính thức có dạng:
   👉 **`https://easy-english.pages.dev`**
4. Bạn có thể gắn tên miền riêng (Custom Domain) hoàn toàn miễn phí tại tab **Custom domains**.

---

## 💡 Lưu Ý Bổ Sung
- Tài khoản **Admin** của bạn đã được khởi tạo sẵn:
  - Tên đăng nhập: **`truongleson687`**
  - Mật khẩu: **`Son060807@`**
  - Có toàn quyền truy cập các trang quản trị: Lộ trình lý thuyết, Kho từ vựng, và Bảng theo dõi tiến độ nhóm.
- Các bạn học viên khác khi vào web chỉ cần bấm **Đăng ký học viên** (nhập họ tên, tên đăng nhập, mật khẩu) là tài khoản được tạo ngay lập tức trên Supabase và đồng bộ tiến độ học tập trên mọi thiết bị!
