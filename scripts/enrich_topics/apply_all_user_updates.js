const fs = require('fs');
const path = require('path');

function cleanText(str) {
  if (!str) return str;
  return str
    .replace(/\$\s*\\?rightarrow\s*\$/gi, '→')
    .replace(/\$\s*\\?to\s*\$/gi, '→')
    .replace(/\$\s*\\?→\s*\$/gi, '→')
    .replace(/\$\s*→\s*\$/gi, '→')
    .replace(/\\rightarrow/gi, '→')
    .replace(/\\to\b/gi, '→')
    .replace(/\\→/g, '→')
    .replace(/\$\s*\\?leftrightarrow\s*\$/gi, '↔')
    .replace(/\$\s*\\?↔\s*\$/gi, '↔')
    .replace(/\$\s*↔\s*\$/gi, '↔')
    .replace(/\\leftrightarrow/gi, '↔')
    .replace(/\$\s*([→↔])\s*\$/g, '$1');
}

// -------------------------------------------------------------
// 1. UPDATE PHASE 1
// -------------------------------------------------------------
const p1Path = path.join(__dirname, 'phase1.js');
let phase1 = require('./phase1');

phase1.forEach(topic => {
  topic.theory_md = cleanText(topic.theory_md);
  topic.examples = topic.examples.map(cleanText);
  topic.quiz.forEach(q => {
    q.question = cleanText(q.question);
    q.options = q.options.map(cleanText);
    q.explanation = cleanText(q.explanation);
  });
});

// Topic 1 Phase 1: Thần chú đuôi -ed (chọn 1 câu chuẩn nhất mỗi quy tắc)
phase1[0].theory_md = cleanText(`## 🌟 1. Bản chất cốt lõi (Hiểu tận gốc cho người mất gốc)

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

## 💬 3. Ví dụ minh họa & Phân tích chi tiết từng trường hợp

* **Ví dụ 1:** *watched* /wɒtʃt/ → Động từ gốc là *watch*, kết thúc bằng âm bật hơi /tʃ/ (âm vô thanh, cổ họng không rung), do đó đuôi -ed phát âm là **/t/**.
* **Ví dụ 2:** *wanted* /ˈwɒntɪd/ → Động từ gốc là *want*, kết thúc bằng chữ "t" (âm /t/), do đó đuôi -ed bắt buộc phát âm là **/ɪd/**.
* **Ví dụ 3:** *played* /pleɪd/ → Động từ gốc là *play*, kết thúc bằng nguyên âm đôi /eɪ/ (nguyên âm luôn rung cổ họng), do đó đuôi -ed phát âm là **/d/**.

---

> 💡 **THẦN CHÚ HACK NÃO NHỚ TRONG 5 GIÂY (DỄ THUỘC NHẤT):**
> 1. Đọc là **/ɪd/** (tận cùng bằng T hoặc D): Nhớ câu **"Tiền - Đô"** (T - D). Cứ thấy tận cùng bằng **T** hoặc **D** là khoanh ngay **/ɪd/**!
> 2. Đọc là **/t/** (tận cùng bằng: ch, p, f/ph/gh, s, k, sh, x, th): Nhớ câu **"Chính Phủ Phát Sách Không Cho Thuê"** (tương ứng: **CH - P - PH - S - KH - C - TH**).
> 3. Đọc là **/d/**: Toàn bộ các từ còn lại (âm hữu thanh và nguyên âm)!

---

> ⚠️ **CẠM BẪY ĐỀ THI THPTQG (90% HỌC SINH MẤT GỐC MẮC BẪY):**
> Trong đề thi thường xuyên gài các từ tận cùng bằng **-ed** nhưng đóng vai trò là **TÍNH TỪ ĐẶC BIỆT**. Các từ này luôn luôn phát âm là **/ɪd/** dù âm cuối là gì!
> - *naked* /ˈneɪkɪd/ (khỏa thân, trần trụi)
> - *wicked* /ˈwɪkɪd/ (độc ác, tinh quái)
> - *beloved* /bɪˈlʌvɪd/ (yêu dấu)
> - *sacred* /ˈseɪkrɪd/ (thiêng liêng)
> - *crooked* /ˈkrʊkɪd/ (cong queo)
> - *hatred* /ˈheɪtrɪd/ (lòng căm thù - danh từ)
> 👉 *Gặp các từ này trong bài trắc nghiệm phát âm thì khoanh ngay **/ɪd/** nhé!*`);

// Topic 2 Phase 1: Thần chú đuôi -s/-es (chọn 1 câu chuẩn nhất mỗi quy tắc)
phase1[1].theory_md = cleanText(`## 🌟 1. Bản chất vấn đề

Khi thêm **-s** hoặc **-es** vào danh từ số nhiều (ví dụ: *cats, boxes*) hoặc động từ ngôi thứ 3 số ít (ví dụ: *he runs, she watches*), người học mất gốc hay đọc bừa là /s/. Thực chất, đuôi này có **3 cách phát âm** cực kỳ rõ ràng và có logic tương tự đuôi -ed.

---

## 📊 2. Bảng quy tắc phát âm đuôi -s/-es chuẩn xác

| Cách đọc | Khi từ gốc kết thúc bằng âm | Ký hiệu âm IPA | Ví dụ phát âm chuẩn |
| :--- | :--- | :--- | :--- |
| **/ɪz/** | Các âm xuýt, âm rít gió (**s, z, ʃ, tʃ, dʒ, ʒ**) | /s/, /z/, /ʃ/, /tʃ/, /dʒ/ | *kisses* /ˈkɪsɪz/, *watches* /ˈwɒtʃɪz/, *boxes* /ˈbɒksɪz/, *bridges* /ˈbrɪdʒɪz/ |
| **/s/** | Các âm vô thanh (bật hơi, không rung cổ) | /p/, /t/, /k/, /f/, /θ/ | *stops* /stɒps/, *cats* /kæts/, *books* /bʊks/, *laughs* /lɑːfs/ |
| **/z/** | Các âm hữu thanh (rung cổ họng) và nguyên âm | Còn lại (/b/, /d/, /g/, /v/, /m/, /n/, nguyên âm...) | *dogs* /dɒɡz/, *pens* /penz/, *plays* /pleɪz/, *boys* /bɔɪz/ |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *books* /bʊks/ → Từ gốc *book* kết thúc bằng âm /k/ (âm vô thanh - "Kiến" trong "Thời Phong Kiến..."), nên đuôi -s đọc là **/s/**.
* **Ví dụ 2:** *watches* /ˈwɒtʃɪz/ → Từ gốc *watch* kết thúc bằng âm rít /tʃ/, bản thân đã xì gió nên khi thêm -es phải chèn âm /ɪ/ vào giữa thành **/ɪz/** để phát âm được.
* **Ví dụ 3:** *plays* /pleɪz/ → Từ gốc *play* kết thúc bằng nguyên âm /eɪ/ hữu thanh, nên đuôi -s đọc là **/z/**.

---

> 💡 **CÂU THẦN CHÚ "BẤT BẠI" DỄ THUỘC NHẤT:**
> 1. Đọc là **/ɪz/** (các từ tận cùng bằng: s, ss, ch, sh, x, z, ce, ge): Nhớ câu **"Sáu Chạy Xe Sh Zui Zẻ"** (tương ứng: **s, ch, x, sh, z, ge/ce**).
> 2. Đọc là **/s/** (các từ tận cùng bằng: f/ph/gh, t, k, p, th): Nhớ câu **"Thời Phong Kiến Phương Tây"** (tương ứng: **/θ/ (th), /p/, /k/, /f/ (gh/ph), /t/**).
> 3. Đọc là **/z/**: Toàn bộ các trường hợp còn lại (âm hữu thanh và nguyên âm)!

---

> ⚠️ **CẠM BẪY ĐỀ THI HAY GẶP:**
> - Chữ cái tận cùng là **-gh** hay **-ph** nhưng phát âm là **/f/** (như *laughs* /lɑːfs/, *photographs* /ˈfəʊtəɡrɑːfs/) → đuôi 's' phát âm là **/s/**.
> - Chữ cái tận cùng là **-ce**, **-se** như *places*, *houses*, *promises* → phát âm đuôi là **/ɪz/**.
> - Từ *clothes* (quần áo) phát âm là /kləʊðz/ hoặc /kləʊz/ (âm **/z/**, không đọc là /ɪz/).`);

