// Phase 4: Kỹ năng Đọc hiểu & Viết (5 topics)
module.exports = [
  {
    order_index: 1,
    title: "Điền từ vào đoạn văn (Cloze Test)",
    book1_ref: "Chuyên đề 21, Phần 1-4, tr.381-395",
    book2_p1_ref: "Phần I, Chuyên đề 23, tr.139-145",
    book2_p2_ref: "Phần II, Chuyên đề 25, tr.291-305",
    theory_md: `## 🌟 1. Bản chất dạng bài Cloze Test trong đề thi THPTQG

Bài điền từ vào đoạn văn thường gồm 1 đoạn văn khoảng 150-200 từ với **5 chỗ trống**.
Cấu trúc 5 câu hỏi trong bài điền từ luôn cố định theo format chuẩn Bộ GD&ĐT:
1. **1 câu về Lượng từ / Từ hạn định** (*many, much, each, other, another...*).
2. **1 câu về Đại từ quan hệ** (*who, which, that, where, whose*).
3. **1 câu về Liên từ** (*However, Therefore, Although, Because...*).
4. **2 câu về Từ vựng / Collocation** theo ngữ cảnh bài đọc.

---

## 📊 2. Chiến thuật 3 bước "hóa giải" chỗ trống

- **Bước 1: Nhìn ngay trước và ngay sau chỗ trống**
  - Xem từ đứng trước là loại từ gì (Danh từ số ít hay số nhiều? Đếm được hay không đếm được? Chỉ người hay chỉ vật?).
- **Bước 2: Xác định loại ngữ pháp của 4 phương án**
  - Nếu là câu đại từ quan hệ: Nhìn danh từ phía trước (người $\\rightarrow$ who/whom, vật $\\rightarrow$ which, sở hữu $\\rightarrow$ whose).
  - Nếu là câu liên từ: Đọc câu trước và câu chứa chỗ trống xem mối quan hệ là **bổ sung, nguyên nhân hay tương phản đối lập**.
- **Bước 3: Loại trừ nhanh các phương án vô lý**
  - Loại các từ ngữ sai ngữ pháp ngay từ đầu trước khi cần dịch nghĩa cả đoạn văn.

---

## 💡 3. Thần chú phân biệt: OTHER, OTHERS, ANOTHER

Đây là câu hỏi lượng từ xuất hiện trong 99% các đề thi:

| Từ | Đi kèm phía sau | Ý nghĩa | Ví dụ |
| :--- | :--- | :--- | :--- |
| **Another** | + **Danh từ số ít** (An + other) | Một cái/người khác (trong nhiều cái) | *I'd like **another cup** of coffee.* |
| **Other** | + **Danh từ số nhiều / N không đếm được** | Những cái/người khác | *There are **other options** to consider.* |
| **Others** | **ĐỨNG ĐỘC LẬP MỘT MÌNH** (đã có 's' nên KHÔNG có N sau) | Những người/vật khác | *Some students like Math; **others** prefer Art.* |
| **The other** | + **Danh từ số ít/nhiều** (xác định) | Cái còn lại (trong nhóm 2 cái đã biết) | *I have 2 pens. One is blue, **the other** is red.* |

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "Some people enjoy city life, while ______ prefer living in peaceful rural areas."
> A. other &nbsp;&nbsp;&nbsp;&nbsp; B. others &nbsp;&nbsp;&nbsp;&nbsp; C. another &nbsp;&nbsp;&nbsp;&nbsp; D. the other
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Ngay sau chỗ trống là động từ **prefer** (không có danh từ đi kèm).
> Từ đứng độc lập làm chủ ngữ thay thế cho "những người khác" bắt buộc phải là **others**!
> </details>`,
    examples: [
      "I need another pen because this one is broken. (Another + Danh từ số ít)",
      "Some people agreed, but others disagreed. (Others đứng một mình làm chủ ngữ)",
      "She held a book in one hand and a flower in the other. (The other = cái còn lại)"
    ]
  },
  {
    order_index: 2,
    title: "Đọc hiểu (Reading Comprehension)",
    book1_ref: "Chuyên đề 22, Phần 1-5, tr.396-420",
    book2_p1_ref: "Phần I, Chuyên đề 24, tr.146-160",
    book2_p2_ref: "Phần II, Chuyên đề 26, tr.306-330",
    theory_md: `## 🌟 1. Sai lầm chí mạng của người mất gốc khi làm bài đọc hiểu

Nhiều bạn học sinh khi thấy bài đọc tiếng Anh dài 300-400 từ thường:
1. Đọc từ đầu đến cuối từng từ một và cố dịch sang tiếng Việt.
2. Gặp 2-3 từ mới liền hoang mang, mất bình tĩnh và đánh lụi.
👉 **Sự thật:** Người bản xứ khi đi thi cũng không dịch từng chữ! Bạn chỉ cần nắm vững **2 kỹ thuật đọc siêu tốc: Skimming & Scanning**.

---

## 📊 2. Bộ đôi kỹ thuật Skimming & Scanning

| Kỹ thuật | Cách thực hiện | Áp dụng cho dạng câu hỏi nào? |
| :--- | :--- | :--- |
| **Skimming (Đọc lướt lấy ý chính)** | - Đọc câu đầu tiên và câu cuối cùng của từng đoạn văn. <br> - Đọc tiêu đề, lướt mắt nhanh không cần dịch từng từ. | - *What is the main idea of the passage?* (Ý chính) <br> - *What is the best title for the text?* (Tiêu đề phù hợp nhất) |
| **Scanning (Quét tìm từ khóa cụ thể)** | - Lấy bút gạch chân **Từ khóa (Keywords)** trong câu hỏi (Tên riêng, con số, năm tháng, thuật ngữ). <br> - Di chuyển mắt thật nhanh để tìm từ khóa đó nằm ở dòng nào trong bài đọc. | - *According to the passage, when/where/who...?* <br> - *Which of the following is NOT true?* |

---

## 💡 3. Tuyệt chiêu xử lý câu hỏi quy chiếu: "The word IT/THEY refers to..."

Dạng câu hỏi này cho bạn điểm miễn phí 100% nếu làm theo quy tắc:
> 💡 **QUY TẮC BẬN NGƯỢC DÒNG:**
> - Đại từ **it, they, them, this, these** luôn thay thế cho một danh từ đã được nhắc đến ở **CÂU NGAY PHÍA TRƯỚC**.
> - Đọc câu văn đứng ngay trước từ được gạch chân.
> - Nếu là **IT**: tìm danh từ số ít hoặc danh từ không đếm được.
> - Nếu là **THEY / THEM**: tìm danh từ số nhiều (có -s).
> - Thử thay thế danh từ đó vào câu xem có hợp nghĩa logic không.

---

> ⚠️ **CẠM BẪY THÔNG TIN NHIỄU (EXTREME WORDS):**
> Trong các câu hỏi "Which of the following is TRUE":
> Những phương án chứa các từ tuyệt đối hóa như: **always (luôn luôn), never (không bao giờ), all (tất cả), completely (hoàn toàn), only (chỉ duy nhất)** $\\rightarrow$ **90% là ĐÁP ÁN SAI (bẫy)**! Hãy ưu tiên các đáp án mềm dẻo chứa: *may, can, some, often, generally*.

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** Khi gặp câu hỏi *"What is the main topic of the passage?"*, ta nên đọc kỹ phần nào trước tiên?
> A. Dòng cuối cùng của đoạn cuối &nbsp;&nbsp;&nbsp;&nbsp; B. Câu đầu tiên của các đoạn văn &nbsp;&nbsp;&nbsp;&nbsp; C. Từng từ một từ đầu đến cuối &nbsp;&nbsp;&nbsp;&nbsp; D. Không cần đọc bài
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Các bài đọc tiếng Anh thường viết theo lối diễn dịch: Câu chủ đề (Topic sentence) thường nằm ở **ngay câu đầu tiên của mỗi đoạn văn**!
> </details>`,
    examples: [
      "Use scanning to locate numbers and proper names quickly in reading tests.",
      "The pronoun 'they' refers to plural nouns mentioned in the previous sentence.",
      "Avoid answers with extreme words like 'always', 'never', or 'only'."
    ]
  },
  {
    order_index: 3,
    title: "Tìm lỗi sai (Error Identification)",
    book1_ref: "Chuyên đề 23, Phần 1-4, tr.421-435",
    book2_p1_ref: "Phần I, Chuyên đề 25, tr.161-168",
    book2_p2_ref: "Phần II, Chuyên đề 27, tr.331-342",
    theory_md: `## 🌟 1. Cấu trúc 3 câu tìm lỗi sai trong đề thi THPTQG

Trong đề thi luôn có chính xác **3 câu tìm lỗi sai**, được phân chia theo ma trận đề cực kỳ chuẩn:
1. **Câu 1: Lỗi về THÌ của động từ** (Dễ lấy điểm nhất - thường sai giữa Quá khứ đơn vs Hiện tại đơn).
2. **Câu 2: Lỗi về ĐẠI TỪ quy chiếu** (Sai giữa số ít vs số nhiều: *its* vs *their*).
3. **Câu 3: Lỗi về TỪ DỄ GÂY NHẦM LẪN (Confusing Words)** (Câu phân loại điểm 8+, 9+).

---

## 📊 2. Chiến lược xử lý từng loại câu

### Dạng 1: Kiểm tra sự hòa hợp thì (Tense Harmony)
- Tìm các dấu hiệu thời gian trong câu (*yesterday, last year, in 2018...*).
- Nếu câu kể về quá khứ mà có 1 động từ chia ở Hiện tại đơn (thêm s/es) $\\rightarrow$ **Đó chính là lỗi sai!**

### Dạng 2: Lỗi đại từ số ít vs số nhiều (Pronoun Agreement)
- Đề thi rất hay gài: Chủ ngữ phía trước là **số nhiều** (ví dụ: *mothers, organizations, computers*) nhưng phía sau lại dùng đại từ quy chiếu là **its** hoặc **it** (hoặc ngược lại).
- *Ví dụ sai:* Many animals are losing **its** natural habitat. $\\rightarrow$ Sửa thành: **their** (vì animals là số nhiều).

### Dạng 3: Các cặp từ dễ gây nhầm lẫn kinh điển
- **Sensitive** (nhạy cảm, dễ tổn thương) vs **Sensible** (hợp lý, khôn ngoan).
- **Comprehensive** (toàn diện, bao quát) vs **Comprehensible** (có thể hiểu được).
- **Considerable** (đáng kể, to lớn) vs **Considerate** (chu đáo, biết nghĩ cho người khác).
- **Economical** (tiết kiệm) vs **Economic** (thuộc về kinh tế).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** Tìm phần gạch chân có lỗi sai:
> "Last night, my brother (A) **was doing** his homework (B) **when** his friend (C) **calls** to invite him (D) **out**."
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> Vế trước có "Last night" và đang dùng thì quá khứ (*was doing*), hành động bạn gọi điện xen vào ở quá khứ phải chia thì Quá khứ đơn: sửa **calls** $\\rightarrow$ **called**!
> </details>`,
    examples: [
      "Last night he goes (sai → went) to the movies with his classmates.",
      "Elephants use its (sai → their) trunks to drink water and pick up food.",
      "He made a very sensible (khôn ngoan) decision, not sensitive (nhạy cảm)."
    ]
  },
  {
    order_index: 4,
    title: "Nối câu & Viết lại câu (Sentence Transformation)",
    book1_ref: "Chuyên đề 24, Phần 1-5, tr.436-455",
    book2_p1_ref: "Phần I, Chuyên đề 26, tr.169-178",
    book2_p2_ref: "Phần II, Chuyên đề 28, tr.343-356",
    theory_md: `## 🌟 1. Bản chất dạng bài: "Bình mới rượu cũ"

Dạng bài viết lại câu và nối câu trắc nghiệm thực chất chỉ kiểm tra bạn khả năng **diễn đạt cùng một ý nghĩa bằng các cấu trúc ngữ pháp tương đương**.
Nắm chắc 4 cặp cấu trúc chuyển đổi dưới đây, bạn sẽ làm đúng trọn vẹn phần này trong vòng 1 phút!

---

## 📊 2. Top 4 cấu trúc chuyển đổi câu hay thi nhất

### 1. Hiện tại hoàn thành $\\leftrightarrow$ Quá khứ đơn
- **Công thức:**
  *S + have/has not + V3 + for [thời gian]*
  $\\leftrightarrow$ **The last time + S + V2/ed + was [thời gian] ago.**
  $\\leftrightarrow$ **It is [thời gian] since + S + (last) + V2/ed.**
- *Ví dụ:* I haven't seen him for 3 years.
  $\\rightarrow$ The last time I saw him was 3 years ago.

### 2. Modal Verb $\\leftrightarrow$ Động từ chỉ mức độ
- **It is necessary / compulsory that...** $\\leftrightarrow$ **must / have to** (Bắt buộc)
- **It is not necessary that...** $\\leftrightarrow$ **needn't / don't have to** (Không cần thiết)
- **You are not allowed / permitted to...** $\\leftrightarrow$ **mustn't** (Cấm đoán)
- **It is a good idea to... / If I were you...** $\\leftrightarrow$ **should** (Khuyên bảo)
- **Perhaps / It is possible that...** $\\leftrightarrow$ **may / might** (Có lẽ)

### 3. Câu điều kiện ước muốn $\\leftrightarrow$ Thực tế đối lập
- Thực tế hiện tại khẳng định $\\rightarrow$ Câu điều kiện loại 2 hoặc Wish phủ định.
- Thực tế quá khứ $\\rightarrow$ Câu điều kiện loại 3 hoặc Wish quá khứ hoàn thành (*had V3*).

### 4. So sánh hơn $\\leftrightarrow$ So sánh bằng phủ định
- *Nam is taller than Huy.* $\\rightarrow$ *Huy is not as tall as Nam.*

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "It is compulsory for all students to wear uniforms on Mondays."
> Câu nào có nghĩa tương đương?
> A. Students may wear uniforms on Mondays.
> B. Students should wear uniforms on Mondays.
> C. Students must wear uniforms on Mondays.
> D. Students needn't wear uniforms on Mondays.
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> **compulsory** = bắt buộc theo quy định $\\rightarrow$ tương đương với động từ khuyết thiếu **must**!
> </details>`,
    examples: [
      "I haven't eaten pizza for months = The last time I ate pizza was months ago.",
      "It is forbidden to take photos = You mustn't take photos.",
      "She is smarter than me = I am not as smart as her."
    ]
  },
  {
    order_index: 5,
    title: "Chức năng giao tiếp (Social Communication)",
    book1_ref: "Chuyên đề 25, Phần 1-3, tr.456-470",
    book2_p1_ref: "Phần I, Chuyên đề 27, tr.179-185",
    book2_p2_ref: "Phần II, Chuyên đề 29, tr.357-368",
    theory_md: `## 🌟 1. Bản chất: Phép lịch sự trong giao tiếp của người Anh - Mỹ

Trong đề thi luôn có **2 câu giao tiếp hàng ngày** (thường rơi vào các tình huống: *Khen ngợi, Cảm ơn, Xin lỗi, Lời mời/Rủ rê, Bày tỏ quan điểm đồng ý hoặc phản đối*).
**Quy tắc vàng:** Người phương Tây luôn ưu tiên sự **lịch sự (politeness), khiêm tốn và tích cực** trong giao tiếp!

---

## 📊 2. Bảng đáp từ chuẩn các tình huống thường gặp

| Tình huống giao tiếp | Câu nói của người thứ nhất | Câu đáp lại chuẩn xác nhất |
| :--- | :--- | :--- |
| **Khen ngợi** | *"What a lovely dress you have!"* <br> *"You played really well today!"* | - **It's very nice of you to say so.** <br> - **Thank you. I'm glad you like it.** <br> *(Người phương Tây luôn cảm ơn khi được khen, KHÔNG chối đẩy như người Việt!)* |
| **Cảm ơn** | *"Thank you so much for your help!"* | - **You're welcome!** <br> - **Don't mention it.** <br> - **It's my pleasure.** / **My pleasure.** |
| **Xin lỗi** | *"I'm sorry for being late."* | - **Never mind.** / **That's alright.** <br> - **Don't worry about it.** / **No problem.** |
| **Bày tỏ quan điểm (Đồng ý)** | *"I think online learning is very useful."* | - **I completely agree with you.** <br> - **You can say that again!** *(Bạn nói quá đúng - câu này cực hay bẫy!)* <br> - **There's no doubt about it.** |
| **Bày tỏ quan điểm (Phản đối)** | *"Football is boring."* | - **I'm afraid I have to disagree.** <br> - **I don't think so.** |

---

> ⚠️ **CẠM BẪY SIÊU KINH ĐIỂN: "YOU CAN SAY THAT AGAIN!":**
> Rất nhiều bạn học sinh mất gốc dịch thô câu này là: *"Bạn có thể nói lại lần nữa không (vì tôi nghe không rõ)"* $\\rightarrow$ **SAI HOÀN TOÀN!**
> 👉 Trong thành ngữ tiếng Anh, **"You can say that again" = I totally agree with you** (Tôi hoàn toàn đồng ý 100% với bạn, bạn nói quá chí lý)!

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:**
> - John: "That was a fantastic presentation, Sarah!"
> - Sarah: "______"
> A. Don't mention it. &nbsp;&nbsp;&nbsp;&nbsp; B. It's my pleasure. &nbsp;&nbsp;&nbsp;&nbsp; C. Thanks. I'm glad you liked it. &nbsp;&nbsp;&nbsp;&nbsp; D. No problem.
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> John đang **khen ngợi** bài thuyết trình của Sarah $\\rightarrow$ Đáp lại lời khen một cách lịch sự là: Cảm ơn, mình rất vui vì bạn thích nó!
> (A, B, D là đáp lại lời cảm ơn).
> </details>`,
    examples: [
      "- 'Thank you for the ride!' - 'You're welcome!' (Đáp lại lời cảm ơn)",
      "- 'You look gorgeous today!' - 'Thank you. That's very kind of you.' (Đáp lại lời khen)",
      "- 'Traffic in this city is terrible.' - 'You can say that again!' (= I totally agree)"
    ]
  }
];
