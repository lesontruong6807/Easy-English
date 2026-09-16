// Phase 3: Cấu trúc nâng cao & Từ vựng chuyên sâu (8 topics)
module.exports = [
  {
    order_index: 1,
    title: "Đảo ngữ (Inversion)",
    book1_ref: "Chuyên đề 13, Phần 1-4, tr.251-265",
    book2_p1_ref: "Phần I, Chuyên đề 14, tr.81-86",
    book2_p2_ref: "Phần II, Chuyên đề 15, tr.213-220",
    theory_md: `## 🌟 1. Bản chất: Đảo ngữ là gì?

Đảo ngữ là biện pháp tu từ bằng cách **đảo TRỢ ĐỘNG TỪ lên trước Chủ ngữ** (giống hệt cách đặt câu hỏi), nhằm mục đích **nhấn mạnh** cảm xúc.
- *Câu bình thường:* I have never seen such a beautiful view.
- *Câu đảo ngữ:* **Never have I seen** such a beautiful view! (Chưa bao giờ tôi thấy cảnh đẹp như thế!).

---

## 📊 2. Bảng 5 cấu trúc đảo ngữ "chắc chắn gặp" trong đề thi

| Dạng đảo ngữ | Cấu trúc công thức |
| :--- | :--- |
| **Đứng đầu bằng từ Phủ định** *(Never, Rarely, Seldom, Hardly)* | **Từ phủ định + Trợ động từ + S + V** |
| **Vừa mới... thì...** *(No sooner)* | **No sooner + HAD + S + V3 + THAN + S + V2/ed** |
| **Vừa mới... thì...** *(Hardly)* | **Hardly / Scarcely + HAD + S + V3 + WHEN + S + V2/ed** |
| **Không những... mà còn...** | **Not only + Trợ động từ + S + V, but S also V** |
| **Chỉ sau khi / Chỉ khi...** | **Only when / Only after + S + V, Trợ động từ + S + V** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Never have I witnessed such courage.* $\→$ Từ phủ định "Never" đứng đầu câu, trợ động từ "have" đảo lên trước chủ ngữ "I".
* **Ví dụ 2:** *No sooner had the bell rung than the students rushed out.* $\→$ Vừa mới rung chuông thì học sinh ùa ra: *No sooner had S V3 than S V2/ed*.
* **Ví dụ 3:** *Had you told me earlier, I could have helped you.* $\→$ Đảo ngữ câu điều kiện loại 3 (bỏ If, đảo *Had* lên trước chủ ngữ).

---

> 💡 **THẦN CHÚ "NO SOONER ĐI VỚI THAN - HARDLY ĐI VỚI WHEN":**
> Chữ **No sooner** có đuôi so sánh hơn "-er" $\→$ so sánh hơn thì phải đi với **THAN**!

---

## 💡 4. Đảo ngữ câu điều kiện (Bỏ IF)

- **Loại 1:** *Should + S + V-bare, S + will + V*
- **Loại 2:** *Were + S + (to V), S + would + V*
- **Loại 3:** *Had + S + V3, S + would have + V3*`,
    examples: [
      "Never have I witnessed such courage. (Đảo ngữ từ phủ định: Never + have + S + V3)",
      "No sooner had the bell rung than the students rushed out. (No sooner... than)",
      "Had you told me earlier, I could have helped you. (Đảo ngữ điều kiện loại 3)"
    ],
    quiz: [
      {
        question: "No sooner ______ the house than it started to rain heavily.",
        options: ["had he left", "he had left", "did he leave", "he left"],
        correct_index: 0,
        explanation: "Cấu trúc đảo ngữ: No sooner + HAD + S + V3 + than... → Bắt buộc phải đảo trợ động từ had lên trước chủ ngữ he: had he left."
      },
      {
        question: "Hardly had the teacher arrived ______ the lesson began.",
        options: ["than", "when", "that", "after"],
        correct_index: 1,
        explanation: "Cấu trúc: Hardly had + S + V3 + WHEN + S + V2/ed (Hardly luôn đi với WHEN, còn No sooner mới đi với THAN)."
      },
      {
        question: "______ you need any further assistance, please do not hesitate to contact us.",
        options: ["Should", "Had", "Were", "If should"],
        correct_index: 0,
        explanation: "Đảo ngữ câu điều kiện loại 1 (bỏ If): Should + S + V-bare (Should you need = If you need)."
      }
    ]
  },
  {
    order_index: 2,
    title: "Câu chẻ (Cleft Sentences)",
    book1_ref: "Chuyên đề 14, Phần 1-3, tr.266-275",
    book2_p1_ref: "Phần I, Chuyên đề 15, tr.87-90",
    book2_p2_ref: "Phần II, Chuyên đề 16, tr.221-226",
    theory_md: `## 🌟 1. Bản chất câu chẻ: "Chính là... người mà/cái mà"

Câu chẻ (Cleft Sentence) dùng để **nhấn mạnh một đối tượng cụ thể** trong câu.
> 💡 **CÔNG THỨC VÀNG:**
> **IT + IS / WAS + [Thành phần cần nhấn mạnh] + THAT / WHO + S + V...**

---

## 📊 2. Bảng phân loại thành phần nhấn mạnh

| Thành phần nhấn mạnh | Cách viết câu chẻ |
| :--- | :--- |
| **Nhấn mạnh Chủ ngữ (S)** | *It is/was + S (người) + **THAT / WHO** + V...* |
| **Nhấn mạnh Tân ngữ (O)** | *It is/was + O (vật/người) + **THAT** + S + V...* |
| **Nhấn mạnh Trạng từ (Nơi chốn/Thời gian)** | *It is/was + Trạng từ + **THAT** + S + V...* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *It is my mother who always supports me.* $\→$ Nhấn mạnh chủ ngữ chỉ người: Chính là mẹ tôi, người luôn ủng hộ tôi.
* **Ví dụ 2:** *It was English that I found most challenging.* $\→$ Nhấn mạnh tân ngữ chỉ vật: Chính là môn tiếng Anh mà tôi thấy thử thách nhất.
* **Ví dụ 3:** *It was in this small town that he was born.* $\→$ Nhấn mạnh trạng từ nơi chốn: Bắt buộc dùng **THAT**, không dùng *where*.

---

> ⚠️ **CẠM BẪY: NHẤN MẠNH NƠI CHỐN DÙNG THAT, KHÔNG DÙNG WHERE:**
> Rất nhiều bạn thấy nơi chốn như *in Paris, in Hanoi* liền chọn WHERE $\→$ **SAI**. Công thức câu chẻ luôn luôn dùng **THAT**!`,
    examples: [
      "It is my mother who always supports me. (Nhấn mạnh chủ ngữ chỉ người)",
      "It was English that I found most challenging. (Nhấn mạnh tân ngữ)",
      "It was in this small town that he was born. (Nhấn mạnh trạng từ nơi chốn - dùng that, không dùng where)"
    ],
    quiz: [
      {
        question: "It was in Paris ______ they first met each other.",
        options: ["which", "where", "that", "when"],
        correct_index: 2,
        explanation: "Cấu trúc câu chẻ nhấn mạnh: It was + [Trạng từ nơi chốn] + THAT + S + V. Bắt buộc dùng THAT, không được dùng Where!"
      },
      {
        question: "It was my best friend ______ helped me overcome those difficult days.",
        options: ["whom", "who", "which", "whose"],
        correct_index: 1,
        explanation: "Nhấn mạnh chủ ngữ chỉ người (my best friend) thực hiện hành động 'helped' → dùng who (hoặc that)."
      },
      {
        question: "It was the red car ______ was damaged in the accident.",
        options: ["that", "whom", "who", "where"],
        correct_index: 0,
        explanation: "Nhấn mạnh vật (the red car) trong câu chẻ → dùng that."
      }
    ]
  },
  {
    order_index: 3,
    title: "Rút gọn mệnh đề (Reduced Clauses)",
    book1_ref: "Chuyên đề 15, Phần 1-4, tr.276-290",
    book2_p1_ref: "Phần I, Chuyên đề 16, tr.91-96",
    book2_p2_ref: "Phần II, Chuyên đề 17, tr.227-234",
    theory_md: `## 🌟 1. Bản chất: Làm câu văn ngắn gọn, súc tích

Rút gọn mệnh đề biến một mệnh đề phụ dài dòng thành một **Cụm phân từ (Participle)** gọn gàng:
1. Rút gọn **Mệnh đề quan hệ**.
2. Rút gọn **2 mệnh đề có CÙNG CHỦ NGỮ**.

---

## 📊 2. Bảng quy tắc rút gọn Mệnh đề quan hệ

| Thể của động từ | Cách rút gọn | Ví dụ gốc $\→$ Rút gọn |
| :--- | :--- | :--- |
| **Chủ động** | Bỏ đại từ & to be $\→$ **V-ING** | *The man who is standing $\→$ The man **standing**.* |
| **Bị động** | Bỏ đại từ & to be $\→$ **V3/ED** | *The car which was made $\→$ The car **made**.* |
| **Có số thứ tự:** *the first, the second, the only, the best* | Rút gọn thành **TO V** | *The first man who walked $\→$ The first man **to walk**.* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The boy playing the guitar is my cousin.* $\→$ Rút gọn từ câu chủ động: *The boy who is playing...* $\→$ *playing*.
* **Ví dụ 2:** *The book written by Nam Cao is famous.* $\→$ Rút gọn từ câu bị động: *The book which was written...* $\→$ *written*.
* **Ví dụ 3:** *Having passed the exam, she felt relieved.* $\→$ Rút gọn 2 mệnh đề cùng chủ ngữ, hành động "đỗ kỳ thi" xảy ra xong xuôi trước nên dùng *Having + V3*.

---

## 💡 4. Rút gọn 2 mệnh đề CÙNG CHỦ NGỮ

- **Chủ động:** Dùng **V-ing** (*Seeing the police, the thief ran away*).
- **Bị động:** Dùng **V3/ed** (*Attacked by the dog, he cried*).
- **Hoàn thành trước một việc khác:** Dùng **HAVING + V3** (*Having finished homework, he went to bed*).`,
    examples: [
      "The boy playing the guitar is my cousin. (Rút gọn chủ động: who is playing → playing)",
      "The book written by Nam Cao is famous. (Rút gọn bị động: which was written → written)",
      "Having passed the exam, she felt very relieved. (Having + V3 nhấn mạnh việc hoàn thành trước)"
    ],
    quiz: [
      {
        question: "______ all the tickets for the concert, they went home happily.",
        options: ["Selling", "Sold", "Having sold", "To sell"],
        correct_index: 2,
        explanation: "Hành động 'bán hết vé' đã xảy ra và hoàn thành xong xuôi trước khi họ 'đi về nhà' → rút gọn hoàn thành chủ động bằng Having + V3 (Having sold)."
      },
      {
        question: "The girl ______ next to the window is the most intelligent student in my class.",
        options: ["sits", "sitting", "sat", "to sit"],
        correct_index: 1,
        explanation: "Rút gọn mệnh đề quan hệ chủ động (who sits / who is sitting) → đưa về V-ing: sitting."
      },
      {
        question: "Neil Armstrong was the first human ______ on the surface of the moon.",
        options: ["stepping", "stepped", "to step", "steps"],
        correct_index: 2,
        explanation: "Có cụm từ chỉ thứ tự 'the first' → rút gọn mệnh đề quan hệ thành To V (to step)."
      }
    ]
  },
  {
    order_index: 4,
    title: "Mệnh lệnh thức & Câu hỏi đuôi (Tag Questions)",
    book1_ref: "Chuyên đề 16, Phần 1-4, tr.291-305",
    book2_p1_ref: "Phần I, Chuyên đề 17, tr.97-102",
    book2_p2_ref: "Phần II, Chuyên đề 18, tr.235-242",
    theory_md: `## 🌟 1. Bản chất câu hỏi đuôi: Quy tắc Âm - Dương

> 💡 **QUY TẮC ĐỐI XỨNG CỐT LÕI:**
> - Vế trước **KHẲNG ĐỊNH (+)** $\→$ Đuôi **PHỦ ĐỊNH (-)**.
> - Vế trước **PHỦ ĐỊNH (-)** $\→$ Đuôi **KHẲNG ĐỊNH (+)**.

---

## 📊 2. Bảng 7 trường hợp đặc biệt "gây lú" nhất đề thi

| Vế trước xuất hiện | Đuôi tương ứng bắt buộc |
| :--- | :--- |
| **I am...** | $\→$ **aren't I?** |
| **Let's + V...** (rủ rê) | $\→$ **shall we?** |
| **Câu mệnh lệnh:** *Open the door!* | $\→$ **will you?** |
| **Chủ ngữ là:** *Everyone, Nobody, Somebody* | Đại từ thay thế ở đuôi là **THEY** |
| **Chủ ngữ là:** *Everything, Nothing* | Đại từ thay thế ở đuôi là **IT** |
| **Có từ bán phủ định:** *never, rarely, seldom, hardly* | Đuôi phải ở dạng **KHẲNG ĐỊNH (+)** |
| **I think + S + V...** | Đuôi chia theo **MỆNH ĐỀ PHỤ PHÍA SAU** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *I am right, aren't I?* $\→$ Không có dạng "amn't I", bắt buộc dùng *aren't I*.
* **Ví dụ 2:** *Let's play football, shall we?* $\→$ Lời rủ rê *Let's* luôn có đuôi là *shall we*.
* **Ví dụ 3:** *Nobody came to the party, did they?* $\→$ *Nobody* mang nghĩa phủ định nên đuôi phải là khẳng định *did they*.`,
    examples: [
      "I am right, aren't I? (I am chuyển thành aren't I)",
      "Let's play football, shall we? (Let's luôn đi với shall we)",
      "Nobody knows the answer, do they? (Nobody đổi thành they, đuôi khẳng định)"
    ],
    quiz: [
      {
        question: "She rarely goes to the gym on weekdays, ______?",
        options: ["doesn't she", "does she", "isn't she", "is she"],
        correct_index: 1,
        explanation: "Trong câu có từ bán phủ định 'rarely' (hiếm khi) nên vế trước mang nghĩa phủ định → phần đuôi phải ở dạng khẳng định: does she?"
      },
      {
        question: "I am supposed to attend the meeting tomorrow, ______?",
        options: ["am not I", "amn't I", "aren't I", "don't I"],
        correct_index: 2,
        explanation: "Với chủ ngữ 'I am', câu hỏi đuôi đặc biệt luôn luôn là aren't I?"
      },
      {
        question: "Let's go out for dinner tonight, ______?",
        options: ["will you", "shall we", "do we", "don't we"],
        correct_index: 1,
        explanation: "Câu rủ rê bắt đầu bằng 'Let's' luôn có câu hỏi đuôi là shall we?"
      }
    ]
  },
  {
    order_index: 5,
    title: "Cụm động từ (Phrasal Verbs)",
    book1_ref: "Chuyên đề 17, Phần 1-6, tr.306-325",
    book2_p1_ref: "Phần I, Chuyên đề 18, tr.103-110",
    book2_p2_ref: "Phần II, Chuyên đề 19, tr.243-252",
    theory_md: `## 🌟 1. Phrasal Verb là gì?

**Phrasal Verb = Động từ (Verb) + Giới từ/Tiểu từ (Particle)**.
Khi ghép thêm giới từ, nghĩa của nó hoàn toàn biến đổi!
- *Look* = Nhìn $\→$ *Look for* = Tìm kiếm $\→$ *Look after* = Chăm sóc $\→$ *Look up* = Tra từ điển.

---

## 📊 2. Top 10 Phrasal Verbs hay thi nhất

| Cụm động từ | Ý nghĩa tiếng Việt |
| :--- | :--- |
| **Give up** | Từ bỏ |
| **Turn down** | 1. Vặn nhỏ <br> 2. **Từ chối** (lời mời) |
| **Put off** | **Trì hoãn** (= postpone) |
| **Take off** | 1. Cất cánh <br> 2. Cởi đồ |
| **Go off** | 1. Đổ chuông báo thức <br> 2. Phát nổ |
| **Look after** | Chăm sóc (= take care of) |
| **Break down** | Hỏng hóc (xe cộ, máy móc) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *She decided to give up smoking.* $\→$ *Give up* mang nghĩa từ bỏ một thói quen.
* **Ví dụ 2:** *The plane took off smoothly.* $\→$ *Take off* dùng cho máy bay mang nghĩa cất cánh rời mặt đất.
* **Ví dụ 3:** *My alarm didn't go off this morning.* $\→$ *Go off* dùng cho đồng hồ báo thức mang nghĩa reo chuông.

---

> 💡 **CHIẾN THUẬT HỌC THEO TIỂU TỪ:**
> - **OFF:** Rời đi, ngắt, tắt (*turn off, take off, put off*).
> - **UP:** Tăng lên, dứt điểm hoàn toàn (*give up, use up, speed up*).`,
    examples: [
      "She decided to give up smoking. (Give up = từ bỏ)",
      "The plane took off smoothly despite the rain. (Take off = cất cánh)",
      "My alarm didn't go off this morning, so I was late. (Go off = reo chuông)"
    ],
    quiz: [
      {
        question: "The meeting was ______ until next Monday because the director was sick.",
        options: ["turned on", "put off", "taken off", "given up"],
        correct_index: 1,
        explanation: "Dựa vào ngữ cảnh: Cuộc họp bị 'hoãn lại' đến thứ Hai tuần sau → put off (= postpone: hoãn lại)."
      },
      {
        question: "She had to ______ his wedding invitation because she was traveling abroad.",
        options: ["turn down", "take off", "look after", "break down"],
        correct_index: 0,
        explanation: "Turn down mang nghĩa là từ chối (lời mời, đề nghị) = refuse / reject."
      },
      {
        question: "My car suddenly ______ on the highway, so I had to call for help.",
        options: ["broke down", "went off", "put off", "gave up"],
        correct_index: 0,
        explanation: "Break down mang nghĩa là bị hỏng hóc (dành cho phương tiện, máy móc xe cộ)."
      }
    ]
  },
  {
    order_index: 6,
    title: "Collocations & Idioms",
    book1_ref: "Chuyên đề 18, Phần 1-5, tr.326-345",
    book2_p1_ref: "Phần I, Chuyên đề 19, tr.111-120",
    book2_p2_ref: "Phần II, Chuyên đề 20, tr.253-264",
    theory_md: `## 🌟 1. Collocation & Idiom là gì?

- **Collocation:** Cụm từ luôn đi liền với nhau theo thói quen bản xứ (*make a decision, do homework*).
- **Idiom:** Thành ngữ mang nghĩa bóng (*a piece of cake = rất dễ dàng*).

---

## 📊 2. Top Collocations & Idioms hay thi nhất

| Cụm từ | Nghĩa | Lưu ý |
| :--- | :--- | :--- |
| **Make a decision** | Ra quyết định | ❌ *do a decision* |
| **Make a mistake** | Mắc sai lầm | ❌ *do a mistake* |
| **Do homework / research** | Làm bài tập / nghiên cứu | ❌ *make homework* |
| **Pay attention to** | Chú ý đến | ❌ *give attention* |
| **A piece of cake** | Rất dễ dàng | Thành ngữ |
| **Under the weather** | Mệt mỏi, ốm nhẹ | Thành ngữ |
| **Cost an arm and a leg** | Cực kỳ đắt đỏ | Thành ngữ |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *She made a difficult decision.* $\→$ Dùng động từ *make* đi với *decision*.
* **Ví dụ 2:** *Don't worry, the exam is a piece of cake!* $\→$ *A piece of cake* là thành ngữ chỉ việc cực kỳ dễ.
* **Ví dụ 3:** *I am feeling a bit under the weather today.* $\→$ *Under the weather* nghĩa là cảm thấy trong người không được khỏe.`,
    examples: [
      "She made a difficult decision to leave her hometown. (Make a decision = ra quyết định)",
      "Don't worry, the interview is a piece of cake! (A piece of cake = rất dễ)",
      "I only see him once in a blue moon. (Once in a blue moon = hiếm khi)"
    ],
    quiz: [
      {
        question: "Students should pay ______ to what the teacher is explaining in class.",
        options: ["notice", "care", "attention", "sight"],
        correct_index: 2,
        explanation: "Collocation cố định: pay attention to something (chú ý, tập trung vào điều gì)."
      },
      {
        question: "I couldn't sleep well last night, so I feel a bit ______ today.",
        options: ["under the weather", "a piece of cake", "on cloud nine", "once in a blue moon"],
        correct_index: 0,
        explanation: "Under the weather = cảm thấy mệt mỏi, khó chịu trong người."
      },
      {
        question: "Every evening, my sister spends an hour ______ her homework.",
        options: ["making", "doing", "taking", "getting"],
        correct_index: 1,
        explanation: "Collocation chuẩn: do homework (làm bài tập về nhà), không dùng make homework."
      }
    ]
  },
  {
    order_index: 7,
    title: "Giới từ (Prepositions: In, On, At)",
    book1_ref: "Chuyên đề 19, Phần 1-4, tr.346-360",
    book2_p1_ref: "Phần I, Chuyên đề 21, tr.121-128",
    book2_p2_ref: "Phần II, Chuyên đề 21, tr.265-274",
    theory_md: `## 🌟 1. Hình tam giác ngược IN - ON - AT

- **IN (Đáy trên - Rộng lớn nhất):** Thế kỷ, năm, tháng, mùa, quốc gia, thành phố (*in 2024, in Hanoi*).
- **ON (Ở giữa - Cụ thể vừa phải):** Ngày trong tuần, ngày tháng, tên đường, bề mặt (*on Monday, on May 15th, on the table*).
- **AT (Đỉnh dưới - Chính xác nhất):** Giờ giấc, địa chỉ có số nhà, địa điểm cụ thể (*at 7 AM, at 123 Nguyen Trai St, at home*).

---

## 💬 2. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *We usually have lunch at 12:00 PM.* $\→$ Đi với giờ giấc chính xác dùng *at*.
* **Ví dụ 2:** *She was born on Monday, June 1st.* $\→$ Có ngày cụ thể trong tuần hoặc ngày trong tháng dùng *on*.
* **Ví dụ 3:** *He is very good at playing chess.* $\→$ Tính từ đi kèm giới từ: *good at* (giỏi về cái gì).

---

## 💡 3. Các giới từ đi kèm Tính từ thông dụng

- **good at / bad at:** giỏi / dở về
- **interested in:** thích thú với
- **famous for:** nổi tiếng vì
- **afraid of:** sợ hãi
- **proud of:** tự hào về`,
    examples: [
      "We usually have lunch at 12:00 PM. (At đi với giờ giấc cụ thể)",
      "She was born on Monday, June 1st. (On đi với ngày trong tuần / ngày tháng)",
      "He is very good at playing chess. (Good at = giỏi về việc gì)"
    ],
    quiz: [
      {
        question: "He was born ______ October 10th, 2005 ______ Hanoi.",
        options: ["in / at", "on / in", "at / on", "on / at"],
        correct_index: 1,
        explanation: "Có ngày tháng cụ thể (October 10th) dùng ON. Nơi chốn là thành phố lớn (Hanoi) dùng IN → on / in."
      },
      {
        question: "My younger brother is very interested ______ learning foreign languages.",
        options: ["on", "at", "in", "about"],
        correct_index: 2,
        explanation: "Cụm tính từ cố định: interested in something (hứng thú, yêu thích điều gì)."
      },
      {
        question: "The train will arrive ______ 8:30 PM sharp.",
        options: ["at", "on", "in", "by"],
        correct_index: 0,
        explanation: "Giờ giấc chính xác (8:30 PM) luôn đi với giới từ AT."
      }
    ]
  },
  {
    order_index: 8,
    title: "Cấu tạo từ & Đồng nghĩa - Trái nghĩa",
    book1_ref: "Chuyên đề 20, Phần 1-5, tr.361-380",
    book2_p1_ref: "Phần I, Chuyên đề 22, tr.129-138",
    book2_p2_ref: "Phần II, Chuyên đề 22-23, tr.275-290",
    theory_md: `## 🌟 1. Bản chất dạng bài Đồng nghĩa (CLOSEST) & Trái nghĩa (OPPOSITE)

Trong đề thi THPTQG có **4 câu từ vựng**:
- 2 câu **ĐỒNG NGHĨA (CLOSEST)**.
- 2 câu **TRÁI NGHĨA (OPPOSITE)**.
Cảnh báo: Đề yêu cầu tìm TRÁI NGHĨA nhưng người học hay chọn nhầm từ ĐỒNG NGHĨA vì quen tay!

---

## 💬 2. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Generous (hào phóng) $↔$ Mean (keo kiệt, bủn xỉn)* $\→$ Cặp từ trái nghĩa kinh điển.
* **Ví dụ 2:** *Intelligent (= smart / clever)* $\→$ Các từ đồng nghĩa mang nghĩa thông minh.
* **Ví dụ 3:** *Although the task was arduous, we finished it easily.* $\→$ Dựa vào từ nối "although" và vế "easily", ta đoán được *arduous* nghĩa là khó khăn gian nan.

---

> ⚠️ **BẪY SỐ 1: BẪY "OPPOSITE":**
> Thấy chữ **OPPOSITE**, hãy lấy bút khoanh tròn chữ này trên đề để nhắc mình chọn từ NGƯỢC NGHĨA!`,
    examples: [
      "Generous (hào phóng) is opposite to Mean (keo kiệt).",
      "She is very intelligent (= smart / clever: đồng nghĩa).",
      "Always read the instruction carefully: CLOSEST (đồng nghĩa) vs OPPOSITE (trái nghĩa)."
    ],
    quiz: [
      {
        question: "Mark the letter A, B, C, or D that is OPPOSITE in meaning: 'He is very generous; he always donates money to the poor.'",
        options: ["kind", "mean", "helpful", "wealthy"],
        correct_index: 1,
        explanation: "Generous = hào phóng. Đề yêu cầu tìm từ TRÁI NGHĨA (OPPOSITE) → chọn mean (keo kiệt, bủn xỉn)."
      },
      {
        question: "Mark the letter that is CLOSEST in meaning: 'The teacher praised him for his outstanding performance.'",
        options: ["terrible", "excellent", "poor", "ordinary"],
        correct_index: 1,
        explanation: "Outstanding = xuất sắc, nổi bật. Đề yêu cầu tìm từ ĐỒNG NGHĨA (CLOSEST) → chọn excellent."
      },
      {
        question: "Mark the letter that is OPPOSITE in meaning: 'The price of smartphones has increased rapidly.'",
        options: ["decreased", "raised", "soared", "expanded"],
        correct_index: 0,
        explanation: "Increase = tăng lên. Từ TRÁI NGHĨA là decrease = giảm xuống."
      }
    ]
  }
];