// Topic 3 Phase 1: Thần chú 5 nguyên âm "UỂ OẢI" (chọn 1 câu duy nhất)
phase1[2].theory_md = cleanText(`## 🌟 1. Bản chất câu hỏi phát âm trong đề thi THPTQG

Dạng bài phát âm thường cho 4 từ gạch chân cùng 1 chữ cái (ví dụ gạch chân chữ **ch**, chữ **ea**, hoặc chữ **u**).
**Nguyên tắc vàng:** "Nhìn mặt chữ KHÔNG đoán được cách phát âm!"
Tiếng Anh không giống tiếng Việt; cùng một chữ viết có thể phát ra 3-4 âm thanh khác nhau tùy theo gốc từ (gốc Latinh, gốc Hy Lạp hay gốc Pháp).

---

## 📊 2. Các cặp âm "kinh điển" hay xuất hiện trong đề thi

| Chữ viết gạch chân | Các cách phát âm có thể gặp | Ví dụ từ vựng đề hay ra |
| :--- | :--- | :--- |
| **ch** | 1. **/tʃ/** (phổ biến) <br> 2. **/k/** (gốc Hy Lạp) <br> 3. **/ʃ/** (gốc Pháp) | - *chair, children, cheap* (/tʃ/) <br> - *chemistry, stomach, ache, school, choir* (/k/) <br> - *machine, chef, champagne* (/ʃ/) |
| **ea** | 1. **/iː/** (i dài) <br> 2. **/e/** (e ngắn) <br> 3. **/eɪ/** (âm êi) | - *meat, tea, seat, peace* (/iː/) <br> - *bread, head, dead, health, feather* (/e/) <br> - *break, steak, great* (/eɪ/) |
| **oo** | 1. **/ʊ/** (u ngắn) <br> 2. **/uː/** (u dài) <br> 3. **/ʌ/** (âm á) | - *book, look, foot, cook* (/ʊ/) <br> - *food, moon, cool, choose* (/uː/) <br> - *blood, flood* (/ʌ/ - bẫy cực mạnh!) |
| **th** | 1. **/θ/** (thè lưỡi không rung) <br> 2. **/ð/** (thè lưỡi RUNG) | - *think, thank, breath, healthy, path* (/θ/) <br> - *this, that, there, mother, breathe* (/ð/) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *chemistry* /ˈkemɪstri/ vs *chair* /tʃeə/ → Cùng viết là "ch" nhưng *chemistry* là từ mượn Hy Lạp nên đọc là **/k/**, trong khi *chair* đọc là **/tʃ/**.
* **Ví dụ 2:** *blood* /blʌd/ vs *book* /bʊk/ → Đa số chữ "oo" đọc là /uː/ hoặc /ʊ/, nhưng *blood* (máu) và *flood* (lũ lụt) lại đọc là âm **/ʌ/** (như chữ 'á' tiếng Việt).
* **Ví dụ 3:** *climb* /klaɪm/ → Chữ "b" đứng sau "m" ở cuối từ là **âm câm**, hoàn toàn không phát âm ra tiếng.

---

> 💡 **THẦN CHÚ NHỚ 5 NGUYÊN ÂM (QUY TẮC DÙNG MẠO TỪ AN / A):**
> 5 nguyên âm (vowels) trong tiếng Anh gồm: **A, E, I, O, U**.
> 👉 **THẦN CHÚ DUY NHẤT:** **"UỂ OẢI"** (tương ứng 5 chữ cái: **U - E - O - A - I**).
> - Cứ từ nào bắt đầu phát âm bằng 5 nguyên âm này thì dùng mạo từ **AN** (*an apple, an elephant, an orange, an umbrella, an hour*).
>
> 💡 **CHIẾN THUẬT LÀM BÀI CHO NGƯỜI MẤT GỐC:**
> 1. Không cần biết phát âm cả 4 từ! Bạn chỉ cần chắc chắn phát âm của **3 từ**, so sánh xem 2 từ nào giống nhau thì từ thứ 3 khác biệt chính là đáp án.
> 2. Chú ý các từ "quen mắt nhưng đọc lạ":
>    - *stomach* đọc là /ˈstʌmək/ (đuôi là /k/, không đọc là "stơ-mát-ch").
>    - *blood* (máu) và *flood* (lũ lụt) đọc là âm /ʌ/ ("blắt", "flắt").

---

> ⚠️ **CẠM BẪY ÂM CÂM (SILENT LETTERS):**
> Đề thi rất thích gài chữ viết xuất hiện nhưng phát âm là CÂM:
> - **Chữ b câm:** *climb* /klaɪm/, *doubt* /daʊt/, *debt* /det/, *plumber* /ˈplʌmə/.
> - **Chữ k câm:** *knife* /naɪf/, *know* /nəʊ/, *knee* /niː/.
> - **Chữ h câm:** *hour* /ˈaʊə/, *honest* /ˈɒnɪst/, *honor* /ˈɒnə/.
> - **Chữ p câm:** *psychology* /saɪˈkɒlədʒi/, *receipt* /rɪˈsiːt/.`);

