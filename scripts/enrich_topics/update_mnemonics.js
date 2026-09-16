const fs = require('fs');
const path = require('path');

function replaceArrows(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\$\\rightarrow\$/g, '→');
  content = content.replace(/\\rightarrow/g, '→');
  content = content.replace(/\$rightarrow\$/g, '→');
  return content;
}

// 1. Process Phase 1
let p1 = replaceArrows(path.join(__dirname, 'phase1.js'));

// Update Topic 1 mnemonics in Phase 1
const t1Old = `> 💡 **THẦN CHÚ HACK NÃO NHỚ TRONG 5 GIÂY:**
> 1. Đọc là **/ɪd/**: Nhớ câu **"Tiền - Đô"** (T - D). Cứ thấy tận cùng bằng **T** hoặc **D** là đọc **/ɪd/** ngay!
> 2. Đọc là **/t/**: Nhớ câu thần chú bất hủ **"Chính Phủ Phát Sách Không Cho Thuê"** (tương ứng với các âm: **ch, p, f/gh/ph, s/x/ce, k, ch, th**).
> 3. Đọc là **/d/**: Toàn bộ các từ còn lại không thuộc 2 nhóm trên!`;

const t1New = `> 💡 **THẦN CHÚ HACK NÃO NHỚ TRONG 5 GIÂY:**
> 1. Đọc là **/ɪd/**: Nhớ câu **"Tiền - Đô"** hoặc **"Tình - Đầu"** (T - D). Cứ thấy tận cùng bằng **T** hoặc **D** là đọc **/ɪd/** ngay!
> 2. Đọc là **/t/** (các từ tận cùng bằng: ch, p, f/ph/gh, s, k, sh, x, th):
>    - **"Chúng phải phục sẵn khi shiết xích"**
>    - **"Sáng sớm chạy khắp phố phường sau xem"**
>    - Hoặc: **"Chính Phủ Phát Sách Không Cho Thuê"**
> 3. Đọc là **/d/**: Toàn bộ các từ còn lại (âm hữu thanh)!`;

p1 = p1.replace(t1Old, t1New);

// Update Topic 2 mnemonics in Phase 1
const t2Old = `> 💡 **CÂU THẦN CHÚ "BẤT BẠI" DÀNH CHO HỌC SINH:**
> 1. Đọc là **/ɪz/**: Nhớ câu **"Sáu Chạy Xe Sh Zui Zẻ"** (tương ứng chữ cái cuối: **s, ch, x, sh, z, ge/ce**).
> 2. Đọc là **/s/**: Nhớ câu **"Thời Phong Kiến Phương Tây"** (tương ứng các âm: **/θ/ (th), /p/, /k/, /f/ (gh/ph), /t/**).
> 3. Đọc là **/z/**: Toàn bộ các trường hợp còn lại!`;

const t2New = `> 💡 **CÂU THẦN CHÚ "BẤT BẠI" DÀNH CHO HỌC SINH:**
> 1. Đọc là **/ɪz/** (Các từ tận cùng bằng: s, ss, ch, sh, x, z, ce, ge):
>    - **"Sẵn sàng chiều shững xong zứt chân giày"**
>    - **"Sóng zữ chỉ sợ xiên cá già"**
>    - Hoặc: **"Sáu Chạy Xe Sh Zui Zẻ"**
> 2. Đọc là **/s/** (Các từ tận cùng bằng: f/ph/gh, t, k, p, th):
>    - **"Phải thắp kính phù thủy"**
>    - **"Chính phủ phát sách không cho thuê"**
>    - Hoặc: **"Thời phong kiến phương tây"**
> 3. Đọc là **/z/**: Toàn bộ các trường hợp còn lại (âm hữu thanh)!`;

p1 = p1.replace(t2Old, t2New);

