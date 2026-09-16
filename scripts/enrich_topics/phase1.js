// Phase 1: Ngữ âm & Từ loại nền tảng (7 topics)
module.exports = [
  {
    order_index: 1,
    title: "Cách phát âm đuôi -ed",
    book1_ref: "Chuyên đề 1, Phần 1, tr.7-12 (đáp án tr.210-230)",
    book2_p1_ref: "Phần I, Chuyên đề 1, tr.12-19",
    book2_p2_ref: "Phần II, Chuyên đề 1, tr.141-146",
    theory_md: `## 🌟 1. Bản chất cốt lõi (Hiểu tận gốc cho người mất gốc)

Nhiều bạn học tiếng Anh hay đọc đuôi **-ed** như tiếng Việt (từ nào cũng đọc là "ít" hoặc "đờ"). Nhưng trong tiếng Anh, đuôi **-ed** biến đổi phát âm hoàn toàn dựa vào **âm thanh cuối cùng** của từ trước khi thêm -ed.

Tại sao lại có 3 cách đọc?
* Vì quy tắc tự nhiên của vòm họng: Nếu âm trước rung dây thanh quản, âm sau cũng phải rung (cho mượt). Nếu âm trước không rung (chỉ xì gió), âm sau cũng chỉ xì gió.

---

## 📊 2. Bảng 3 quy tắc vàng phát âm đuôi -ed

| Cách đọc | Quy tắc nhận biết | Âm cuối cùng của động từ gốc | Ví dụ phát âm chuẩn |
| :--- | :--- | :--- | :--- |
| **/ɪd/** | Tận cùng là **T** hoặc **D** | /t/, /d/ | *wanted* /ˈwɒntɪd/, *needed* /ˈniːdɪd/ |
| **/t/** | Tận cùng là **Âm vô thanh** (chỉ có gió, sờ cổ họng KHÔNG rung) | /p/, /k/, /f/, /s/, /ʃ/ (sh), /tʃ/ (ch), /θ/ | *stopped* /stɒpt/, *looked* /lʊkt/, *watched* /wɒtʃt/ |
| **/d/** | Tận cùng là **Âm hữu thanh & Nguyên âm** (sờ cổ họng RUNG) | Tất cả các âm còn lại (/b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/, v.v.) | *played* /pleɪd/, *cleaned* /kliːnd/, *loved* /lʌvd/ |

---

> 💡 **THẦN CHÚ HACK NÃO NHỚ TRONG 5 GIÂY:**
> 1. Đọc là **/ɪd/**: Nhớ câu **"Tiền - Đô"** (T - D). Cứ thấy tận cùng bằng **T** hoặc **D** là đọc **/ɪd/** ngay!
> 2. Đọc là **/t/**: Nhớ câu thần chú bất hủ **"Chính Phủ Phát Sách Không Cho Thuê"** (tương ứng với các âm: **ch, p, f/gh/ph, s/x/ce, k, ch, th**).
> 3. Đọc là **/d/**: Các từ còn lại không thuộc 2 nhóm trên!

---

> ⚠️ **CẠM BẪY ĐỀ THI THPTQG (90% HỌC SINH MẤT GỐC MẮC BẪY):**
> Trong đề thi thường xuyên gài các từ tận cùng bằng **-ed** nhưng đóng vai trò là **TÍNH TỪ ĐẶC BIỆT**. Các từ này luôn luôn phát âm là **/ɪd/** dù âm cuối là gì!
> - *naked* /ˈneɪkɪd/ (khỏa thân, trần trụi)
> - *wicked* /ˈwɪkɪd/ (độc ác, tinh quái)
> - *beloved* /bɪˈlʌvɪd/ (yêu dấu)
> - *sacred* /ˈseɪkrɪd/ (thiêng liêng)
> - *crooked* /ˈkrʊkɪd/ (cong queo)
> - *hatred* /ˈheɪtrɪd/ (lòng căm thù - danh từ)
> 👉 *Gặp các từ này trong bài trắc nghiệm phát âm thì khoanh ngay **/ɪd/** nhé!*

---

> 🎯 **THỬ THÁCH THỰC CHIẾN TẠI CHỖ:**
> **Câu 1:** Chọn từ có phần gạch chân phát âm khác:
> A. invited &nbsp;&nbsp;&nbsp;&nbsp; B. attended &nbsp;&nbsp;&nbsp;&nbsp; C. started &nbsp;&nbsp;&nbsp;&nbsp; D. liked
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: D**
> - **invite**, **attend**, **start** đều tận cùng bằng âm /t/ hoặc /d/ (Tiền - Đô) nên khi thêm -ed đọc là **/ɪd/**.
> - **like** tận cùng là âm /k/ (vô thanh - "Không") nên đuôi -ed đọc là **/t/**.
> Do đó đáp án D phát âm khác 3 từ còn lại!
> </details>`,
    examples: [
      "watched /wɒtʃt/ → đọc /t/ vì tận cùng là âm 'ch' vô thanh (Chính phủ...)",
      "wanted /ˈwɒntɪd/ → đọc /ɪd/ vì tận cùng là âm 't' (Tiền - Đô)",
      "played /pleɪd/ → đọc /d/ vì tận cùng là nguyên âm hữu thanh 'ay'"
    ]
  },
  {
    order_index: 2,
    title: "Cách phát âm đuôi -s/-es",
    book1_ref: "Chuyên đề 1, Phần 1, tr.7-12 (đáp án tr.210-230)",
    book2_p1_ref: "Phần I, Chuyên đề 1, tr.12-19",
    book2_p2_ref: "Phần II, Chuyên đề 1, tr.141-146",
    theory_md: `## 🌟 1. Bản chất vấn đề

Khi thêm **-s** hoặc **-es** vào danh từ số nhiều (ví dụ: *cats, boxes*) hoặc động từ ngôi thứ 3 số ít (ví dụ: *he runs, she watches*), người học mất gốc hay đọc bừa là /s/. Thực chất, đuôi này có **3 cách phát âm** cực kỳ rõ ràng và có logic tương tự đuôi -ed.

---

## 📊 2. Bảng quy tắc phát âm đuôi -s/-es chuẩn xác

| Cách đọc | Khi từ gốc kết thúc bằng âm | Ký hiệu âm IPA | Ví dụ phát âm chuẩn |
| :--- | :--- | :--- | :--- |
| **/ɪz/** | Các âm xuýt, âm rít gió (**s, z, ʃ, tʃ, dʒ, ʒ**) | /s/, /z/, /ʃ/, /tʃ/, /dʒ/ | *kisses* /ˈkɪsɪz/, *watches* /ˈwɒtʃɪz/, *boxes* /ˈbɒksɪz/, *bridges* /ˈbrɪdʒɪz/ |
| **/s/** | Các âm vô thanh (bật hơi, không rung cổ) | /p/, /t/, /k/, /f/, /θ/ | *stops* /stɒps/, *cats* /kæts/, *books* /bʊks/, *laughs* /lɑːfs/ |
| **/z/** | Các âm hữu thanh (rung cổ họng) và nguyên âm | Còn lại (/b/, /d/, /g/, /v/, /m/, /n/, nguyên âm...) | *dogs* /dɒɡz/, *pens* /penz/, *plays* /pleɪz/, *boys* /bɔɪz/ |

---

> 💡 **CÂU THẦN CHÚ "BẤT BẠI" DÀNH CHO HỌC SINH:**
> 1. Đọc là **/ɪz/**: Nhớ câu **"Sáu Chạy Xe Sh Zui Zẻ"** (tương ứng chữ cái cuối: **s, ch, x, sh, z, ge/ce**). Vì bản thân các từ này đã có âm xì, muốn thêm 's' vào thì phải chèn âm /ɪ/ vào giữa thành /ɪz/ mới phát âm được!
> 2. Đọc là **/s/**: Nhớ câu **"Thời Phong Kiến Phương Tây"** (tương ứng các âm: **/θ/ (th), /p/, /k/, /f/ (gh/ph), /t/**).
> 3. Đọc là **/z/**: Toàn bộ các trường hợp còn lại!

---

> ⚠️ **CẠM BẪY ĐỀ THI HAY GẶP:**
> - Chữ cái tận cùng là **-gh** hay **-ph** nhưng phát âm là **/f/** (như *laughs* /lɑːfs/, *photographs* /ˈfəʊtəɡrɑːfs/) → đuôi 's' phát âm là **/s/**.
> - Chữ cái tận cùng là **-ce**, **-se** như *places*, *houses*, *promises* → phát âm đuôi là **/ɪz/** (âm rít).
> - Từ *clothes* (quần áo) phát âm là /kləʊðz/ hoặc /kləʊz/ (âm **/z/**, không đọc là /ɪz/).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** Chọn từ có đuôi -s được phát âm là **/s/**:
> A. tables &nbsp;&nbsp;&nbsp;&nbsp; B. books &nbsp;&nbsp;&nbsp;&nbsp; C. watches &nbsp;&nbsp;&nbsp;&nbsp; D. oranges
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> - **book** kết thúc bằng âm /k/ ("Kiến" trong "Thời Phong Kiến Phương Tây") → đọc là **/s/**.
> - **tables** kết thúc bằng âm /l/ (hữu thanh) → đọc là **/z/**.
> - **watches** và **oranges** kết thúc bằng âm rít → đọc là **/ɪz/**.
> </details>`,
    examples: [
      "books /bʊks/ → đọc /s/ vì kết thúc là âm /k/ (Thời phong kiến...)",
      "watches /ˈwɒtʃɪz/ → đọc /ɪz/ vì kết thúc là âm /tʃ/ (Sáu chạy xe sh...)",
      "plays /pleɪz/ → đọc /z/ vì kết thúc là nguyên âm /eɪ/ hữu thanh"
    ]
  },
  {
    order_index: 3,
    title: "Nguyên âm & phụ âm khác biệt",
    book1_ref: "Chuyên đề 1, Phần 1, tr.7-12 (đáp án tr.210-230)",
    book2_p1_ref: "Phần I, Chuyên đề 1, tr.12-19",
    book2_p2_ref: "Phần II, Chuyên đề 1, tr.141-146",
    theory_md: `## 🌟 1. Bản chất câu hỏi phát âm trong đề thi THPTQG

Dạng bài phát âm thường cho 4 từ gạch chân cùng 1 chữ cái (ví dụ gạch chân chữ **ch**, chữ **ea**, hoặc chữ **u**).
**Nguyên tắc vàng:** "Nhìn mặt chữ KHÔNG đoán được cách phát âm!"
Tiếng Anh không giống tiếng Việt; cùng một chữ viết có thể phát ra 3-4 âm thanh khác nhau tùy theo gốc từ (gốc Latinh, gốc Hy Lạp hay gốc Pháp).

---

## 📊 2. Các cặp âm "kinh điển" hay xuất hiện trong đề thi

| Chữ viết gạch chân | Các cách phát âm có thể gặp | Ví dụ từ vựng đề hay ra |
| :--- | :--- | :--- |
| **ch** | 1. **/tʃ/** (phổ biến nhất) <br> 2. **/k/** (từ mượn Hy Lạp) <br> 3. **/ʃ/** (từ mượn tiếng Pháp) | - *chair, children, cheap* (/tʃ/) <br> - *chemistry, stomach, ache, school, choir* (/k/) <br> - *machine, chef, champagne* (/ʃ/) |
| **ea** | 1. **/iː/** (i dài) <br> 2. **/e/** (e ngắn) <br> 3. **/eɪ/** (âm êi) | - *meat, tea, seat, peace* (/iː/) <br> - *bread, head, dead, health, feather* (/e/) <br> - *break, steak, great* (/eɪ/) |
| **oo** | 1. **/ʊ/** (u ngắn) <br> 2. **/uː/** (u dài) <br> 3. **/ʌ/** (âm á) | - *book, look, foot, cook* (/ʊ/) <br> - *food, moon, cool, choose* (/uː/) <br> - *blood, flood* (/ʌ/ - bẫy cực mạnh!) |
| **th** | 1. **/θ/** (th thè lưỡi không rung) <br> 2. **/ð/** (th thè lưỡi RUNG) | - *think, thank, breath, healthy, path* (/θ/) <br> - *this, that, there, mother, breathe* (/ð/) |

---

> 💡 **CHIẾN THUẬT LÀM BÀI CHO NGƯỜI MẤT GỐC:**
> 1. Không cần biết phát âm cả 4 từ! Bạn chỉ cần chắc chắn phát âm của **3 từ**, so sánh xem 2 từ nào giống nhau thì từ thứ 3 khác biệt chính là đáp án.
> 2. Chú ý các từ "quen mắt nhưng đọc lạ":
>    - *stomach* đọc là /ˈstʌmək/ (đuôi là /k/, không đọc là "stơ-mát-ch").
>    - *blood* (máu) và *flood* (lũ lụt) đọc là âm /ʌ/ ("blắt", "flắt"), KHÔNG đọc là /uː/.

---

> ⚠️ **CẠM BẪY ÂM CÂM (SILENT LETTERS):**
> Đề thi rất thích gài chữ viết xuất hiện nhưng phát âm là CÂM (không đọc ra tiếng):
> - **Chữ b câm:** *climb* /klaɪm/, *doubt* /daʊt/, *debt* /det/, *plumber* /ˈplʌmə/ (người sửa ống nước).
> - **Chữ k câm:** *knife* /naɪf/, *know* /nəʊ/, *knee* /niː/.
> - **Chữ h câm:** *hour* /ˈaʊə/, *honest* /ˈɒnɪst/, *honor* /ˈɒnə/.
> - **Chữ p câm:** *psychology* /saɪˈkɒlədʒi/ (tâm lý học), *receipt* /rɪˈsiːt/ (hóa đơn).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** Chọn từ có phần gạch chân phát âm khác với 3 từ còn lại:
> A. head &nbsp;&nbsp;&nbsp;&nbsp; B. bread &nbsp;&nbsp;&nbsp;&nbsp; C. great &nbsp;&nbsp;&nbsp;&nbsp; D. heavy
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> - **head** /hed/, **bread** /bred/, **heavy** /ˈhevi/ đều có phần "ea" phát âm là **/e/**.
> - **great** /ɡreɪt/ có phần "ea" phát âm là **/eɪ/**.
> </details>`,
    examples: [
      "blood /blʌd/ vs book /bʊk/ → blood là bẫy âm /ʌ/ cực hay gặp",
      "chemistry /ˈkemɪstri/ vs chair /tʃeə/ → chữ 'ch' phát âm là /k/",
      "doubt /daʊt/ → chữ 'b' là âm câm hoàn toàn không phát âm"
    ]
  },
  {
    order_index: 4,
    title: "Quy tắc trọng âm",
    book1_ref: "Chuyên đề 1, Phần 2, tr.13-16 (đáp án tr.230)",
    book2_p1_ref: "Phần I, Chuyên đề 1, tr.12-19",
    book2_p2_ref: "Phần II, Chuyên đề 1, tr.141-146",
    theory_md: `## 🌟 1. Trọng âm là gì và tại sao tiếng Anh phải có trọng âm?

Trong tiếng Việt, mỗi từ có thanh điệu (sắc, huyền, hỏi, ngã, nặng). Tiếng Anh KHÔNG có dấu như tiếng Việt, nhưng thay vào đó nó dùng **TRỌNG ÂM (STRESS)**.
- Âm nào có trọng âm sẽ được đọc: **TO HƠN - CAO HƠN - DÀI HƠN**.
- Các âm còn lại đọc nhẹ, lướt và thường biến thành âm ngắn /ə/ hoặc /ɪ/.
Trong đề thi THPTQG luôn có **2 câu trọng âm** (1 câu từ 2 âm tiết, 1 câu từ 3 âm tiết) — đây là 0.4 điểm rất dễ lấy nếu thuộc quy tắc!

---

## 📊 2. Quy tắc trọng âm của từ 2 âm tiết (Cực dễ nhớ)

| Loại từ | Vị trí trọng âm | Ví dụ minh họa | Ngoại lệ thường gặp trong đề thi |
| :--- | :--- | :--- | :--- |
| **Danh từ (N) & Tính từ (Adj)** | Rơi vào **Âm tiết 1** | *'student, 'father, 'happy, 'clever, 'famous* | *ma'chine (n), a'lone (adj), mis'take (n)* |
| **Động từ (V)** | Rơi vào **Âm tiết 2** | *be'gin, de'cide, re'lax, at'tract, en'joy* | *'listen, 'open, 'happen, 'offer, 'answer* (âm 2 chứa âm /ə/) |

---

## 📊 3. Quy tắc trọng âm theo đuôi (Hậu tố - Ăn điểm tuyệt đối)

### Nhóm 1: Trọng âm rơi vào CHÍNH NÓ (Đuôi nặng)
Cứ nhìn thấy từ tận cùng bằng các đuôi này thì đánh trọng âm ngay vào chính nó:
- **-ee:** *train'ee, refug'ee, volunt'eer* (-eer)
- **-ese:** *Vietnam'ese, Japan'ese, Chin'ese*
- **-ique, -esque:** *un'ique, pictur'esque*

### Nhóm 2: Trọng âm rơi vào ÂM TIẾT NGAY TRƯỚC NÓ
- **-tion, -sion:** *edu'cation, de'cision, pol'lution*
- **-ic, -ical:** *his'toric, 'economic, fan'tastic*
- **-ious, -eous:** *de'licious, 'anxious, cou'rageous*
- **-ity, -ety:** *a'bility, so'ciety, activ'ity*

### Nhóm 3: Trọng âm dịch chuyển về ÂM THỨ 3 TỪ CUỐI LÊN
Áp dụng cho các từ tận cùng bằng: **-ate, -y, -ise/-ize, -cy, -phy, -gy**:
- *'calculate, com'municate, pho'tography, tech'nology, de'mocracy*

---

> 💡 **THẦN CHÚ VÀNG: NẮM NGUYÊN TẮC ÂM YẾU /ə/**
> Trọng âm **KHÔNG BAO GIỜ** rơi vào âm /ə/ (âm "ơ" ngắn) hoặc /i/ ngắn.
> - Ví dụ: từ *mother* /ˈmʌðər/ → âm 2 là /ə/ nên trọng âm chắc chắn rơi vào âm 1.
> - Từ *contain* /kənˈteɪn/ → âm 1 là /kən/ (chứa /ə/) nên trọng âm phải nhảy sang âm 2.

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** Chọn từ có vị trí trọng âm khác:
> A. decide &nbsp;&nbsp;&nbsp;&nbsp; B. provide &nbsp;&nbsp;&nbsp;&nbsp; C. listen &nbsp;&nbsp;&nbsp;&nbsp; D. repeat
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> - **decide**, **provide**, **repeat** đều là động từ 2 âm tiết trọng âm rơi vào **âm 2**.
> - **listen** /ˈlɪs.ən/ là động từ có âm thứ 2 là /ən/ (âm yếu /ə/) nên trọng âm rơi vào **âm 1**!
> </details>`,
    examples: [
      "'present (danh từ: món quà) vs pre'sent (động từ: thuyết trình) → trọng âm đổi nghĩa",
      "edu'cation → đuôi -tion kéo trọng âm về ngay trước nó (âm 'ca')",
      "Japan'ese → đuôi -ese nhận luôn trọng âm trên chính đuôi"
    ]
  },
  {
    order_index: 5,
    title: "Danh từ & Đại từ",
    book1_ref: "Chuyên đề 2, Phần 1 & 12, tr.18-22, 72-76",
    book2_p1_ref: "Phần I, Chuyên đề 7, tr.43-46",
    book2_p2_ref: "Phần II, Chuyên đề 13, tr.195-198",
    theory_md: `## 🌟 1. Bản chất danh từ & đại từ trong câu tiếng Anh

- **Danh từ (Noun - N):** Là từ chỉ người, sự vật, địa điểm, khái niệm (ví dụ: *teacher, car, happiness*). Đóng vai trò làm Chủ ngữ (S) hoặc Tân ngữ (O) trong câu.
- **Đại từ (Pronoun):** Là từ sinh ra để **"thay thế"** cho danh từ, giúp câu văn không bị lặp lại từ một cách ngớ ngẩn.
  *(Ví dụ: Thay vì nói "Nam đi học. Nam quên vở của Nam", ta dùng "Nam đi học. Cậu ấy (He) quên vở của mình (His)".)*

---

## 📊 2. Danh từ đếm được vs Không đếm được (Khái niệm sống còn)

| Tiêu chí | Danh từ ĐẾM ĐƯỢC (Countable) | Danh từ KHÔNG ĐẾM ĐƯỢC (Uncountable) |
| :--- | :--- | :--- |
| **Bản chất** | Đếm được bằng số 1, 2, 3... cái/chiếc | Không đếm trực tiếp được (chất lỏng, khí, hạt nhỏ, khái niệm trừu tượng) |
| **Số ít** | Dùng được với **a/an** (*a cat, an apple*) | **KHÔNG** dùng a/an (*không nói a water, an advice*) |
| **Số nhiều** | Thêm **-s/-es** (*cats, apples*) | **KHÔNG BAO GIỜ** thêm -s/-es (*water, money, information*) |
| **Chia động từ** | Đi với động từ số ít hoặc số nhiều | **LUÔN LUÔN** đi với động từ số ít (V-s/-es, is, was) |

> ⚠️ **CẠM BẪY ĐỀ THI: CÁC TỪ HAY BỊ TƯỞNG NHẦM LÀ ĐẾM ĐƯỢC:**
> Trong tiếng Việt ta đếm được "một lời khuyên, một tin tức, một thông tin", nhưng trong tiếng Anh chúng là **DANH TỪ KHÔNG ĐẾM ĐƯỢC**:
> - *advice* (lời khuyên)
> - *news* (tin tức - dù có chữ 's' nhưng là số ít!)
> - *information* (thông tin)
> - *furniture* (đồ đạc nội thất)
> - *baggage / luggage* (hành lý)
> 👉 Muốn đếm phải dùng cụm: *a piece of advice* (một lời khuyên).

---

## 📊 3. Bảng hệ thống Đại từ tiếng Anh (Bắt buộc phải thuộc)

| Đại từ nhân xưng (Chủ ngữ - S) | Đại từ tân ngữ (Đứng sau V/Giới từ) | Tính từ sở hữu (+ Danh từ) | Đại từ sở hữu (Đứng 1 mình) | Đại từ phản thân (Chính ai đó) |
| :---: | :---: | :---: | :---: | :---: |
| **I** (tôi) | **me** | **my** + N | **mine** | **myself** |
| **You** (bạn) | **you** | **your** + N | **yours** | **yourself / yourselves** |
| **He** (anh ấy) | **him** | **his** + N | **his** | **himself** |
| **She** (cô ấy) | **her** | **her** + N | **hers** | **herself** |
| **It** (nó) | **it** | **its** + N | **its** | **itself** |
| **We** (chúng tôi) | **us** | **our** + N | **ours** | **ourselves** |
| **They** (họ) | **them** | **their** + N | **theirs** | **themselves** |

---

> 💡 **MẸO PHÂN BIỆT NHANH TÍNH TỪ SỞ HỮU VS ĐẠI TỪ SỞ HỮU:**
> - **Tính từ sở hữu** (*my, your, his, her, their*) như "đứa trẻ sơ sinh" — **luôn cần mẹ đi kèm** (tức là luôn phải có 1 Danh từ đứng sau: *my phone, her car*).
> - **Đại từ sở hữu** (*mine, yours, hers, theirs*) như "người trưởng thành" — **đứng độc lập 1 mình**, thay thế cho cả cụm (Tính từ sở hữu + N).
>   *Ví dụ:* "Your car is red, but **mine** ( = my car) is blue."

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** Điền từ thích hợp vào chỗ trống: "The news about the accident ______ very shocking."
> A. were &nbsp;&nbsp;&nbsp;&nbsp; B. are &nbsp;&nbsp;&nbsp;&nbsp; C. was &nbsp;&nbsp;&nbsp;&nbsp; D. have been
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> **News** (tin tức) là danh từ không đếm được dù có đuôi 's' ở cuối! Vì vậy động từ theo sau phải chia ở số ít (**was**).
> </details>`,
    examples: [
      "Lan is intelligent. She (đại từ chủ ngữ) always helps me (đại từ tân ngữ).",
      "This is your laptop, and that one is mine (= my laptop - đại từ sở hữu).",
      "The news was (số ít) very surprising to everyone."
    ]
  },
  {
    order_index: 6,
    title: "Từ hạn định & Lượng từ",
    book1_ref: "Chuyên đề 2, Phần 10, tr.62-66",
    book2_p1_ref: "Phần I, Chuyên đề 12, tr.62-63",
    book2_p2_ref: "Phần II, các chuyên đề liên quan đến danh từ/lượng từ",
    theory_md: `## 🌟 1. Bản chất lượng từ (Quantifiers)

Lượng từ là những từ dùng để chỉ **số lượng ít hay nhiều** của người hoặc vật (ví dụ: *nhiều, một ít, một vài, tất cả, không có gì*).
Người mất gốc thường mất điểm ở phần này vì không phân biệt được từ nào đi với **danh từ đếm được**, từ nào đi với **danh từ không đếm được**.

---

## 📊 2. Bảng phân loại lượng từ kinh điển

| Ý nghĩa | Đi với Danh từ đếm được số nhiều | Đi với Danh từ KHÔNG đếm được | Đi được với CẢ HAI |
| :--- | :--- | :--- | :--- |
| **Nhiều** | **Many** (*many students*) | **Much** (*much time*) | **A lot of / Lots of / Plenty of** |
| **Một ít, một vài** | **A few** (*a few books*) | **A little** (*a little money*) | **Some** (câu khẳng định) / **Any** (phủ định, nghi vấn) |
| **Hầu như không có** | **Few** (*few friends*) | **Little** (*little water*) | **Hardly any** |
| **Mỗi / Mọi** | **Every / Each** (+ N số ít) | ❌ Không dùng | **All** (+ N số nhiều hoặc N không đếm được) |

---

## 💡 3. Tuyệt chiêu phân biệt: A FEW vs FEW và A LITTLE vs LITTLE

Đây là bẫy câu hỏi thường xuyên xuất hiện trong đề thi THPTQG:

| Cặp từ | Có chữ "A" (A few / A little) | KHÔNG có "A" (Few / Little) |
| :--- | :--- | :--- |
| **Nghĩa** | **Một ít, một vài (Đủ dùng, mang nghĩa TÍCH CỰC)** | **Rất ít, hầu như không có (Thiếu thốn, mang nghĩa TIÊU CỰC)** |
| **Ví dụ** | - *I have **a few friends**, so we often hang out.* (Tôi có vài người bạn, đủ vui) <br> - *I have **a little money**, enough for coffee.* (Còn ít tiền, đủ uống cà phê) | - *He has **few friends**, so he is very lonely.* (Gần như không có bạn, nên rất cô đơn) <br> - *I have **little money**, I can't buy food.* (Hết tiền rồi, không mua nổi cơm) |

> 💡 **THẦN CHÚ NHỚ NHANH:**
> - **CÓ "A" là CÒN** (còn đủ dùng - vui vẻ 😊)
> - **MẤT "A" là MẤT** (mất sạch, hầu như không còn - buồn bã 😢)

---

> ⚠️ **LƯU Ý ĐẶC BIỆT VỚI SOME VÀ ANY:**
> - **SOME** dùng trong câu **Khẳng định** (*I have some books.*) hoặc **Lời mời/đề nghị lịch sự**:
>   *Would you like **some** tea?* (Mời uống trà - dùng SOME chứ không dùng ANY).
> - **ANY** dùng trong câu **Phủ định** (*I don't have any money.*) hoặc **Nghi vấn** (*Do you have any questions?*).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "Don't worry, we still have ______ time left before the train leaves."
> A. few &nbsp;&nbsp;&nbsp;&nbsp; B. a few &nbsp;&nbsp;&nbsp;&nbsp; C. little &nbsp;&nbsp;&nbsp;&nbsp; D. a little
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: D**
> - **time** (thời gian) là danh từ không đếm được → loại A và B (chỉ đi với N đếm được).
> - Vế đầu bảo "Đừng lo" (Don't worry) tức là thời gian **vẫn còn đủ** mang nghĩa tích cực → chọn **a little** (CÓ 'A' LÀ CÒN ĐỦ).
> </details>`,
    examples: [
      "I have a few questions to ask the teacher. (Một vài câu hỏi - đếm được)",
      "He has little patience with children. (Hầu như không có kiên nhẫn - không đếm được)",
      "Would you like some coffee? (Lời mời lịch sự dùng 'some')"
    ]
  },
  {
    order_index: 7,
    title: "Tiền tố & Hậu tố",
    book1_ref: "Chuyên đề 2, Phần 11, tr.67-71",
    book2_p1_ref: "Phần I, Chuyên đề 20, tr.93",
    book2_p2_ref: "Phần II, Chuyên đề 24, tr.237-242",
    theory_md: `## 🌟 1. Bản chất: Cỗ máy sản xuất từ vựng của tiếng Anh

Bạn không cần học thuộc vẹt 10.000 từ vựng riêng lẻ! Chỉ cần biết **gốc từ (root)** kết hợp với **Tiền tố (Prefix)** và **Hậu tố (Suffix)**, bạn có thể đoán nghĩa và dạng từ của hàng ngàn từ mới:
- **Tiền tố (Prefix):** Thêm vào **ĐẦU** từ $\\rightarrow$ Thay đổi **NGHĨA** của từ (thường tạo từ trái nghĩa).
- **Hậu tố (Suffix):** Thêm vào **CUỐI** từ $\\rightarrow$ Thay đổi **TỪ LOẠI** (biến Động từ thành Danh từ, Tính từ thành Trạng từ).

---

## 📊 2. Các Tiền tố phủ định phổ biến nhất (Mang nghĩa KHÔNG)

| Tiền tố | Quy tắc ghép âm | Ví dụ minh họa |
| :--- | :--- | :--- |
| **un-** | Ghép rộng rãi nhất | *happy $\\rightarrow$ unhappy* (bất hạnh), *fair $\\rightarrow$ unfair* (bất công) |
| **im-** | Thường đứng trước từ bắt đầu bằng **m, p** (Mẹo: **Mẹ Phải**) | *possible $\\rightarrow$ impossible* (bất khả thi), *patient $\\rightarrow$ impatient* (mất kiên nhẫn) |
| **in-** | Đứng trước từ gốc Latinh | *correct $\\rightarrow$ incorrect* (sai), *dependent $\\rightarrow$ independent* (độc lập) |
| **il-** | Đứng trước từ bắt đầu bằng **l** | *legal $\\rightarrow$ illegal* (bất hợp pháp), *logical $\\rightarrow$ illogical* (phi logic) |
| **ir-** | Đứng trước từ bắt đầu bằng **r** | *regular $\\rightarrow$ irregular* (bất quy tắc), *responsible $\\rightarrow$ irresponsible* (vô trách nhiệm) |
| **dis-** | Mang nghĩa không hoặc đảo ngược | *agree $\\rightarrow$ disagree* (không đồng ý), *appear $\\rightarrow$ disappear* (biến mất) |
| **mis-** | Mang nghĩa nhầm, sai | *understand $\\rightarrow$ misunderstand* (hiểu lầm), *lead $\\rightarrow$ mislead* (dẫn dắt sai) |

---

## 📊 3. Các Hậu tố nhận diện từ loại (Ăn điểm bài Cấu tạo từ)

| Hậu tố | Từ loại tạo thành | Ví dụ minh họa |
| :--- | :--- | :--- |
| **-tion, -sion, -ment, -ness, -ity, -ance, -ence** | **Danh từ (Noun)** | *development, pollution, kindness, ability, importance* |
| **-ful, -less, -ous, -ive, -able, -al, -ic** | **Tính từ (Adjective)** | *careful, careless, dangerous, active, comfortable, natural* |
| **-ly** | **Trạng từ (Adverb)** = Adj + ly | *quick $\\rightarrow$ quickly, careful $\\rightarrow$ carefully* |
| **-ize / -ise, -en, -ify** | **Động từ (Verb)** | *short $\\rightarrow$ shorten (rút ngắn), modern $\\rightarrow$ modernize (hiện đại hóa)* |

---

> 💡 **THẦN CHÚ PHÂN BIỆT ĐUÔI -FUL VÀ -LESS:**
> - **-FUL** = Full (đầy đủ): *hopeful* (đầy hy vọng), *careful* (cẩn thận).
> - **-LESS** = Loss/Không có (thiếu): *hopeless* (vô vọng), *careless* (bất cẩn), *homeless* (vô gia cư).

---

> ⚠️ **CẠM BẪY ĐUÔI -LY KHÔNG PHẢI LÚC NÀO CŨNG LÀ TRẠNG TỪ:**
> Đề thi rất hay bẫy các **TÍNH TỪ CÓ ĐUÔI -LY** (được tạo bởi Danh từ + ly):
> - *friendly* (thân thiện - Tính từ, không phải trạng từ!)
> - *lovely* (đáng yêu)
> - *costly* (đắt đỏ)
> - *lonely* (cô đơn)
> - *silly* (ngốc nghếch)
> 👉 *Muốn dùng trạng từ của friendly phải nói: "in a friendly manner/way".*

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "It is ______ to drive when you are feeling extremely sleepy."
> A. danger &nbsp;&nbsp;&nbsp;&nbsp; B. dangerous &nbsp;&nbsp;&nbsp;&nbsp; C. dangerously &nbsp;&nbsp;&nbsp;&nbsp; D. endanger
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Cấu trúc: *It is + Adj + to V* (Thật là thế nào khi làm gì).
> Ta cần một **Tính từ**. Nhìn vào các hậu tố:
> - **danger** (n)
> - **dangerous** (-ous là đuôi Tính từ $\\rightarrow$ CHỌN)
> - **dangerously** (-ly là Trạng từ)
> - **endanger** (en- là Tiền tố tạo Động từ).
> </details>`,
    examples: [
      "happy (adj) → unhappy (adj trái nghĩa) → happiness (danh từ)",
      "care (v) → careful (adj cẩn thận) → careless (adj bất cẩn) → carefully (adv)",
      "friendly is an adjective, NOT an adverb (He gave us a friendly smile)"
    ]
  }
];