// Topic 5 Phase 1: Danh từ, Đại từ + Mẹo Trật tự tính từ OSASCOMP & Tính từ đuôi -ED / -ING (Nhóm 3)
phase1[4].theory_md = cleanText(`## 🌟 1. Bản chất danh từ & đại từ trong câu tiếng Anh

- **Danh từ (Noun - N):** Là từ chỉ người, sự vật, địa điểm, khái niệm (*teacher, car, happiness*). Đóng vai trò làm Chủ ngữ (S) hoặc Tân ngữ (O).
- **Đại từ (Pronoun):** Là từ sinh ra để **"thay thế"** cho danh từ, giúp câu văn không bị lặp từ.
  *(Ví dụ: "Nam đi học. Cậu ấy (He) quên vở của mình (His)".)*

---

## 📊 2. Danh từ đếm được vs Không đếm được

| Tiêu chí | Danh từ ĐẾM ĐƯỢC (Countable) | Danh từ KHÔNG ĐẾM ĐƯỢC (Uncountable) |
| :--- | :--- | :--- |
| **Bản chất** | Đếm được bằng số 1, 2, 3... cái | Không đếm trực tiếp được (chất lỏng, khí, khái niệm trừu tượng) |
| **Số ít** | Dùng được với **a/an** (*a cat, an apple*) | **KHÔNG** dùng a/an (*không nói a water, an advice*) |
| **Số nhiều** | Thêm **-s/-es** (*cats, apples*) | **KHÔNG BAO GIỜ** thêm -s/-es (*water, money, information*) |
| **Chia động từ**| Động từ số ít hoặc số nhiều | **LUÔN LUÔN** đi với động từ số ít (V-s/-es, is, was) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Lan is smart. She studies hard.* → "She" là đại từ nhân xưng chủ ngữ thay thế cho danh từ "Lan" đứng trước để tránh lặp từ.
* **Ví dụ 2:** *This book is mine, not yours.* → "mine" là đại từ sở hữu (= my book), đứng độc lập một mình mà không cần danh từ đi sau.
* **Ví dụ 3:** *The movie was boring, so I felt bored.* → *boring* (-ING) diễn tả bản chất của bộ phim; *bored* (-ED) diễn tả cảm giác chán nản của người xem.

---

> 💡 **THẦN CHÚ TRẬT TỰ TÍNH TỪ TRƯỚC DANH TỪ (OSASCOMP):**
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
> 💡 **MẸO PHÂN BIỆT TÍNH TỪ ĐUÔI -ED VÀ -ING (CỰC KỲ DỄ NHỚ):**
> - **Đuôi -ING**: Dùng cho **BẢN CHẤT, ĐẶC ĐIỂM** của người/vật/sự việc (*The movie is boring, An interesting book, He is an annoying person*).
> - **Đuôi -ED**: Dùng cho **CẢM XÚC BỊ TÁC ĐỘNG** của con người (*I am bored, She is interested in art, We are excited*).
> 👉 *Quy tắc 3 giây:* Vật mang bản chất → **-ING**; Người bị cảm xúc chi phối → **-ED**!
>
> 💡 **MẸO PHÂN BIỆT NHANH TÍNH TỪ SỞ HỮU VS ĐẠI TỪ SỞ HỮU:**
> - **Tính từ sở hữu** (*my, your, his, her, their*) luôn cần **Danh từ đi kèm** (*my phone, her car*).
> - **Đại từ sở hữu** (*mine, yours, hers, theirs*) đứng **ĐỘC LẬP 1 MÌNH**, thay thế cho cả cụm (Tính từ sở hữu + N).
>   *Ví dụ:* "Your car is red, but **mine** ( = my car) is blue."

---

> ⚠️ **CẠM BẪY ĐỀ THI: CÁC TỪ HAY BỊ TƯỞNG NHẦM LÀ ĐẾM ĐƯỢC:**
> Trong tiếng Việt ta đếm được "một lời khuyên, một tin tức", nhưng trong tiếng Anh chúng là **DANH TỪ KHÔNG ĐẾM ĐƯỢC**:
> - *advice* (lời khuyên)
> - *news* (tin tức - có 's' nhưng là số ít!)
> - *information* (thông tin)
> - *furniture* (đồ đạc nội thất)
> - *baggage / luggage* (hành lý)`);

fs.writeFileSync(p1Path, 'module.exports = ' + JSON.stringify(phase1, null, 2) + ';\n', 'utf8');
console.log('✅ Phase 1 updated & cleaned successfully!');

// -------------------------------------------------------------
// 2. UPDATE PHASE 2
// -------------------------------------------------------------
const p2Path = path.join(__dirname, 'phase2.js');
let phase2 = require('./phase2');

phase2.forEach(topic => {
  topic.theory_md = cleanText(topic.theory_md);
  topic.examples = topic.examples.map(cleanText);
  topic.quiz.forEach(q => {
    q.question = cleanText(q.question);
    q.options = q.options.map(cleanText);
    q.explanation = cleanText(q.explanation);
  });
});

