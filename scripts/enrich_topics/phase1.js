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

## 💬 3. Ví dụ minh họa & Phân tích chi tiết từng trường hợp

* **Ví dụ 1:** *watched* /wɒtʃt/ $\\rightarrow$ Động từ gốc là *watch*, kết thúc bằng âm bật hơi /tʃ/ (âm vô thanh, cổ họng không rung), do đó đuôi -ed phát âm là **/t/**.
* **Ví dụ 2:** *wanted* /ˈwɒntɪd/ $\\rightarrow$ Động từ gốc là *want*, kết thúc bằng chữ "t" (âm /t/), do đó đuôi -ed bắt buộc phát âm là **/ɪd/**.
* **Ví dụ 3:** *played* /pleɪd/ $\\rightarrow$ Động từ gốc là *play*, kết thúc bằng nguyên âm đôi /eɪ/ (nguyên âm luôn rung cổ họng), do đó đuôi -ed phát âm là **/d/**.

---

> 💡 **THẦN CHÚ HACK NÃO NHỚ TRONG 5 GIÂY:**
> 1. Đọc là **/ɪd/**: Nhớ câu **"Tiền - Đô"** (T - D). Cứ thấy tận cùng bằng **T** hoặc **D** là đọc **/ɪd/** ngay!
> 2. Đọc là **/t/**: Nhớ câu thần chú bất hủ **"Chính Phủ Phát Sách Không Cho Thuê"** (tương ứng với các âm: **ch, p, f/gh/ph, s/x/ce, k, ch, th**).
> 3. Đọc là **/d/**: Toàn bộ các từ còn lại không thuộc 2 nhóm trên!

---

> ⚠️ **CẠM BẪY ĐỀ THI THPTQG (90% HỌC SINH MẤT GỐC MẮC BẪY):**
> Trong đề thi thường xuyên gài các từ tận cùng bằng **-ed** nhưng đóng vai trò là **TÍNH TỪ ĐẶC BIỆT**. Các từ này luôn luôn phát âm là **/ɪd/** dù âm cuối là gì!
> - *naked* /ˈneɪkɪd/ (khỏa thân, trần trụi)
> - *wicked* /ˈwɪkɪd/ (độc ác, tinh quái)
> - *beloved* /bɪˈlʌvɪd/ (yêu dấu)
> - *sacred* /ˈseɪkrɪd/ (thiêng liêng)
> - *crooked* /ˈkrʊkɪd/ (cong queo)
> - *hatred* /ˈheɪtrɪd/ (lòng căm thù - danh từ)
> 👉 *Gặp các từ này trong bài trắc nghiệm phát âm thì khoanh ngay **/ɪd/** nhé!*`,
    examples: [
      "watched /wɒtʃt/ → đọc /t/ vì tận cùng là âm 'ch' vô thanh (Chính phủ...)",
      "wanted /ˈwɒntɪd/ → đọc /ɪd/ vì tận cùng là âm 't' (Tiền - Đô)",
      "played /pleɪd/ → đọc /d/ vì tận cùng là nguyên âm hữu thanh 'ay'"
    ],
    quiz: [
      {
        question: "Chọn từ có phần gạch chân -ed phát âm khác với các từ còn lại:",
        options: ["invited", "attended", "started", "liked"],
        correct_index: 3,
        explanation: "invited, attended, started đều kết thúc bằng âm /t/ hoặc /d/ ('Tiền - Đô') nên đuôi -ed đọc là /ɪd/. Riêng liked kết thúc bằng âm /k/ (vô thanh) nên đuôi -ed đọc là /t/."
      },
      {
        question: "Chọn từ có đuôi -ed được phát âm là /t/:",
        options: ["played", "stopped", "cleaned", "opened"],
        correct_index: 1,
        explanation: "stopped kết thúc bằng âm /p/ ('Phát' trong 'Chính Phủ Phát Sách Không Cho Thuê') nên đuôi -ed đọc là /t/. Các từ còn lại tận cùng bằng âm hữu thanh nên đọc là /d/."
      },
      {
        question: "Từ nào sau đây là TÍNH TỪ ĐẶC BIỆT có đuôi -ed phát âm là /ɪd/?",
        options: ["looked", "naked", "worked", "helped"],
        correct_index: 1,
        explanation: "naked /ˈneɪkɪd/ là tính từ đặc biệt bắt buộc phát âm là /ɪd/. Các từ looked, worked, helped đều có đuôi -ed phát âm là /t/ theo quy tắc âm vô thanh."
      }
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

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *books* /bʊks/ $\\rightarrow$ Từ gốc *book* kết thúc bằng âm /k/ (âm vô thanh - "Kiến" trong "Thời Phong Kiến..."), nên đuôi -s đọc là **/s/**.
* **Ví dụ 2:** *watches* /ˈwɒtʃɪz/ $\\rightarrow$ Từ gốc *watch* kết thúc bằng âm rít /tʃ/, bản thân đã xì gió nên khi thêm -es phải chèn âm /ɪ/ vào giữa thành **/ɪz/** để phát âm được.
* **Ví dụ 3:** *plays* /pleɪz/ $\\rightarrow$ Từ gốc *play* kết thúc bằng nguyên âm /eɪ/ hữu thanh, nên đuôi -s đọc là **/z/**.

---

> 💡 **CÂU THẦN CHÚ "BẤT BẠI" DÀNH CHO HỌC SINH:**
> 1. Đọc là **/ɪz/**: Nhớ câu **"Sáu Chạy Xe Sh Zui Zẻ"** (tương ứng chữ cái cuối: **s, ch, x, sh, z, ge/ce**).
> 2. Đọc là **/s/**: Nhớ câu **"Thời Phong Kiến Phương Tây"** (tương ứng các âm: **/θ/ (th), /p/, /k/, /f/ (gh/ph), /t/**).
> 3. Đọc là **/z/**: Toàn bộ các trường hợp còn lại!

---

> ⚠️ **CẠM BẪY ĐỀ THI HAY GẶP:**
> - Chữ cái tận cùng là **-gh** hay **-ph** nhưng phát âm là **/f/** (như *laughs* /lɑːfs/, *photographs* /ˈfəʊtəɡrɑːfs/) $\\rightarrow$ đuôi 's' phát âm là **/s/**.
> - Chữ cái tận cùng là **-ce**, **-se** như *places*, *houses*, *promises* $\\rightarrow$ phát âm đuôi là **/ɪz/**.
> - Từ *clothes* (quần áo) phát âm là /kləʊðz/ hoặc /kləʊz/ (âm **/z/**, không đọc là /ɪz/).`,
    examples: [
      "books /bʊks/ → đọc /s/ vì kết thúc là âm /k/ (Thời phong kiến...)",
      "watches /ˈwɒtʃɪz/ → đọc /ɪz/ vì kết thúc là âm /tʃ/ (Sáu chạy xe sh...)",
      "plays /pleɪz/ → đọc /z/ vì kết thúc là nguyên âm /eɪ/ hữu thanh"
    ],
    quiz: [
      {
        question: "Chọn từ có đuôi -s được phát âm là /s/:",
        options: ["tables", "books", "watches", "oranges"],
        correct_index: 1,
        explanation: "book kết thúc bằng âm /k/ ('Kiến' trong 'Thời Phong Kiến Phương Tây') nên đuôi -s đọc là /s/. Tables đọc là /z/, watches và oranges đọc là /ɪz/."
      },
      {
        question: "Từ nào sau đây có đuôi -es phát âm là /ɪz/?",
        options: ["boxes", "pens", "cats", "doors"],
        correct_index: 0,
        explanation: "box kết thúc bằng chữ 'x' (âm /ks/ - âm rít trong 'Sáu Chạy Xe Sh Zui Zẻ') nên khi thêm -es đọc là /ɪz/. Pens và doors đọc là /z/, cats đọc là /s/."
      },
      {
        question: "Chọn từ có phần gạch chân phát âm khác: laughs, stops, coughs, bags",
        options: ["laughs", "stops", "coughs", "bags"],
        correct_index: 3,
        explanation: "laughs và coughs có đuôi 'gh' phát âm là /f/, stop kết thúc bằng /p/ → cả 3 từ đều đọc đuôi -s là /s/. Riêng bags kết thúc bằng âm /g/ hữu thanh nên đuôi -s đọc là /z/."
      }
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
| **ch** | 1. **/tʃ/** (phổ biến) <br> 2. **/k/** (gốc Hy Lạp) <br> 3. **/ʃ/** (gốc Pháp) | - *chair, children, cheap* (/tʃ/) <br> - *chemistry, stomach, ache, school, choir* (/k/) <br> - *machine, chef, champagne* (/ʃ/) |
| **ea** | 1. **/iː/** (i dài) <br> 2. **/e/** (e ngắn) <br> 3. **/eɪ/** (âm êi) | - *meat, tea, seat, peace* (/iː/) <br> - *bread, head, dead, health, feather* (/e/) <br> - *break, steak, great* (/eɪ/) |
| **oo** | 1. **/ʊ/** (u ngắn) <br> 2. **/uː/** (u dài) <br> 3. **/ʌ/** (âm á) | - *book, look, foot, cook* (/ʊ/) <br> - *food, moon, cool, choose* (/uː/) <br> - *blood, flood* (/ʌ/ - bẫy cực mạnh!) |
| **th** | 1. **/θ/** (thè lưỡi không rung) <br> 2. **/ð/** (thè lưỡi RUNG) | - *think, thank, breath, healthy, path* (/θ/) <br> - *this, that, there, mother, breathe* (/ð/) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *chemistry* /ˈkemɪstri/ vs *chair* /tʃeə/ $\\rightarrow$ Cùng viết là "ch" nhưng *chemistry* là từ mượn Hy Lạp nên đọc là **/k/**, trong khi *chair* đọc là **/tʃ/**.
* **Ví dụ 2:** *blood* /blʌd/ vs *book* /bʊk/ $\\rightarrow$ Đa số chữ "oo" đọc là /uː/ hoặc /ʊ/, nhưng *blood* (máu) và *flood* (lũ lụt) lại đọc là âm **/ʌ/** (như chữ 'á' tiếng Việt).
* **Ví dụ 3:** *climb* /klaɪm/ $\\rightarrow$ Chữ "b" đứng sau "m" ở cuối từ là **âm câm**, hoàn toàn không phát âm ra tiếng.

---

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
> - **Chữ p câm:** *psychology* /saɪˈkɒlədʒi/, *receipt* /rɪˈsiːt/.`,
    examples: [
      "blood /blʌd/ vs book /bʊk/ → blood là bẫy âm /ʌ/ cực hay gặp",
      "chemistry /ˈkemɪstri/ vs chair /tʃeə/ → chữ 'ch' phát âm là /k/",
      "doubt /daʊt/ → chữ 'b' là âm câm hoàn toàn không phát âm"
    ],
    quiz: [
      {
        question: "Chọn từ có phần gạch chân phát âm khác: head, bread, great, heavy",
        options: ["head", "bread", "great", "heavy"],
        correct_index: 2,
        explanation: "head /hed/, bread /bred/, heavy /ˈhevi/ đều có nhóm 'ea' đọc là /e/. Riêng great /ɡreɪt/ đọc là /eɪ/."
      },
      {
        question: "Chọn từ có phần gạch chân phát âm khác: chemistry, stomach, school, teacher",
        options: ["chemistry", "stomach", "school", "teacher"],
        correct_index: 3,
        explanation: "chemistry, stomach, school đều có 'ch' phát âm là /k/. Riêng teacher phát âm là /tʃ/."
      },
      {
        question: "Từ nào sau đây có chữ cái 'h' là âm câm (không phát âm)?",
        options: ["house", "honest", "heavy", "history"],
        correct_index: 1,
        explanation: "honest /ˈɒnɪst/ có chữ 'h' câm hoàn toàn, đọc bắt đầu bằng nguyên âm 'o' (an honest man). Các từ còn lại chữ 'h' đều được phát âm."
      }
    ]
  },
  {
    order_index: 4,
    title: "Quy tắc trọng âm",
    book1_ref: "Chuyên đề 1, Phần 2, tr.13-16 (đáp án tr.230)",
    book2_p1_ref: "Phần I, Chuyên đề 1, tr.12-19",
    book2_p2_ref: "Phần II, Chuyên đề 1, tr.141-146",
    theory_md: `## 🌟 1. Trọng âm là gì và tại sao tiếng Anh phải có trọng âm?

Trong tiếng Việt, mỗi từ có thanh điệu (sắc, huyền, hỏi, ngã, nặng). Tiếng Anh KHÔNG có dấu, nhưng thay vào đó nó dùng **TRỌNG ÂM (STRESS)**.
- Âm nào có trọng âm sẽ được đọc: **TO HƠN - CAO HƠN - DÀI HƠN**.
- Các âm còn lại đọc nhẹ, lướt và thường biến thành âm ngắn /ə/ hoặc /ɪ/.
Trong đề thi THPTQG luôn có **2 câu trọng âm** (1 câu từ 2 âm tiết, 1 câu từ 3 âm tiết).

---

## 📊 2. Quy tắc trọng âm của từ 2 âm tiết (Cực dễ nhớ)

| Loại từ | Vị trí trọng âm | Ví dụ minh họa | Ngoại lệ thường gặp trong đề thi |
| :--- | :--- | :--- | :--- |
| **Danh từ (N) & Tính từ (Adj)** | Rơi vào **Âm tiết 1** | *'student, 'father, 'happy, 'clever, 'famous* | *ma'chine (n), a'lone (adj), mis'take (n)* |
| **Động từ (V)** | Rơi vào **Âm tiết 2** | *be'gin, de'cide, re'lax, at'tract, en'joy* | *'listen, 'open, 'happen, 'offer, 'answer* (âm 2 chứa âm /ə/) |

---

## 📊 3. Quy tắc trọng âm theo đuôi (Hậu tố)

- **Nhóm rơi vào CHÍNH NÓ:** *-ee, -eer, -ese, -ique* (*volunt'eer, Japan'ese, un'ique*).
- **Nhóm rơi vào ÂM TIẾT NGAY TRƯỚC NÓ:** *-tion, -sion, -ic, -ious, -ity* (*edu'cation, his'toric, de'licious, a'bility*).
- **Nhóm dịch về ÂM THỨ 3 TỪ CUỐI LÊN:** *-ate, -y, -ise/-ize, -cy, -phy, -gy* (*'calculate, pho'tography, tech'nology*).

---

## 💬 4. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *'present* (danh từ: món quà) $\\rightarrow$ Danh từ 2 âm tiết nhấn âm 1. Nhưng *pre'sent* (động từ: thuyết trình) $\\rightarrow$ Động từ 2 âm tiết nhấn âm 2.
* **Ví dụ 2:** *edu'cation* $\\rightarrow$ Đuôi *-tion* kéo trọng âm về âm tiết ngay trước nó là âm "ca".
* **Ví dụ 3:** *engi'neer* $\\rightarrow$ Hậu tố *-eer* nhận luôn trọng âm trên chính đuôi.

---

> 💡 **THẦN CHÚ VÀNG: NẮM NGUYÊN TẮC ÂM YẾU /ə/**
> Trọng âm **KHÔNG BAO GIỜ** rơi vào âm /ə/ (âm "ơ" ngắn) hoặc /i/ ngắn.
> - *mother* /ˈmʌðər/ $\\rightarrow$ âm 2 là /ə/ nên trọng âm chắc chắn rơi vào âm 1.
> - *contain* /kənˈteɪn/ $\\rightarrow$ âm 1 là /kən/ (chứa /ə/) nên trọng âm phải nhảy sang âm 2.`,
    examples: [
      "'present (danh từ: món quà) vs pre'sent (động từ: thuyết trình) → trọng âm đổi nghĩa",
      "edu'cation → đuôi -tion kéo trọng âm về ngay trước nó (âm 'ca')",
      "Japan'ese → đuôi -ese nhận luôn trọng âm trên chính đuôi"
    ],
    quiz: [
      {
        question: "Chọn từ có vị trí trọng âm khác: decide, provide, listen, repeat",
        options: ["decide", "provide", "listen", "repeat"],
        correct_index: 2,
        explanation: "decide, provide, repeat là động từ 2 âm tiết trọng âm rơi vào âm 2. Riêng listen /ˈlɪs.ən/ có âm 2 là âm yếu /ə/ nên trọng âm rơi vào âm 1."
      },
      {
        question: "Từ nào sau đây có trọng âm rơi vào âm tiết thứ 1?",
        options: ["arrive", "forget", "doctor", "enjoy"],
        correct_index: 2,
        explanation: "doctor là danh từ 2 âm tiết trọng âm rơi vào âm 1. Arrive, forget, enjoy là các động từ 2 âm tiết trọng âm rơi vào âm 2."
      },
      {
        question: "Chọn từ có trọng âm rơi vào chính hậu tố của nó:",
        options: ["education", "Japanese", "historic", "ability"],
        correct_index: 1,
        explanation: "Hậu tố -ese luôn nhận trọng âm vào chính nó (Japan'ese). Education và historic nhấn âm ngay trước hậu tố, ability nhấn âm thứ 3 từ cuối lên."
      }
    ]
  },
  {
    order_index: 5,
    title: "Danh từ & Đại từ",
    book1_ref: "Chuyên đề 2, Phần 1 & 12, tr.18-22, 72-76",
    book2_p1_ref: "Phần I, Chuyên đề 7, tr.43-46",
    book2_p2_ref: "Phần II, Chuyên đề 13, tr.195-198",
    theory_md: `## 🌟 1. Bản chất danh từ & đại từ trong câu tiếng Anh

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

* **Ví dụ 1:** *Lan is smart. She studies hard.* $\\rightarrow$ "She" là đại từ nhân xưng chủ ngữ thay thế cho danh từ "Lan" đứng trước để tránh lặp từ.
* **Ví dụ 2:** *This book is mine, not yours.* $\\rightarrow$ "mine" là đại từ sở hữu (= my book), đứng độc lập một mình mà không cần danh từ đi sau.
* **Ví dụ 3:** *The news was very surprising to everyone.* $\\rightarrow$ "News" (tin tức) dù có đuôi 's' nhưng là danh từ không đếm được, động từ phải chia số ít là *was*.

---

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
> - *baggage / luggage* (hành lý)`,
    examples: [
      "Lan is intelligent. She (đại từ chủ ngữ) always helps me (đại từ tân ngữ).",
      "This is your laptop, and that one is mine (= my laptop - đại từ sở hữu).",
      "The news was (số ít) very surprising to everyone."
    ],
    quiz: [
      {
        question: "The news about the accident ______ very shocking to all of us.",
        options: ["were", "are", "was", "have been"],
        correct_index: 2,
        explanation: "News (tin tức) là danh từ không đếm được dù có chữ 's' ở cuối. Vì vậy động từ to be phải chia ở số ít quá khứ là was."
      },
      {
        question: "This umbrella is yours, but where is ______?",
        options: ["my", "mine", "me", "myself"],
        correct_index: 1,
        explanation: "Chỗ trống đứng độc lập ở cuối câu để thay thế cho cụm 'my umbrella' → bắt buộc dùng Đại từ sở hữu là mine."
      },
      {
        question: "Could you please give me some ______ on how to learn English vocabulary?",
        options: ["advices", "advice", "an advice", "advise"],
        correct_index: 1,
        explanation: "Advice (lời khuyên) là danh từ không đếm được, không thêm -s và không đi với mạo từ 'an'. 'Advise' là động từ."
      }
    ]
  },
  {
    order_index: 6,
    title: "Từ hạn định & Lượng từ",
    book1_ref: "Chuyên đề 2, Phần 10, tr.62-66",
    book2_p1_ref: "Phần I, Chuyên đề 12, tr.62-63",
    book2_p2_ref: "Phần II, các chuyên đề liên quan đến danh từ/lượng từ",
    theory_md: `## 🌟 1. Bản chất lượng từ (Quantifiers)

Lượng từ là những từ dùng để chỉ **số lượng ít hay nhiều** của người hoặc vật (*nhiều, một ít, một vài, tất cả*).
Người mất gốc cần nhớ nguyên tắc cốt lõi: Phân biệt từ nào đi với **danh từ đếm được**, từ nào đi với **danh từ không đếm được**.

---

## 📊 2. Bảng phân loại lượng từ kinh điển

| Ý nghĩa | Đi với Danh từ đếm được số nhiều | Đi với Danh từ KHÔNG đếm được | Đi được với CẢ HAI |
| :--- | :--- | :--- | :--- |
| **Nhiều** | **Many** (*many students*) | **Much** (*much time*) | **A lot of / Lots of / Plenty of** |
| **Một ít, một vài** | **A few** (*a few books*) | **A little** (*a little money*) | **Some** (khẳng định) / **Any** (phủ định, nghi vấn) |
| **Hầu như không có** | **Few** (*few friends*) | **Little** (*little water*) | **Hardly any** |
| **Mỗi / Mọi** | **Every / Each** (+ N số ít) | ❌ Không dùng | **All** (+ N số nhiều hoặc N không đếm được) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *I have a few questions to ask.* $\\rightarrow$ "questions" là danh từ đếm được số nhiều, "a few" nghĩa là có một vài câu hỏi (đủ dùng, tích cực).
* **Ví dụ 2:** *He has little patience with children.* $\\rightarrow$ "patience" (sự kiên nhẫn) là danh từ không đếm được, "little" không có 'a' nghĩa là hầu như không có (tiêu cực).
* **Ví dụ 3:** *Would you like some coffee?* $\\rightarrow$ Mặc dù là câu hỏi nhưng đây là lời mời lịch sự nên dùng *some* thay vì *any*.

---

> 💡 **TUYỆT CHIÊU PHÂN BIỆT: CÓ 'A' LÀ CÒN - MẤT 'A' LÀ MẤT:**
> - **A few / A little (CÓ 'A'):** Một ít, một vài $\\rightarrow$ **VẪN CÒN ĐỦ DÙNG (Tích cực 😊)**.
> - **Few / Little (MẤT 'A'):** Rất ít $\\rightarrow$ **HẦU NHƯ HẾT SẠCH, THIẾU THỐN (Tiêu cực 😢)**.`,
    examples: [
      "I have a few questions to ask the teacher. (Một vài câu hỏi - đếm được)",
      "He has little patience with children. (Hầu như không có kiên nhẫn - không đếm được)",
      "Would you like some coffee? (Lời mời lịch sự dùng 'some')"
    ],
    quiz: [
      {
        question: "Don't worry, we still have ______ time left before the train leaves.",
        options: ["few", "a few", "little", "a little"],
        correct_index: 3,
        explanation: "Time (thời gian) là danh từ không đếm được → loại few/a few. Vế trước có 'Don't worry' (Đừng lo) nghĩa là thời gian vẫn còn đủ dùng → chọn a little (Có 'A' là còn đủ)."
      },
      {
        question: "He is very lonely because he has ______ friends in this new city.",
        options: ["few", "a few", "little", "a little"],
        correct_index: 0,
        explanation: "Friends là danh từ đếm được số nhiều. Câu mang nghĩa tiêu cực 'rất cô đơn' (hầu như không có bạn) → chọn few (Mất 'A' là thiếu thốn)."
      },
      {
        question: "Would you like ______ tea or coffee?",
        options: ["any", "some", "many", "few"],
        correct_index: 1,
        explanation: "Trong câu hỏi đưa ra lời mời hoặc đề nghị lịch sự (Would you like...), ta dùng some chứ không dùng any."
      }
    ]
  },
  {
    order_index: 7,
    title: "Tiền tố & Hậu tố",
    book1_ref: "Chuyên đề 2, Phần 11, tr.67-71",
    book2_p1_ref: "Phần I, Chuyên đề 20, tr.93",
    book2_p2_ref: "Phần II, Chuyên đề 24, tr.237-242",
    theory_md: `## 🌟 1. Bản chất: Cỗ máy sản xuất từ vựng của tiếng Anh

Chỉ cần biết **gốc từ (root)** kết hợp với **Tiền tố (Prefix)** và **Hậu tố (Suffix)**, bạn có thể đoán nghĩa và dạng từ của hàng ngàn từ mới:
- **Tiền tố (Prefix):** Thêm vào **ĐẦU** từ $\\rightarrow$ Thay đổi **NGHĨA** của từ (tạo từ trái nghĩa).
- **Hậu tố (Suffix):** Thêm vào **CUỐI** từ $\\rightarrow$ Thay đổi **TỪ LOẠI** (biến Động từ thành Danh từ, Tính từ thành Trạng từ).

---

## 📊 2. Bảng Tiền tố & Hậu tố cốt lõi

| Thành phần | Các đuôi/đầu phổ biến | Ví dụ minh họa |
| :--- | :--- | :--- |
| **Tiền tố phủ định** | *un-, im-, in-, dis-, mis-, ir-* | *unhappy, impossible, disagree, mislead, irregular* |
| **Hậu tố Danh từ** | *-tion, -sion, -ment, -ness, -ity, -ance* | *development, pollution, kindness, ability, importance* |
| **Hậu tố Tính từ** | *-ful, -less, -ous, -ive, -able, -al* | *careful, careless, dangerous, active, comfortable* |
| **Hậu tố Trạng từ** | *-ly* (= Tính từ + ly) | *quickly, carefully, fluently* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *happy (adj: vui vẻ) $\\rightarrow$ unhappy (adj: buồn) $\\rightarrow$ happiness (n: niềm hạnh phúc)*. Thêm tiền tố *un-* đổi nghĩa; thêm hậu tố *-ness* đổi thành danh từ.
* **Ví dụ 2:** *care $\\rightarrow$ careful (cẩn thận) $\\rightarrow$ careless (bất cẩn)*. Đuôi *-ful* là có, đuôi *-less* là không có.
* **Ví dụ 3:** *friendly* (thân thiện) $\\rightarrow$ Đây là **Tính từ** (Danh từ friend + ly), KHÔNG phải trạng từ!

---

> 💡 **THẦN CHÚ PHÂN BIỆT ĐUÔI -FUL VÀ -LESS:**
> - **-FUL** = Full (đầy đủ): *hopeful* (đầy hy vọng), *careful* (cẩn thận).
> - **-LESS** = Loss/Không có (thiếu): *hopeless* (vô vọng), *careless* (bất cẩn), *homeless* (vô gia cư).

---

> ⚠️ **CẠM BẪY ĐUÔI -LY LÀ TÍNH TỪ:**
> - *friendly* (thân thiện - Tính từ!)
> - *lovely* (đáng yêu)
> - *costly* (đắt đỏ)
> - *lonely* (cô đơn)`,
    examples: [
      "happy (adj) → unhappy (adj trái nghĩa) → happiness (danh từ)",
      "care (v) → careful (adj cẩn thận) → careless (adj bất cẩn) → carefully (adv)",
      "friendly is an adjective, NOT an adverb (He gave us a friendly smile)"
    ],
    quiz: [
      {
        question: "It is ______ to drive when you are feeling extremely sleepy.",
        options: ["danger", "dangerous", "dangerously", "endanger"],
        correct_index: 1,
        explanation: "Cấu trúc: It is + Adj + to V. Đuôi -ous là đuôi của Tính từ → dangerous (nguy hiểm)."
      },
      {
        question: "He was very ______ and made a lot of careless mistakes in the test.",
        options: ["careful", "careless", "care", "caring"],
        correct_index: 1,
        explanation: "Vế sau có 'made a lot of mistakes' (phạm nhiều lỗi) chứng tỏ tính cách bất cẩn → chọn careless (-less mang nghĩa thiếu cẩn thận)."
      },
      {
        question: "Từ nào sau đây là TÍNH TỪ (Adjective) dù có đuôi -ly?",
        options: ["quickly", "badly", "friendly", "happily"],
        correct_index: 2,
        explanation: "Friendly (thân thiện) được tạo từ Danh từ 'friend' + ly = Tính từ. Các từ còn lại đều là Trạng từ (Tính từ + ly)."
      }
    ]
  }
];
