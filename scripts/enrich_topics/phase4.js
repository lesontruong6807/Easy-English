// Phase 4: Kỹ năng Đọc hiểu & Viết (5 topics)
module.exports = [
  {
    order_index: 1,
    title: "Điền từ vào đoạn văn (Cloze Test)",
    book1_ref: "Chuyên đề 21, Phần 1-4, tr.381-395",
    book2_p1_ref: "Phần I, Chuyên đề 23, tr.139-145",
    book2_p2_ref: "Phần II, Chuyên đề 25, tr.291-305",
    theory_md: `## 🌟 1. Bản chất dạng bài Cloze Test trong đề thi THPTQG

Bài điền từ gồm 1 đoạn văn với **5 chỗ trống** theo ma trận:
1. 1 câu Lượng từ / Từ hạn định (*many, much, each, other, another...*).
2. 1 câu Đại từ quan hệ (*who, which, that, where, whose*).
3. 1 câu Liên từ (*However, Therefore, Although, Because...*).
4. 2 câu Từ vựng / Collocation.

---

## 📊 2. Phân biệt: OTHER, OTHERS, ANOTHER

| Từ | Đi kèm phía sau | Ý nghĩa |
| :--- | :--- | :--- |
| **Another** | + **Danh từ số ít** (An + other) | Một cái/người khác |
| **Other** | + **Danh từ số nhiều / N không đếm được** | Những cái/người khác |
| **Others** | **ĐỨNG ĐỘC LẬP MỘT MÌNH** (có 's') | Những người/vật khác |
| **The other** | + **Danh từ số ít** (xác định) | Cái còn lại trong nhóm 2 cái |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *I need another pen because this one is broken.* $\\rightarrow$ "pen" là danh từ số ít nên dùng *another*.
* **Ví dụ 2:** *Some people agreed, but others disagreed.* $\\rightarrow$ *others* đứng độc lập một mình làm chủ ngữ cho động từ *disagreed*.
* **Ví dụ 3:** *She held a book in one hand and a flower in the other.* $\\rightarrow$ Con người có 2 tay, một tay cầm sách thì tay còn lại dùng *the other*.`,
    examples: [
      "I need another pen because this one is broken. (Another + Danh từ số ít)",
      "Some people agreed, but others disagreed. (Others đứng một mình làm chủ ngữ)",
      "She held a book in one hand and a flower in the other. (The other = cái còn lại)"
    ],
    quiz: [
      {
        question: "Some people enjoy city life, while ______ prefer living in peaceful rural areas.",
        options: ["other", "others", "another", "the other"],
        correct_index: 1,
        explanation: "Sau chỗ trống là động từ prefer (không có danh từ đi kèm) → từ đứng độc lập một mình làm chủ ngữ là others."
      },
      {
        question: "Could I have ______ glass of water, please?",
        options: ["other", "others", "another", "the others"],
        correct_index: 2,
        explanation: "'glass of water' là danh từ đếm được số ít → dùng another (Another + N số ít: thêm một cái nữa)."
      },
      {
        question: "I have two brothers. One is an engineer, and ______ is a doctor.",
        options: ["the other", "other", "another", "others"],
        correct_index: 0,
        explanation: "Trong tổng số 2 người (two brothers): một người là 'one', người còn lại xác định là 'the other'."
      }
    ]
  },
  {
    order_index: 2,
    title: "Đọc hiểu (Reading Comprehension)",
    book1_ref: "Chuyên đề 22, Phần 1-5, tr.396-420",
    book2_p1_ref: "Phần I, Chuyên đề 24, tr.146-160",
    book2_p2_ref: "Phần II, Chuyên đề 26, tr.306-330",
    theory_md: `## 🌟 1. Bản chất: Kỹ thuật làm bài đọc hiểu siêu tốc

Không dịch từng từ! Áp dụng **2 kỹ thuật đọc: Skimming & Scanning**.
- **Skimming (Đọc lướt):** Đọc câu đầu và cuối đoạn để tìm ý chính / tiêu đề bài đọc.
- **Scanning (Quét từ khóa):** Tìm từ khóa (Keywords: tên riêng, con số, thuật ngữ) để định vị thông tin trong bài.

---

## 💬 2. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *What is the main topic of the passage?* $\\rightarrow$ Đọc câu đầu tiên của từng đoạn văn để tổng hợp ý chính nhanh nhất.
* **Ví dụ 2:** *The word 'they' in paragraph 2 refers to...* $\\rightarrow$ Đọc câu văn đứng ngay trước nó, tìm danh từ số nhiều để thay thế.
* **Ví dụ 3:** *Avoid answers with extreme words like 'always', 'never', 'only'.* $\\rightarrow$ Các đáp án mang tính tuyệt đối hóa thường là đáp án bẫy sai.

---

> 💡 **CHIẾN THUẬT QUY CHIẾU: TỪ "IT/THEY" THAY THẾ CHO CÁI GÌ?**
> Luôn nhìn về **CÂU VĂN NGAY PHÍA TRƯỚC**.
> - **IT:** thay cho danh từ số ít / không đếm được.
> - **THEY / THEM:** thay cho danh từ số nhiều có 's'.`,
    examples: [
      "Use scanning to locate numbers and proper names quickly in reading tests.",
      "The pronoun 'they' refers to plural nouns mentioned in the previous sentence.",
      "Avoid answers with extreme words like 'always', 'never', or 'only'."
    ],
    quiz: [
      {
        question: "Khi làm câu hỏi 'What is the main idea of the passage?', vị trí nào quan trọng nhất cần đọc?",
        options: ["Dòng cuối cùng của bài", "Câu đầu tiên của mỗi đoạn văn", "Toàn bộ bài từ đầu đến cuối", "Chỉ đọc câu hỏi"],
        correct_index: 1,
        explanation: "Các bài đọc tiếng Anh thường viết theo lối diễn dịch, câu chủ đề (Topic sentence) thường nằm ngay ở câu đầu tiên của mỗi đoạn văn."
      },
      {
        question: "Trong câu hỏi 'The word IT in paragraph 2 refers to...', ta nên tìm danh từ thay thế ở đâu?",
        options: ["Ở đoạn cuối bài", "Ở câu văn ngay phía trước từ 'it'", "Ở bất kỳ đâu", "Chỉ ở dòng đầu tiên"],
        correct_index: 1,
        explanation: "Đại từ quy chiếu (it, they, them) luôn thay thế cho danh từ đã được nhắc tới ở câu văn ngay liền trước."
      },
      {
        question: "Các phương án chứa từ nào sau đây thường là ĐÁP ÁN BẪY (SAI) trong bài đọc hiểu?",
        options: ["may, can", "often, sometimes", "always, completely, only", "generally, usually"],
        correct_index: 2,
        explanation: "Các từ mang tính tuyệt đối hóa cực đoan như 'always' (luôn luôn), 'never' (không bao giờ), 'only' (chỉ duy nhất) thường là đáp án bẫy."
      }
    ]
  },
  {
    order_index: 3,
    title: "Tìm lỗi sai (Error Identification)",
    book1_ref: "Chuyên đề 23, Phần 1-4, tr.421-435",
    book2_p1_ref: "Phần I, Chuyên đề 25, tr.161-168",
    book2_p2_ref: "Phần II, Chuyên đề 27, tr.331-342",
    theory_md: `## 🌟 1. Cấu trúc 3 câu tìm lỗi sai trong đề thi

1. **Câu 1: Lỗi về THÌ** (Quá khứ đơn vs Hiện tại đơn).
2. **Câu 2: Lỗi về ĐẠI TỪ** (*its* vs *their*).
3. **Câu 3: Lỗi về TỪ DỄ GÂY NHẦM LẪN** (*sensible* vs *sensitive*).

---

## 💬 2. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Last night he goes (sai $\\rightarrow$ went) to the movies.* $\\rightarrow$ Có "last night" thì động từ phải chia quá khứ đơn *went*.
* **Ví dụ 2:** *Elephants use its (sai $\\rightarrow$ their) trunks.* $\\rightarrow$ "Elephants" là số nhiều nên đại từ sở hữu phải là *their*.
* **Ví dụ 3:** *He made a sensible decision (quyết định khôn ngoan), not sensitive (nhạy cảm).*`,
    examples: [
      "Last night he goes (sai → went) to the movies with his classmates.",
      "Elephants use its (sai → their) trunks to drink water and pick up food.",
      "He made a very sensible (khôn ngoan) decision, not sensitive (nhạy cảm)."
    ],
    quiz: [
      {
        question: "Tìm phần gạch chân có lỗi sai: 'Last night, my brother was doing (A) his homework when (B) his friend calls (C) to invite him out (D).'",
        options: ["was doing", "when", "calls", "out"],
        correct_index: 2,
        explanation: "Câu kể về quá khứ ('Last night'), hành động bạn gọi điện xen vào ở quá khứ phải chia Quá khứ đơn: sửa calls → called."
      },
      {
        question: "Tìm lỗi sai: 'Many animals (A) are losing its (B) natural habitats due to (C) deforestation (D).'",
        options: ["Many animals", "its", "due to", "deforestation"],
        correct_index: 1,
        explanation: "Chủ ngữ là 'Many animals' (số nhiều), nên đại từ sở hữu phải là 'their' chứ không thể dùng 'its'."
      },
      {
        question: "Tìm lỗi sai: 'It is very sensitive (A) of you to bring (B) an umbrella because it is raining (C) heavily outside (D).'",
        options: ["sensitive", "to bring", "is raining", "heavily"],
        correct_index: 0,
        explanation: "Từ gây nhầm lẫn: sensitive là nhạy cảm. Để khen ai đó 'khôn ngoan, biết suy nghĩ hợp lý' phải dùng từ sensible (sửa sensitive → sensible)."
      }
    ]
  },
  {
    order_index: 4,
    title: "Nối câu & Viết lại câu (Sentence Transformation)",
    book1_ref: "Chuyên đề 24, Phần 1-5, tr.436-455",
    book2_p1_ref: "Phần I, Chuyên đề 26, tr.169-178",
    book2_p2_ref: "Phần II, Chuyên đề 28, tr.343-356",
    theory_md: `## 🌟 1. Top 4 cấu trúc chuyển đổi câu hay thi nhất

1. **Hiện tại hoàn thành $\\leftrightarrow$ Quá khứ đơn:**
   *I haven't seen him for 3 years $\\leftrightarrow$ The last time I saw him was 3 years ago.*
2. **Modal Verb $\\leftrightarrow$ Động từ chỉ mức độ:**
   - *It is compulsory... $\\leftrightarrow$ must*
   - *You are not allowed to... $\\leftrightarrow$ mustn't*
   - *It is a good idea to... $\\leftrightarrow$ should*
3. **So sánh hơn $\\leftrightarrow$ So sánh bằng phủ định:**
   *Nam is taller than Huy $\\leftrightarrow$ Huy is not as tall as Nam.*
4. **Câu điều kiện $\\leftrightarrow$ Thực tế đối lập.**

---

## 💬 2. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *I haven't eaten pizza for months $\\rightarrow$ The last time I ate pizza was months ago.*
* **Ví dụ 2:** *It is forbidden to take photos $\\rightarrow$ You mustn't take photos.*
* **Ví dụ 3:** *She is smarter than me $\\rightarrow$ I am not as smart as her.*`,
    examples: [
      "I haven't eaten pizza for months = The last time I ate pizza was months ago.",
      "It is forbidden to take photos = You mustn't take photos.",
      "She is smarter than me = I am not as smart as her."
    ],
    quiz: [
      {
        question: "'It is compulsory for all students to wear uniforms on Mondays.' Câu nào có nghĩa tương đương?",
        options: ["Students may wear uniforms on Mondays.", "Students should wear uniforms on Mondays.", "Students must wear uniforms on Mondays.", "Students needn't wear uniforms on Mondays."],
        correct_index: 2,
        explanation: "Compulsory = mang tính bắt buộc quy định → tương đương với động từ khuyết thiếu must."
      },
      {
        question: "'I haven't visited my hometown for five years.' Câu nào có nghĩa tương đương?",
        options: ["The last time I visited my hometown was five years ago.", "I last visited my hometown five years before.", "I visited my hometown for five years.", "It was five years since I visit my hometown."],
        correct_index: 0,
        explanation: "Cấu trúc tương đương: S + have not + V3 + for [thời gian] = The last time + S + V2 + was [thời gian] ago."
      },
      {
        question: "'You are not permitted to use mobile phones during the exam.' Câu nào tương đương?",
        options: ["You don't have to use mobile phones.", "You mustn't use mobile phones.", "You shouldn't use mobile phones.", "You needn't use mobile phones."],
        correct_index: 1,
        explanation: "Not permitted to = không được phép (bị cấm) → tương đương với mustn't."
      }
    ]
  },
  {
    order_index: 5,
    title: "Chức năng giao tiếp (Social Communication)",
    book1_ref: "Chuyên đề 25, Phần 1-3, tr.456-470",
    book2_p1_ref: "Phần I, Chuyên đề 27, tr.179-185",
    book2_p2_ref: "Phần II, Chuyên đề 29, tr.357-368",
    theory_md: `## 🌟 1. Phép lịch sự trong giao tiếp

Người phương Tây luôn ưu tiên sự **lịch sự, khiêm tốn và tích cực**:
- Khi được **khen ngợi**: Nói lời cảm ơn (*Thank you! It's very nice of you to say so*).
- Khi được **cảm ơn**: Đáp lại (*You're welcome! / My pleasure*).
- Khi được **xin lỗi**: Đáp lại (*Never mind! / That's alright*).

---

## 💬 2. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *- 'Thank you for the ride!' - 'You're welcome!'* $\\rightarrow$ Lời đáp lại cảm ơn thân thiện.
* **Ví dụ 2:** *- 'You look gorgeous today!' - 'Thank you. That's very kind of you.'* $\\rightarrow$ Đáp lại lời khen một cách lịch sự.
* **Ví dụ 3:** *- 'Traffic is terrible.' - 'You can say that again!'* $\\rightarrow$ Thành ngữ thể hiện sự hoàn toàn đồng ý 100%.

---

> ⚠️ **CẠM BẪY: "YOU CAN SAY THAT AGAIN!":**
> **"You can say that again" = I completely agree with you** (Tôi hoàn toàn đồng ý với bạn, bạn nói quá đúng)! Không phải là yêu cầu người khác nói lại!`,
    examples: [
      "- 'Thank you for the ride!' - 'You're welcome!' (Đáp lại lời cảm ơn)",
      "- 'You look gorgeous today!' - 'Thank you. That's very kind of you.' (Đáp lại lời khen)",
      "- 'Traffic in this city is terrible.' - 'You can say that again!' (= I totally agree)"
    ],
    quiz: [
      {
        question: "John: 'That was a fantastic presentation, Sarah!' - Sarah: '______'",
        options: ["Don't mention it.", "It's my pleasure.", "Thanks. I'm glad you liked it.", "No problem."],
        correct_index: 2,
        explanation: "John đang khen ngợi bài thuyết trình của Sarah → Đáp lại lời khen một cách lịch sự: 'Cảm ơn, mình rất vui vì bạn thích nó'."
      },
      {
        question: "Tom: 'Living in a big city is very stressful.' - Mary: '______. There is always traffic and noise.'",
        options: ["You can say that again", "I don't think so", "Not at all", "Never mind"],
        correct_index: 0,
        explanation: "Vế sau Mary đồng tình 'Luôn tắc đường và ồn ào' → dùng thành ngữ 'You can say that again' = Tôi hoàn toàn đồng ý với bạn."
      },
      {
        question: "David: 'Thank you very much for picking me up at the airport.' - Peter: '______'",
        options: ["Never mind.", "My pleasure.", "I'd love to.", "Congratulations!"],
        correct_index: 1,
        explanation: "Đáp lại lời cảm ơn một cách lịch sự, trang trọng: 'My pleasure' (Rất hân hạnh được giúp bạn) hoặc 'You're welcome'."
      }
    ]
  }
];