// Topic 1 Phase 2: CÁC THÌ TRONG TIẾNG ANH (12 THÌ & TRỤC THỜI GIAN + 8 THÌ TRỌNG ĐIỂM THPTQG)
phase2[0].theory_md = cleanText(`## 🌟 1. Bản đồ tổng thể 12 thì (Trục thời gian tư duy logic)

Trong tiếng Việt: *"Hôm qua tôi ăn, bây giờ tôi ăn, ngày mai tôi cũng ăn"*. Từ "ăn" giữ nguyên.
Nhưng trong tiếng Anh: **Mỗi mốc thời gian và trạng thái, động từ bắt buộc phải BIẾN HÌNH** (*eat → ate → will eat*).

### 🧭 Mẹo vẽ Trục thời gian (Hiểu bản chất 12 thì trong 1 nốt nhạc):
Hãy hình dung một Trục thời gian nằm ngang: **QUÁ KHỨ ↔ HIỆN TẠI ↔ TƯƠNG LAI**.
Tại mỗi mốc thời gian, hành động sẽ có đúng **4 trạng thái**:
1. **Đơn (Simple):** Diễn tả sự thật, thói quen hoặc hành động xảy ra chung chung.
2. **Tiếp diễn (Continuous):** Đang xảy ra ngay tại mốc đó → **LUÔN CÓ CÔNG THỨC: BE + V-ING**.
3. **Hoàn thành (Perfect):** Đã xảy ra và hoàn tất **TRƯỚC** mốc đó → **LUÔN CÓ CÔNG THỨC: HAVE / HAS / HAD + V3/ED**.
4. **Hoàn thành tiếp diễn (Perfect Continuous):** Bắt đầu trước mốc đó và kéo dài liên tục đến mốc đó → **HAVE / HAS / HAD + BEEN + V-ING**.

*(Ghép 3 Mốc x 4 Trạng thái = 12 Thì chuẩn xác, không bao giờ phải học vẹt từng công thức rời rạc!)*

---

## 📊 2. Bảng 8 thì "chắc chắn ra đề" trong kỳ thi THPT Quốc Gia

Đề thi THPTQG không chỉ hỏi 5 thì cơ bản mà **bắt buộc kiểm tra Quá khứ hoàn thành, Quá khứ tiếp diễn, Tương lai gần và Tương lai hoàn thành (câu điểm 8+, 9+)**:

| Thì (Tense) | Công thức Khẳng định | Dấu hiệu nhận biết điển hình | Ngữ cảnh thi cử trọng tâm |
| :--- | :--- | :--- | :--- |
| **Hiện tại đơn** | S + V(s/es) / am/is/are | *always, usually, often, every day* | Sự thật hiển nhiên, thói quen lặp đi lặp lại |
| **Hiện tại tiếp diễn** | S + **am/is/are + V-ing** | *now, at the moment, Look!, Listen!* | Đang diễn ra ngay lúc nói |
| **Hiện tại hoàn thành** | S + **have/has + V3/ed** | *since, for, already, yet, just, ever* | Bắt đầu từ quá khứ, kéo dài đến hiện tại |
| **Quá khứ đơn** | S + **V2/ed** / was/were | *yesterday, ago, last night, in 2020* | Đã xảy ra và ĐÃ CHẤM DỨT trong quá khứ |
| **Quá khứ tiếp diễn** | S + **was/were + V-ing** | *at 8 PM yesterday, at this time last year* | Đang diễn ra tại một thời điểm quá khứ |
| **Quá khứ hoàn thành** | S + **had + V3/ed** | *before, after, by the time + QKĐ* | Xảy ra và hoàn tất **TRƯỚC** một hành động quá khứ khác |
| **Tương lai đơn vs Gần** | Will + V vs Be going to + V | *tomorrow, next week, soon* | Quyết định tức thì (*will*) vs Có dự định/bằng chứng (*going to*) |
| **Tương lai hoàn thành** | S + **will have + V3/ed** | *By the end of..., By next month, By the time + HTĐ* | Sẽ hoàn tất **TRƯỚC** một mốc trong tương lai (Điểm 8+, 9+) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết từng dạng phối thì

* **Ví dụ 1 (Đang làm thì bị cắt ngang):** *When I arrived at the party, they were dancing.* → Họ đang khiêu vũ (*were dancing* - QKTD) thì tôi bất chợt bước vào (*arrived* - QKĐ xen vào).
* **Ví dụ 2 (Quá khứ hoàn thành - Trước và Sau):** *By the time the police arrived, the thief had escaped.* → Tên trộm đã tẩu thoát trước (*had escaped* - QKHT) rồi cảnh sát mới tới sau (*arrived* - QKĐ).
* **Ví dụ 3 (Tương lai hoàn thành - Câu bẫy điểm 9):** *By next July, we will have graduated from high school.* → Có cụm *By + mốc tương lai* (Trước tháng 7 tới), hành động tốt nghiệp sẽ hoàn tất xong xuôi → dùng *will have graduated*.

---

> 💡 **THẦN CHÚ TRẠNG TỪ TẦN SUẤT (TỪ CAO XUỐNG THẤP):**
> Thứ tự từ 100% xuống 0%: **Always → Usually → Often → Sometimes → Never**
> 👉 **THẦN CHÚ DUY NHẤT:** **"Anh Uống Oẳn Tù Tì Sẽ Ngã"** (tương ứng: **A - U - O - S - N**).
>
> 💡 **BÍ KÍP PHỐI THÌ KINH ĐIỂN PHÒNG THI THPTQG:**
> 1. **Cặp Xen Vào:** *While + Quá khứ tiếp diễn, Quá khứ đơn* (Đang làm việc dài thì việc ngắn chen ngang).
> 2. **Cặp Trước - Sau:**
>    - **Before / By the time + Quá khứ đơn, Quá khứ hoàn thành (had V3)**
>    - **After + Quá khứ hoàn thành (had V3), Quá khứ đơn (V2/ed)**
>    *(Việc xảy ra trước chia Had V3, việc xảy ra sau chia V2/ed!)*
> 3. **Cặp Mốc Thời Gian Với "BY":**
>    - **By + mốc Quá khứ** (ví dụ: *By 2010, By yesterday*) → Chia **Quá khứ hoàn thành (Had + V3)**.
>    - **By + mốc Tương lai** (ví dụ: *By next year, By tomorrow*) → Chia **Tương lai hoàn thành (Will have + V3)**.

---

> ⚠️ **CẠM BẪY ĐỀ THI: SINCE VÀ FOR:**
> - **SINCE + Mốc thời gian** (*since 2015, since last week, since I was a child*).
>   👉 *Công thức vàng đề thi:* **HTHT + SINCE + Quá khứ đơn** (*I have lived here since I was born.*)
> - **FOR + Khoảng thời gian** (*for 3 years, for a long time*).`);

phase2[0].examples = [
  "When I arrived, they were dancing. (Hành động đang diễn ra QKTD thì hành động khác xen vào QKĐ)",
  "By the time the police arrived, the thief had escaped. (Xảy ra trước chia QKHT: had + V3)",
  "By next month, I will have finished this course. (By + mốc tương lai chia Tương lai hoàn thành: will have + V3)"
];