// Update Topic 3 mnemonics in Phase 1 (5 nguyên âm UỂ OẢI)
const t3Old = `> 💡 **CHIẾN THUẬT LÀM BÀI CHO NGƯỜI MẤT GỐC:**`;
const t3New = `> 💡 **THẦN CHÚ NHỚ 5 NGUYÊN ÂM (QUY TẮC DÙNG MẠO TỪ AN / A):**
> 5 nguyên âm (vowels) trong tiếng Anh gồm: **A, E, I, O, U**.
> - **Thần chú 1:** **"UỂ OẢI"** (U - E - O - A - I)
> - **Thần chú 2:** **"Anh Em Ít Ở Không"** (A - E - I - O - U)
> 👉 Cứ từ nào bắt đầu phát âm bằng 5 nguyên âm này thì dùng mạo từ **AN** (*an apple, an elephant, an orange*).
>
> 💡 **CHIẾN THUẬT LÀM BÀI CHO NGƯỜI MẤT GỐC:**`;

p1 = p1.replace(t3Old, t3New);

// Update Topic 5 mnemonics in Phase 1 (OSASCOMP)
const t5Old = `> 💡 **MẸO PHÂN BIỆT NHANH TÍNH TỪ SỞ HỮU VS ĐẠI TỪ SỞ HỮU:**`;
const t5New = `> 💡 **THẦN CHÚ TRẬT TỰ TÍNH TỪ TRƯỚC DANH TỪ (OSASCOMP):**
> Khi có nhiều tính từ đứng trước một danh từ, thứ tự chuẩn quy định theo cụm **OSASCOMP**:
> - **O**pinion (Quan điểm): *beautiful, nice, lovely*
> - **S**ize (Kích cỡ): *big, small, tall*
> - **A**ge (Tuổi tác): *old, young, new*
> - **S**hape (Hình dáng): *round, square*
> - **C**olor (Màu sắc): *red, blue, black*
> - **O**rigin (Nguồn gốc): *Vietnamese, Japanese*
> - **M**aterial (Chất liệu): *leather, wooden, silk*
> - **P**urpose (Mục đích): *running (shoes), sleeping (bag)*
> 👉 **CÂU THẦN CHÚ BẤT HỦ:** **"Ông Sáu Ăn Súp Cua Ông Mập Phì"**
> *(Ví dụ: a beautiful small new round black Vietnamese leather bag)*
>
> 💡 **MẸO PHÂN BIỆT NHANH TÍNH TỪ SỞ HỮU VS ĐẠI TỪ SỞ HỮU:**`;

p1 = p1.replace(t5Old, t5New);

fs.writeFileSync(path.join(__dirname, 'phase1.js'), p1, 'utf8');
console.log('✅ Updated phase1.js successfully');

// 2. Process Phase 2
let p2 = replaceArrows(path.join(__dirname, 'phase2.js'));

// Update Topic 1 mnemonics in Phase 2 (Trạng từ tần suất)
const p2t1Old = `> 💡 **THẦN CHÚ PHỐI THÌ: HÀNH ĐỘNG ĐANG LÀM THÌ CÓ HÀNH ĐỘNG KHÁC XEN VÀO**`;
const p2t1New = `> 💡 **THẦN CHÚ NHỚ CÁC TRẠNG TỪ TẦN SUẤT (TỪ CAO XUỐNG THẤP):**
> Thứ tự các trạng từ tần suất từ 100% đến 0%:
> **Always (100%) → Usually (80%) → Often (60%) → Sometimes (30%) → Never (0%)**
> 👉 **THẦN CHÚ TIẾNG VIỆT:** **"Anh Uống Oẳn Tù Tì Sẽ Ngã"** (tương ứng: **A - U - O - S - N**)
>
> 💡 **THẦN CHÚ PHỐI THÌ: HÀNH ĐỘNG ĐANG LÀM THÌ CÓ HÀNH ĐỘNG KHÁC XEN VÀO**`;

p2 = p2.replace(p2t1Old, p2t1New);

fs.writeFileSync(path.join(__dirname, 'phase2.js'), p2, 'utf8');
console.log('✅ Updated phase2.js successfully');

// 3. Process Phase 3 & Phase 4
let p3 = replaceArrows(path.join(__dirname, 'phase3.js'));
fs.writeFileSync(path.join(__dirname, 'phase3.js'), p3, 'utf8');
console.log('✅ Updated phase3.js successfully');

let p4 = replaceArrows(path.join(__dirname, 'phase4.js'));
fs.writeFileSync(path.join(__dirname, 'phase4.js'), p4, 'utf8');
console.log('✅ Updated phase4.js successfully');

// 4. Re-generate seed_topics.json
require('./generate.js');