phase2[0].quiz = [
  {
    question: "When the teacher came into the classroom, the students ______ a lot of noise.",
    options: ["are making", "were making", "made", "have made"],
    correct_index: 1,
    explanation: "Học sinh ĐANG làm ồn (were making - QKTD) thì giáo viên bước vào lớp (came - QKĐ xen vào)."
  },
  {
    question: "By the time we arrived at the cinema yesterday, the film ______.",
    options: ["started", "had started", "has started", "starts"],
    correct_index: 1,
    explanation: "Cấu trúc kinh điển: By the time + QKĐ (arrived), mệnh đề chính chia Quá khứ hoàn thành (had started) vì bộ phim đã bắt đầu TRƯỚC khi chúng tôi tới."
  },
  {
    question: "By the end of this year, she ______ in this company for ten years.",
    options: ["will work", "works", "will have worked", "worked"],
    correct_index: 2,
    explanation: "Có dấu hiệu 'By + mốc tương lai' (By the end of this year) → chia thì Tương lai hoàn thành: will have worked (sẽ hoàn tất trước mốc tương lai)."
  }
];

// Topic 2 Phase 2: SỰ HÒA HỢP CHỦ NGỮ - ĐỘNG TỪ (Nhóm 3)
phase2[1].theory_md = cleanText(`## 🌟 1. Bản chất cốt lõi: "Chủ ngữ nào - Động từ nấy"

Nguyên tắc cơ bản:
- **Chủ ngữ số ÍT → Động từ số ÍT** (*He plays, The cat is*).
- **Chủ ngữ số NHIỀU → Động từ số NHIỀU** (*They play, Cats are*).
Tuy nhiên, trong đề thi THPTQG, người ra đề sẽ "kéo dài" chủ ngữ bằng các cụm chêm xen để bạn nhìn nhầm danh từ đứng gần động từ nhất!

---

## 📊 2. Các quy tắc chia động từ đặc biệt buộc phải nhớ

| Cấu trúc Chủ ngữ | Quy tắc chia Động từ | Ví dụ minh họa |
| :--- | :--- | :--- |
| **S1 + as well as / together with / along with + S2** | Chia theo **S1** (Chủ ngữ đầu tiên - xa động từ) | *The teacher, together with his students, **is** coming.* (Chia theo The teacher - số ít) |
| **Either... or / Neither... nor / Not only... but also** | Chia theo **S2** (Chủ ngữ gần động từ nhất) | *Neither you nor he **knows** the truth.* (Chia theo he - số ít) |
| **Đại từ bất định:** *Everyone, Someone, Nobody, Each, Every...* | **LUÔN CHIA SỐ ÍT** | *Everyone in the room **was** silent.* |
| **Khoảng cách, Thời gian, Tiền bạc, Cân nặng** | **LUÔN CHIA SỐ ÍT** | *Ten miles **is** a long distance.* <br> *100 dollars **is** too expensive.* |
| **The + Tính từ** (chỉ 1 tập hợp người) | **LUÔN CHIA SỐ NHIỀU** | *The rich **are** not always happy.* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The teacher, together with her students, is visiting the museum.* → Cụm "together with her students" là phần bổ nghĩa chêm vào. Chủ ngữ chính là "The teacher" (số ít) nên động từ là *is*.
* **Ví dụ 2:** *Neither the manager nor his employees agree to the plan.* → Nối bằng "Neither... nor", động từ chia theo chủ ngữ gần nó nhất là "his employees" (số nhiều) → động từ nguyên mẫu *agree*.
* **Ví dụ 3:** *Every student in this school wears uniform.* → Đi với "Every", động từ luôn chia ở số ít → thêm -s (*wears*).

---

> 💡 **THẦN CHÚ "BÊN GẦN - BÊN XA" (MẸO NHỚ PHÒNG THI):**
> 1. **Nhóm chia theo CHỦ NGỮ GẦN ĐỘNG TỪ NHẤT:**
>    - Thấy liên từ kép: **Either... or / Neither... nor / Not only... but also** → Động từ chia theo danh từ **ngay sát cạnh nó**!
> 2. **Nhóm chia theo CHỦ NGỮ ĐẦU TIÊN (XA ĐỘNG TỪ):**
>    - Thấy các cụm chêm: **as well as, together with, along with, with, accompanied by** → Động từ chia theo danh từ **đứng trước dấu phẩy/đầu tiên**!
> 3. **Nhóm LUÔN LUÔN SỐ ÍT:**
>    - Cứ thấy **Each, Every, Everyone, Someone, Anyone, Nobody, Everything** → Tự động khoanh động từ **số ít** (*is, was, has, V-s/es*)!

---

> ⚠️ **CẠM BẪY ĐỀ THI: "A NUMBER OF" VS "THE NUMBER OF":**
> - **A number of + N số nhiều → ĐỘNG TỪ SỐ NHIỀU** (*A number of students **are** absent*).
> - **The number of + N số nhiều → ĐỘNG TỪ SỐ ÍT** (*The number of students **is** increasing*).
> 👉 *Mẹo nhớ:* **A** (viết tắt của **A**LL → Số nhiều) / **THE** (viết tắt của **THIỂU** → Số ít).`);

// Topic 3 Phase 2: TO V VS V-ING (Nhóm 3)
phase2[2].theory_md = cleanText(`## 🌟 1. Bản chất: Khi 2 động từ đi liền nhau

Trong câu tiếng Anh, khi một động từ đi theo sau một động từ khác, động từ thứ hai **KHÔNG THỂ** để dạng nguyên thể bừa bãi. Nó bắt buộc phải biến thành **To V** (To-infinitive) hoặc **V-ing** (Gerund).
Ví dụ: Ta không nói "I enjoy read", mà phải nói "I enjoy **reading**".

---

## 📊 2. Danh sách các động từ thông dụng nhất

| Nhóm | Các động từ điển hình cần thuộc lòng | Ví dụ minh họa |
| :--- | :--- | :--- |
| **Đi với V-ING** | *enjoy, avoid, mind, practice, suggest, consider, finish, admit, keep, deny* | - *She **enjoys reading** books.* <br> - *You should **avoid eating** fast food.* |
| **Đi với TO V** | *want, hope, decide, plan, promise, agree, refuse, afford, expect, intend* | - *He **decided to study** abroad.* <br> - *They **promised to help** us.* |
| **Đi với V-NGUYÊN THỂ (V-bare)** | Sau động từ khuyết thiếu (*can, must*) và cấu trúc: *make sb + V*, *let sb + V* | - *She **makes me laugh**.* <br> - *My parents **let me go** out.* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *I avoided meeting him at the supermarket.* → Động từ *avoid* (tránh né) bắt buộc theo sau là V-ing (*meeting*).
* **Ví dụ 2:** *He decided to take the intensive course.* → Động từ *decide* (quyết định hướng tới tương lai) bắt buộc đi với To V (*to take*).
* **Ví dụ 3:** *He stopped smoking because it was bad for his health.* → *Stop + V-ing* nghĩa là dừng hẳn, cai hẳn một thói quen.

---

> 💡 **MẸO NHỚ BẢN CHẤT CỰC KỲ THÚ VỊ:**
> - **Đi với TO V (Hướng tới tương lai):** Các động từ mang tính **dự định, kế hoạch, hy vọng, lựa chọn, hứa hẹn** (*want, decide, hope, plan, promise, expect, refuse, wish, intend*...) → Luôn đi với **TO V**!
> - **Đi với V-ING (Trải nghiệm & liên tục):** Các động từ mang tính **trải nghiệm, cảm xúc hiện tại, duy trì liên tục, thói quen** (*enjoy, avoid, practice, mind, consider, suggest, finish, keep, admit*...) → Luôn đi với **V-ING**!

---

## 💡 4. Các động từ đi với CẢ HAI nhưng ĐỔI NGHĨA HOÀN TOÀN

| Động từ | Đi với **TO V** (Chưa làm / Tương lai) | Đi với **V-ING** (Đã làm / Quá khứ) |
| :--- | :--- | :--- |
| **REMEMBER** | Nhớ **PHẢI LÀM** việc gì *(Remember to lock the door!)* | Nhớ **ĐÃ LÀM** việc gì *(I remember locking the door.)* |
| **FORGET** | Quên **PHẢI LÀM** việc gì *(Don't forget to do homework.)* | Quên việc **ĐÃ TỪNG LÀM** *(I'll never forget meeting her.)* |
| **STOP** | Dừng lại **ĐỂ LÀM** việc khác *(He stopped to smoke - dừng xe để hút)* | **DỪNG HẲN** việc đang làm *(He stopped smoking - cai hẳn thuốc)* |
| **TRY** | **CỐ GẮNG** làm việc khó *(I try to pass the exam.)* | **THỬ** làm việc gì xem sao *(Try adding some salt.)* |

---

> ⚠️ **CẠM BẪY "TO + V-ING":**
> Các cụm sau chữ "to" là **GIỚI TỪ** nên bắt buộc phải cộng **V-ING**:
> - *look forward to + V-ing* (mong đợi làm gì)
> - *be / get used to + V-ing* (quen với việc gì)
> - *object to + V-ing* (phản đối làm gì)`);

// Topic 5 Phase 2: CÂU BỊ ĐỘNG (Nhóm 1)
phase2[4].theory_md = cleanText(`## 🌟 1. Bản chất câu bị động: Khi nào dùng?

Khi ta muốn **nhấn mạnh vào đối tượng bị tác động** (thay vì người làm), hoặc **không biết ai làm**, ta dùng câu bị động.
- *Chủ động:* Con mèo ăn con cá (*The cat ate the fish*).
- *Bị động:* Con cá **bị ăn** bởi con mèo (*The fish **was eaten** by the cat*).

---

> 💡 **QUY TẮC VÀNG: "ĐỔI CHÉO + THÊM BE + V3/ED":**
> 1. **Đổi chéo:** Tân ngữ (O) của câu chủ động đưa lên làm **Chủ ngữ (S)** câu bị động; Chủ ngữ (S) câu chủ động biến thành **(by O)** đặt ở cuối.
> 2. **Thêm Be + V3/ed:** Động từ luôn chuyển về dạng **BE + V3/ed** (chia "Be" theo đúng thì và số ít/số nhiều của câu gốc).

---

## 📊 2. Bảng biến đổi BE + V3 theo từng thì

| Thì | Câu Chủ động (Active) | Câu Bị động (Passive = BE + V3) |
| :--- | :--- | :--- |
| **Hiện tại đơn** | S + V(s/es) + O | S + **am / is / are + V3/ed** + (by O) |
| **Hiện tại tiếp diễn** | S + am/is/are + V-ing + O | S + **am / is / are + BEING + V3/ed** |
| **Quá khứ đơn** | S + V2/ed + O | S + **was / were + V3/ed** + (by O) |
| **Hiện tại hoàn thành**| S + have/has + V3 + O | S + **have / has + BEEN + V3/ed** |
| **Quá khứ hoàn thành** | S + had + V3 + O | S + **had + BEEN + V3/ed** |
| **Tương lai đơn** | S + will + V + O | S + **will + BE + V3/ed** |
| **Modal Verbs** | S + can/must + V + O | S + **can / must + BE + V3/ed** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The house was built in 1995.* → Ngôi nhà được xây trong quá khứ nên to be chia là *was* + V3 *built*.
* **Ví dụ 2:** *The car is being washed now.* → Hành động đang diễn ra ở bị động: *is + being + washed*.
* **Ví dụ 3:** *I had my hair cut yesterday.* → Cấu trúc nhờ vả: *have something done (V3)*, tôi nhờ thợ cắt tóc cho mình chứ không tự cắt.

---

## 💡 4. Cấu trúc Nhờ vả (Causative Form: Have / Get)

- **HAVE somebody DO something → HAVE something DONE (V3)** (Nhờ ai làm gì → Có cái gì được làm).
- **GET somebody TO DO something → GET something DONE (V3)**.`);

// Topic 6 Phase 2: CÂU TRỰC TIẾP - GIÁN TIẾP (Nhóm 2)
phase2[5].theory_md = cleanText(`## 🌟 1. Bản chất: Tường thuật lại lời của người khác

Để chuyển từ câu trực tiếp sang gián tiếp, bạn chỉ cần ghi nhớ đúng một câu thần chú:

> 💡 **QUY TẮC VÀNG: "LÙI 1 THÌ - ĐỔI NGÔI - ĐỔI TRẠNG TỪ":**
> 1. **Lùi 1 thì:** Động từ lùi 1 bước về quá khứ (Hiện tại → Quá khứ, Quá khứ → Quá khứ hoàn thành).
> 2. **Đổi ngôi:** Đại từ nhân xưng thay đổi theo người nói và người nghe (*I → he/she, we → they, my → his/her*).
> 3. **Đổi trạng từ chỉ thời gian & nơi chốn:** Từ gần biến thành từ xa (*here → there, today → that day*).

---

## 📊 2. Bảng lùi thì & đổi trạng từ thần tốc

| Trực tiếp | Gián tiếp (Lùi 1 thì) | Trạng từ trực tiếp | Trạng từ gián tiếp |
| :--- | :--- | :--- | :--- |
| Hiện tại đơn (V1) | → **Quá khứ đơn (V2/ed)** | **now** | → **then** |
| Hiện tại tiếp diễn | → **Quá khứ tiếp diễn** | **today** | → **that day** |
| Quá khứ đơn (V2) | → **Quá khứ hoàn thành (had V3)** | **yesterday** | → **the previous day / the day before** |
| Hiện tại hoàn thành | → **Quá khứ hoàn thành (had V3)** | **tomorrow** | → **the following day / the next day** |
| **will / can** | → **would / could** | **this / here** | → **that / there** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Nam said: "I am tired today." → Nam said that he was tired that day.* Đổi ngôi "I" thành "he", lùi thì "am" thành "was", đổi "today" thành "that day".
* **Ví dụ 2:** *She asked me: "Do you like coffee?" → She asked me if I liked coffee.* Câu hỏi Yes/No mượn liên từ "if/whether", lùi thì "like" thành "liked".
* **Ví dụ 3:** *He asked: "Where do you live?" → He asked me where I lived.* Giữ nguyên từ để hỏi "where", đưa về dạng khẳng định S + V.

---

> ⚠️ **LƯU Ý SỐNG CÒN VỚI CÂU HỎI GIÁN TIẾP:**
> Trong câu gián tiếp, câu hỏi biến thành câu trần thuật: **TUYỆT ĐỐI KHÔNG ĐẢO TRỢ ĐỘNG TỪ LÊN TRƯỚC CHỦ NGỮ**, đưa về dạng khẳng định: **S + V**!`);

// Topic 7 Phase 2: MỆNH ĐỀ QUAN HỆ (Nhóm 2)
phase2[6].theory_md = cleanText(`## 🌟 1. Bản chất: Mệnh đề quan hệ dùng để làm gì?

Mệnh đề quan hệ sinh ra để **bổ nghĩa, làm rõ cho một danh từ** đứng ngay trước nó.
- *Tôi thích cô gái.* + *Cô gái ngồi cạnh tôi.* → Tôi thích cô gái **người mà** ngồi cạnh tôi (*I like the girl **who** sits next to me*).

---

> 💡 **THẦN CHÚ NHẬN BIẾT ĐẠI TỪ QUAN HỆ NHANH NHƯ CHỚP:**
> - **WHO + Động từ (V):** Thay cho người làm **Chủ ngữ**.
> - **WHOM + Chủ ngữ (S) + V:** Thay cho người làm **Tân ngữ**.
> - **WHICH:** Dùng cho **Vật, đồ vật, con vật** (làm cả Chủ ngữ và Tân ngữ).
> - **WHOSE + Danh từ:** Thay cho **Sở hữu**, luôn phải đi liền sau là một Danh từ (\`N1 + whose + N2\`).
> - **THAT:** Thay thế cho cả người và vật trong mệnh đề **KHÔNG CÓ DẤU PHẨY**.

---

## 📊 2. Bảng phân loại các Đại từ quan hệ cốt lõi

| Đại từ quan hệ | Thay thế cho | Công thức đi sau | Ví dụ minh họa |
| :--- | :--- | :--- | :--- |
| **WHO** | Người | **Who + V + O** | *The teacher **who** teaches us is very kind.* |
| **WHOM** | Người | **Whom + S + V** | *The girl **whom** you met yesterday is Lan.* |
| **WHICH** | Vật | **Which + V** hoặc **Which + S + V** | *The laptop **which** is on the desk is mine.* |
| **WHOSE** | Sở hữu | **Whose + Noun** | *The boy **whose** bike was stolen is crying.* |
| **THAT** | Người hoặc Vật | Đi trong câu **không dấu phẩy** | *The book **that** I bought is cheap.* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The girl who is singing on stage is my sister.* → "who" thay cho danh từ người "The girl" và làm chủ ngữ cho động từ *is singing*.
* **Ví dụ 2:** *The man whom you saw yesterday is my uncle.* → Sau chỗ trống là "you saw" (S + V) chỉ tân ngữ người → dùng *whom*.
* **Ví dụ 3:** *Mr. Nam, whose son won the scholarship, is proud.* → Giữa "Mr. Nam" và "son" là quan hệ sở hữu (con trai của ông Nam) nên dùng *whose*.

---

> ⚠️ **2 NGUYÊN TẮC BẤT DI BẤT DỊCH VỚI CHỮ "THAT":**
> 1. **KHÔNG DÙNG THAT sau DẤU PHẨY** (,).
> 2. **KHÔNG DÙNG THAT sau GIỚI TỪ** (*in that, of that* → SAI).`);

// Topic 10 Phase 2: CÂU ĐIỀU KIỆN & CÂU GIẢ ĐỊNH (Nhóm 2 & Nhóm 4)
phase2[9].theory_md = cleanText(`## 🌟 1. Bản chất câu điều kiện: Lùi thì theo mức độ thực tế

> 💡 **MẸO NHỚ: "LÙI THÌ THEO THỰC TẾ":**
> - **Loại 1 (Có thực ở hiện tại/tương lai):** Dùng thì **Hiện tại đơn**, vế kết quả có **Will / Can + V-bare**.
> - **Loại 2 (Trái thực tế ở hiện tại):** Lùi về **Quá khứ đơn** *(to be dùng WERE cho mọi ngôi)*, vế kết quả có **Would / Could + V-bare**.
> - **Loại 3 (Trái thực tế ở quá khứ):** Lùi về **Quá khứ hoàn thành (had + V3)**, vế kết quả có **Would + have + V3**.

---

## 📊 2. Bảng 3 loại câu điều kiện căn bản

| Loại | Mức độ thực tế | Mệnh đề IF | Mệnh đề Chính |
| :--- | :--- | :--- | :--- |
| **Loại 1** | Có thể xảy ra ở **Hiện tại / Tương lai** | **Hiện tại đơn (V1/s/es)** | **will / can + V-bare** |
| **Loại 2** | Giả định **KHÔNG CÓ THẬT ở HIỆN TẠI** | **Quá khứ đơn (V2/ed / were)** | **would / could + V-bare** |
| **Loại 3** | Giả định **KHÔNG CÓ THẬT ở QUÁ KHỨ** | **Quá khứ hoàn thành (had V3)** | **would + HAVE + V3** |

---

## 🌟 3. CÂU GIẢ ĐỊNH (SUBJUNCTIVE MOOD) - BÍ QUYẾT ĐIỂM 9

Câu giả định dùng để diễn tả mong muốn, yêu cầu, đề nghị khẩn thiết:
- **Các tính từ giả định:** *It is important / necessary / essential / urgent / vital that...*
- **Các động từ giả định:** *suggest, recommend, demand, insist, request, require that...*

> 💡 **MẸO NHỚ HACK NÃO: ĐỘNG TỪ SAU "THAT" LUÔN LÀ V-BARE!**
> Động từ ở mệnh đề sau **THAT** luôn luôn ở dạng **nguyên thể không chia (V-bare)** cho **TẤT CẢ các ngôi** (kể cả *he, she, it, số ít*):
> - *The doctor suggested that he **stop** smoking.* (Tuyệt đối KHÔNG chia "stops"!).
> - *It is essential that she **be** present at the meeting.* (To be giữ nguyên là "be"!).

---

## 💬 4. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *If it rains tomorrow, I will stay at home.* → Điều kiện loại 1 có thể xảy ra ở tương lai.
* **Ví dụ 2:** *If I were you, I would accept this job.* → Điều kiện loại 2 giả định trái ngược hiện tại (tôi không thể là bạn), to be luôn dùng *were*.
* **Ví dụ 3:** *It is important that everyone submit their report on time.* → Cấu trúc giả định: sau *that*, động từ *submit* để nguyên thể không chia.

---

> ⚠️ **CẠM BẪY VỚI "UNLESS" (TRỪ KHI):**
> **UNLESS = IF... NOT**. Vì *Unless* đã mang nghĩa phủ định, nên trong mệnh đề Unless **KHÔNG ĐƯỢC DÙNG PHỦ ĐỊNH (NOT)**!`);

fs.writeFileSync(p2Path, 'module.exports = ' + JSON.stringify(phase2, null, 2) + ';\n', 'utf8');
console.log('✅ Phase 2 updated & cleaned successfully!');

// -------------------------------------------------------------
// 3. UPDATE PHASE 3
// -------------------------------------------------------------
const p3Path = path.join(__dirname, 'phase3.js');
let phase3 = require('./phase3');

phase3.forEach(topic => {
  topic.theory_md = cleanText(topic.theory_md);
  topic.examples = topic.examples.map(cleanText);
  topic.quiz.forEach(q => {
    q.question = cleanText(q.question);
    q.options = q.options.map(cleanText);
    q.explanation = cleanText(q.explanation);
  });
});

// Topic 1 Phase 3: ĐẢO NGỮ (Nhóm 4)
phase3[0].theory_md = cleanText(`## 🌟 1. Bản chất: Đảo ngữ là gì?

Đảo ngữ là biện pháp tu từ bằng cách **đưa TRỢ ĐỘNG TỪ lên trước Chủ ngữ** nhằm mục đích **nhấn mạnh** hành động hoặc cảm xúc.
- *Câu bình thường:* I have never seen such a beautiful view.
- *Câu đảo ngữ:* **Never have I seen** such a beautiful view! (Chưa bao giờ tôi thấy cảnh đẹp như thế!).

---

> 💡 **MẸO NHỚ SIÊU TỐC: "COI CÂU ĐẢO NGỮ NHƯ CÂU HỎI YES/NO SAU TỪ PHỦ ĐỊNH":**
> Khi thấy từ phủ định đứng đầu câu (*Never, Rarely, Seldom, Hardly, Little, Not only...*), bạn chỉ cần đặt một câu hỏi Yes/No ngay phía sau từ đó!
> - Câu gốc: *I knew little about him.*
> - Đặt câu hỏi Yes/No quá khứ: *Did I know about him?*
> - Ghép lại thành câu đảo ngữ: **Little did I know about him!**
> - Câu gốc: *He had hardly arrived when it rained.*
> - Đặt câu hỏi Yes/No quá khứ hoàn thành: *Had he arrived?*
> - Ghép lại: **Hardly had he arrived when it rained!**

---

## 📊 2. Bảng 5 cấu trúc đảo ngữ "chắc chắn gặp" trong đề thi

| Dạng đảo ngữ | Cấu trúc công thức |
| :--- | :--- |
| **Từ phủ định đứng đầu** *(Never, Rarely, Seldom, Hardly)* | **Từ phủ định + Trợ động từ + S + V** |
| **Vừa mới... thì...** *(No sooner)* | **No sooner + HAD + S + V3 + THAN + S + V2/ed** |
| **Vừa mới... thì...** *(Hardly)* | **Hardly / Scarcely + HAD + S + V3 + WHEN + S + V2/ed** |
| **Không những... mà còn...** | **Not only + Trợ động từ + S + V, but S also V** |
| **Chỉ sau khi / Chỉ khi...** | **Only when / Only after + S + V, Trợ động từ + S + V** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Never have I witnessed such courage.* → Từ phủ định "Never" đứng đầu câu, trợ động từ "have" đảo lên trước chủ ngữ "I".
* **Ví dụ 2:** *No sooner had the bell rung than the students rushed out.* → Vừa mới rung chuông thì học sinh ùa ra: *No sooner had S V3 than S V2/ed*.
* **Ví dụ 3:** *Had you told me earlier, I could have helped you.* → Đảo ngữ câu điều kiện loại 3 (bỏ If, đảo *Had* lên trước chủ ngữ).

---

> 💡 **THẦN CHÚ "NO SOONER ĐI VỚI THAN - HARDLY ĐI VỚI WHEN":**
> - **No sooner** có đuôi so sánh hơn "-er" → So sánh hơn bắt buộc đi với **THAN** (*No sooner had S V3 THAN S V2/ed*).
> - **Hardly** luôn luôn đi cặp với **WHEN** (*Hardly had S V3 WHEN S V2/ed*).

---

## 💡 4. Đảo ngữ câu điều kiện (Bỏ IF)

- **Loại 1:** *Should + S + V-bare, S + will + V*
- **Loại 2:** *Were + S + (to V), S + would + V*
- **Loại 3:** *Had + S + V3, S + would have + V3*`);

fs.writeFileSync(p3Path, 'module.exports = ' + JSON.stringify(phase3, null, 2) + ';\n', 'utf8');
console.log('✅ Phase 3 updated & cleaned successfully!');

// -------------------------------------------------------------
// 4. UPDATE PHASE 4
// -------------------------------------------------------------
const p4Path = path.join(__dirname, 'phase4.js');
let phase4 = require('./phase4');

phase4.forEach(topic => {
  topic.theory_md = cleanText(topic.theory_md);
  topic.examples = topic.examples.map(cleanText);
  topic.quiz.forEach(q => {
    q.question = cleanText(q.question);
    q.options = q.options.map(cleanText);
    q.explanation = cleanText(q.explanation);
  });
});

fs.writeFileSync(p4Path, 'module.exports = ' + JSON.stringify(phase4, null, 2) + ';\n', 'utf8');
console.log('✅ Phase 4 updated & cleaned successfully!');
