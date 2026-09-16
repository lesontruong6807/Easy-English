// Phase 2: Ngữ pháp cốt lõi (10 topics)
module.exports = [
  {
    order_index: 1,
    title: "Các thì trong tiếng Anh (Tenses)",
    book1_ref: "Chuyên đề 3, Phần 1-12, tr.77-110",
    book2_p1_ref: "Phần I, Chuyên đề 2, tr.20-27",
    book2_p2_ref: "Phần II, Chuyên đề 2, tr.147-154",
    theory_md: `## 🌟 1. Bản chất của "Thì" (Tenses) cho người mất gốc

Trong tiếng Việt: *"Hôm qua tôi ăn, bây giờ tôi ăn, ngày mai tôi cũng ăn"*. Từ "ăn" giữ nguyên.
Nhưng trong tiếng Anh: **Mỗi mốc thời gian, động từ bắt buộc phải BIẾN HÌNH** (*eat $\\rightarrow$ ate $\\rightarrow$ will eat*).
Tiếng Anh có 12 thì, nhưng đề thi THPTQG chỉ xoay quanh **5 thì cốt lõi nhất** sau đây.

---

## 📊 2. Bảng 5 thì "gặp là có điểm" trong đề thi

| Thì (Tense) | Công thức Khẳng định | Dấu hiệu nhận biết điển hình | Cách dùng cốt lõi |
| :--- | :--- | :--- | :--- |
| **Hiện tại đơn (HTĐ)** | S + V(s/es) / S + am/is/are | *always, usually, every day, often, sometimes* | Sự thật hiển nhiên, thói quen lặp đi lặp lại |
| **Hiện tại tiếp diễn (HTTD)** | S + am/is/are + **V-ing** | *now, at the moment, right now, Look!, Listen!* | Hành động ĐANG diễn ra ngay lúc nói |
| **Quá khứ đơn (QKĐ)** | S + **V2/ed** / S + was/were | *yesterday, ago, last night, in 2010, when...* | Hành động đã xảy ra và ĐÃ CHẤM DỨT trong quá khứ |
| **Quá khứ tiếp diễn (QKTD)** | S + **was/were + V-ing** | *at 7 PM yesterday, at this time last year* | Đang diễn ra tại 1 THỜI ĐIỂM XÁC ĐỊNH trong quá khứ |
| **Hiện tại hoàn thành (HTHT)** | S + **have/has + V3/ed** | *since, for, already, yet, just, ever, recently* | Bắt đầu từ quá khứ, KÉO DÀI đến hiện tại |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết từng trường hợp

* **Ví dụ 1:** *She usually walks to school, but today she is cycling.* $\\rightarrow$ "usually walks" diễn tả thói quen thường nhật (Hiện tại đơn), còn "today she is cycling" diễn tả hành động khác lạ đang diễn ra hôm nay (Hiện tại tiếp diễn).
* **Ví dụ 2:** *When I arrived at the party, they were dancing.* $\\rightarrow$ Hành động họ đang khiêu vũ (*were dancing* - QKTD) thì tôi bất chợt bước vào (*arrived* - QKĐ xen vào).
* **Ví dụ 3:** *We have studied English for 5 years.* $\\rightarrow$ Việc học tiếng Anh bắt đầu từ 5 năm trước và hiện tại vẫn đang tiếp tục học (Hiện tại hoàn thành).

---

> 💡 **THẦN CHÚ PHỐI THÌ: HÀNH ĐỘNG ĐANG LÀM THÌ CÓ HÀNH ĐỘNG KHÁC XEN VÀO**
> - **Khi một hành động ĐANG XẢY RA (QKTD: was/were + V-ing)**
> - Thì một hành động khác **BẤT CHỢT XEN VÀO (QKĐ: V2/ed)**
> 👉 **THẦN CHÚ:** *While + Quá khứ tiếp diễn, Quá khứ đơn* (hoặc *When + Quá khứ đơn, Quá khứ tiếp diễn*).
> *Ví dụ:* While I **was taking** a bath, the phone **rang**.

---

> ⚠️ **CẠM BẪY ĐỀ THI: SINCE VÀ FOR:**
> - **SINCE + Mốc thời gian** (*since 2010, since last year, since I was young*).
>   👉 *Công thức vàng:* **HTHT + SINCE + QKĐ** (*I have lived here since I was born.*)
> - **FOR + Khoảng thời gian** (*for 3 years, for 5 months, for a long time*).`,
    examples: [
      "She usually walks to school, but today she is cycling. (Thói quen vs Đang diễn ra)",
      "When I arrived at the party, they were dancing. (Hành động xen vào vs Đang diễn ra)",
      "We have studied English for 5 years. (HTHT diễn tả việc kéo dài từ quá khứ đến nay)"
    ],
    quiz: [
      {
        question: "When the teacher came into the classroom, the students ______ a lot of noise.",
        options: ["are making", "were making", "made", "have made"],
        correct_index: 1,
        explanation: "Học sinh ĐANG làm ồn (were making - QKTD) thì giáo viên bước vào lớp (came - QKĐ xen vào)."
      },
      {
        question: "My father ______ for this company since 2015.",
        options: ["worked", "is working", "has worked", "works"],
        correct_index: 2,
        explanation: "Có 'since + mốc thời gian (2015)' là dấu hiệu kinh điển của thì Hiện tại hoàn thành (have/has + V3) → has worked."
      },
      {
        question: "Look! That strange man ______ to climb over the garden fence.",
        options: ["tries", "is trying", "tried", "has tried"],
        correct_index: 1,
        explanation: "Có thán từ 'Look!' (Hãy nhìn kìa!) báo hiệu hành động đang diễn ra ngay lúc nói → chia thì Hiện tại tiếp diễn: is trying."
      }
    ]
  },
  {
    order_index: 2,
    title: "Sự hòa hợp chủ ngữ – động từ (Subject-Verb Agreement)",
    book1_ref: "Chuyên đề 4, Phần 1-4, tr.111-125",
    book2_p1_ref: "Phần I, Chuyên đề 3, tr.28-33",
    book2_p2_ref: "Phần II, Chuyên đề 3, tr.155-160",
    theory_md: `## 🌟 1. Bản chất cốt lõi: "Chủ ngữ nào - Động từ nấy"

Nguyên tắc cơ bản:
- **Chủ ngữ số ÍT $\\rightarrow$ Động từ số ÍT** (*He plays, The cat is*).
- **Chủ ngữ số NHIỀU $\\rightarrow$ Động từ số NHIỀU** (*They play, Cats are*).
Tuy nhiên, trong đề thi THPTQG, người ra đề sẽ "kéo dài" chủ ngữ bằng các cụm chêm xen để bạn nhìn nhầm danh từ đứng gần động từ nhất!

---

## 📊 2. Các quy tắc chia động từ đặc biệt buộc phải nhớ

| Cấu trúc Chủ ngữ | Quy tắc chia Động từ | Ví dụ minh họa |
| :--- | :--- | :--- |
| **S1 + as well as / together with / along with + S2** | Chia theo **S1** (Chủ ngữ đầu tiên) | *The teacher, together with his students, **is** coming.* (Chia theo The teacher - số ít) |
| **Either... or / Neither... nor / Not only... but also** | Chia theo **S2** (Chủ ngữ gần động từ nhất) | *Neither you nor he **knows** the truth.* (Chia theo he - số ít) |
| **Đại từ bất định:** *Everyone, Someone, Nobody, Each, Every...* | **LUÔN CHIA SỐ ÍT** | *Everyone in the room **was** silent.* |
| **Khoảng cách, Thời gian, Tiền bạc, Cân nặng** | **LUÔN CHIA SỐ ÍT** | *Ten miles **is** a long distance.* <br> *100 dollars **is** too expensive.* |
| **The + Tính từ** (chỉ 1 tập hợp người) | **LUÔN CHIA SỐ NHIỀU** | *The rich **are** not always happy.* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The teacher, together with her students, is visiting the museum.* $\\rightarrow$ Cụm "together with her students" là phần bổ nghĩa chêm vào. Chủ ngữ chính là "The teacher" (số ít) nên động từ là *is*.
* **Ví dụ 2:** *Fifty dollars is too much for this shirt.* $\\rightarrow$ "Fifty dollars" là một khoản tiền được coi là 1 khối tổng thể duy nhất nên chia động từ số ít *is*.
* **Ví dụ 3:** *The poor in this region need urgent help.* $\\rightarrow$ "The poor" = những người nghèo (tập hợp nhiều người), động từ chia số nhiều nguyên mẫu *need*.

---

> 💡 **THẦN CHÚ "BÊN GẦN - BÊN XA":**
> 1. Thấy **AS WELL AS, TOGETHER WITH, WITH**: Chia theo đứa **ĐỨNG ĐẦU TIÊN (XA ĐỘNG TỪ)**.
> 2. Thấy **OR, NOR, BUT ALSO**: Chia theo đứa **ĐỨNG GẦN ĐỘNG TỪ NHẤT**.

---

> ⚠️ **CẠM BẪY ĐỀ THI: "A NUMBER OF" VS "THE NUMBER OF":**
> - **A number of + N số nhiều $\\rightarrow$ ĐỘNG TỪ SỐ NHIỀU** (*A number of students **are** absent*).
> - **The number of + N số nhiều $\\rightarrow$ ĐỘNG TỪ SỐ ÍT** (*The number of students **is** increasing*).
> 👉 *Mẹo nhớ:* **A** (viết tắt của **A**LL $\\rightarrow$ Số nhiều) / **THE** (viết tắt của **THIỂU** $\\rightarrow$ Số ít).`,
    examples: [
      "The teacher, together with her students, is (số ít) visiting the museum.",
      "A number of cars were parked outside vs The number of cars is increasing.",
      "Fifty dollars is (số ít - tiền bạc) too much for this shirt."
    ],
    quiz: [
      {
        question: "The manager, along with three assistants, ______ currently attending the conference.",
        options: ["are", "is", "were", "have been"],
        correct_index: 1,
        explanation: "Chủ ngữ chính là The manager (số ít), cụm 'along with three assistants' không ảnh hưởng đến động từ → chia số ít: is."
      },
      {
        question: "The number of students who passed the entrance examination ______ significantly this year.",
        options: ["have increased", "has increased", "are increasing", "increase"],
        correct_index: 1,
        explanation: "Cấu trúc 'The number of + N số nhiều' luôn đi với ĐỘNG TỪ SỐ ÍT (The = Thiểu = Số ít) → has increased."
      },
      {
        question: "Neither John nor his friends ______ to go to the cinema tonight.",
        options: ["wants", "want", "is wanting", "has wanted"],
        correct_index: 1,
        explanation: "Cấu trúc 'Neither S1 nor S2': động từ chia theo chủ ngữ gần nó nhất (his friends - số nhiều) → chọn want nguyên mẫu."
      }
    ]
  },
  {
    order_index: 3,
    title: "To V vs V-ing (Động từ nguyên mẫu vs Danh động từ)",
    book1_ref: "Chuyên đề 5, Phần 1-5, tr.126-140",
    book2_p1_ref: "Phần I, Chuyên đề 4, tr.34-39",
    book2_p2_ref: "Phần II, Chuyên đề 4, tr.161-166",
    theory_md: `## 🌟 1. Bản chất: Khi 2 động từ đi liền nhau

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

* **Ví dụ 1:** *I avoided meeting him at the supermarket.* $\\rightarrow$ Động từ *avoid* (tránh né) bắt buộc theo sau là V-ing (*meeting*).
* **Ví dụ 2:** *He stopped smoking because it was bad for his health.* $\\rightarrow$ *Stop + V-ing* nghĩa là dừng hẳn, cai hẳn một hành động/thói quen.
* **Ví dụ 3:** *I am looking forward to hearing from you.* $\\rightarrow$ Sau cụm *look forward to*, chữ "to" là giới từ nên bắt buộc cộng V-ing (*hearing*).

---

## 💡 4. Các động từ đi với CẢ HAI nhưng ĐỔI NGHĨA HOÀN TOÀN

| Động từ | Đi với **TO V** | Đi với **V-ING** |
| :--- | :--- | :--- |
| **REMEMBER** | Nhớ **PHẢI LÀM** việc gì trong tương lai *(Remember to lock the door!)* | Nhớ **ĐÃ LÀM** việc gì trong quá khứ *(I remember locking the door.)* |
| **FORGET** | Quên **PHẢI LÀM** việc gì *(Don't forget to do homework.)* | Quên việc **ĐÃ TỪNG LÀM** trong quá khứ *(I'll never forget meeting her.)* |
| **STOP** | Dừng lại **ĐỂ LÀM** việc khác *(He stopped to smoke - dừng đi để hút thuốc)* | **DỪNG HẲN** hành động đang làm *(He stopped smoking - cai thuốc lá)* |
| **TRY** | **CỐ GẮNG** làm việc khó *(I try to pass the exam.)* | **THỬ** làm việc gì xem sao *(Try adding some salt.)* |

---

> ⚠️ **CẠM BẪY "TO + V-ING":**
> Các cụm sau chữ "to" là **GIỚI TỪ** nên bắt buộc phải cộng **V-ING**:
> - *look forward to + V-ing* (mong đợi làm gì)
> - *be / get used to + V-ing* (quen với việc gì)
> - *object to + V-ing* (phản đối làm gì)`,
    examples: [
      "I avoided meeting him at the supermarket. (avoid + V-ing)",
      "He stopped smoking because it was bad for his health. (stop + V-ing: dừng hẳn)",
      "I am looking forward to hearing from you soon. (look forward to + V-ing)"
    ],
    quiz: [
      {
        question: "I am really looking forward to ______ you at the ceremony tomorrow.",
        options: ["see", "seeing", "to see", "saw"],
        correct_index: 1,
        explanation: "Cấu trúc cố định: look forward to + V-ing (mong đợi việc gì). Rất nhiều bạn thấy chữ 'to' liền chọn V-bare là dính bẫy!"
      },
      {
        question: "Don't forget ______ the lights before you leave the room.",
        options: ["turn off", "turning off", "to turn off", "turned off"],
        correct_index: 2,
        explanation: "Forget + to V: Quên phải làm gì trong tương lai (Đừng quên việc phải tắt đèn nhé!)."
      },
      {
        question: "My father decided ______ a new car after saving money for two years.",
        options: ["buying", "buy", "to buy", "bought"],
        correct_index: 2,
        explanation: "Động từ decide (quyết định) luôn đi kèm động từ nguyên mẫu có To: decide to do something."
      }
    ]
  },
  {
    order_index: 4,
    title: "Động từ khuyết thiếu (Modal Verbs)",
    book1_ref: "Chuyên đề 6, Phần 1-6, tr.141-155",
    book2_p1_ref: "Phần I, Chuyên đề 5, tr.40-44",
    book2_p2_ref: "Phần II, Chuyên đề 5, tr.167-172",
    theory_md: `## 🌟 1. Bản chất động từ khuyết thiếu (Modal Verbs)

Động từ khuyết thiếu (*can, could, may, might, must, should, will*) dùng để diễn tả **khả năng, sự bắt buộc hoặc lời khuyên**.
**Quy tắc chung:** Sau modal verbs **LUÔN LUÔN LÀ V NGUYÊN THỂ (V-bare)**!

---

## 📊 2. Bảng phân biệt các Modal Verbs hay thi nhất

| Từ | Nghĩa & Mức độ | Ví dụ minh họa | Lưu ý quan trọng |
| :--- | :--- | :--- | :--- |
| **Must** | Phải (Bắt buộc nội tâm/người nói) | *You must stop at red lights.* | Phủ định: **Mustn't = CẤM** |
| **Have to** | Phải (Bắt buộc do luật lệ, ngoại cảnh) | *I have to wear uniform at school.* | Phủ định: **Don't have to = KHÔNG CẦN** |
| **Should** | Nên (Lời khuyên) | *You should go to bed early.* | Tương đương *Ought to / Had better* |
| **Can / Could** | Có thể (Khả năng hiện tại / quá khứ) | *She can speak English.* | Chỉ năng lực thực tế |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *You mustn't park your car here; it's illegal.* $\\rightarrow$ *Mustn't* mang nghĩa cấm đoán hoàn toàn, vi phạm luật pháp.
* **Ví dụ 2:** *The streets are wet; it must have rained last night.* $\\rightarrow$ *Must have + V3* dùng để suy đoán chắc chắn 99% một việc đã xảy ra trong quá khứ dựa trên bằng chứng cụ thể.
* **Ví dụ 3:** *You should have studied harder for the exam.* $\\rightarrow$ *Should have + V3* diễn tả sự nuối tiếc, lẽ ra nên làm gì trong quá khứ nhưng đã không làm.

---

## 💡 4. Điểm 8+: Modal Verbs trong quá khứ (Modal + Have + V3)

| Cấu trúc | Ý nghĩa | Ví dụ |
| :--- | :--- | :--- |
| **Must have + V3** | **Chắc hẳn là đã** (Suy đoán 99% dựa trên bằng chứng ở quá khứ) | *The ground is wet. It **must have rained**.* |
| **Can't have + V3** | **Không thể nào đã** (Khẳng định việc không thể xảy ra) | *He **can't have stolen** it; he was with me.* |
| **Should have + V3** | **Lẽ ra nên làm** (nhưng thực tế đã không làm $\\rightarrow$ tiếc nuối) | *I **should have listened** to you.* |`,
    examples: [
      "You mustn't park your car here; it's illegal. (Mustn't = Cấm đỗ xe)",
      "The streets are wet; it must have rained last night. (Must have V3 = Chắc hẳn là đã)",
      "I should have listened to my mother's advice. (Should have V3 = Lẽ ra nên làm gì)"
    ],
    quiz: [
      {
        question: "John's car is not outside his house. He ______ out.",
        options: ["must go", "must have gone", "should go", "can go"],
        correct_index: 1,
        explanation: "Có bằng chứng thực tế ở hiện tại (xe không có ở nhà) để suy đoán việc đã diễn ra trong quá khứ → dùng Must have + V3 (must have gone: chắc hẳn là đã đi ra ngoài)."
      },
      {
        question: "Tomorrow is Sunday, so I ______ get up early.",
        options: ["mustn't", "don't have to", "can't", "shouldn't"],
        correct_index: 1,
        explanation: "Ngày mai là Chủ nhật nên tôi không cần phải dậy sớm (thích dậy thì dậy, không ai cấm) → dùng don't have to (không bắt buộc)."
      },
      {
        question: "You ______ touch that wire; it is extremely dangerous!",
        options: ["needn't", "mustn't", "don't have to", "may not"],
        correct_index: 1,
        explanation: "Hành động chạm vào dây điện rất nguy hiểm nên bị CẤM ĐOÁN → dùng mustn't (cấm không được làm)."
      }
    ]
  },
  {
    order_index: 5,
    title: "Câu bị động (Passive Voice)",
    book1_ref: "Chuyên đề 7, Phần 1-5, tr.156-170",
    book2_p1_ref: "Phần I, Chuyên đề 6, tr.45-50",
    book2_p2_ref: "Phần II, Chuyên đề 6, tr.173-178",
    theory_md: `## 🌟 1. Bản chất câu bị động: Khi nào dùng?

Khi ta muốn **nhấn mạnh vào đối tượng bị tác động** (thay vì người làm), hoặc **không biết ai làm**, ta dùng câu bị động.
- *Chủ động:* Con mèo ăn con cá (*The cat ate the fish*).
- *Bị động:* Con cá **bị ăn** bởi con mèo (*The fish **was eaten** by the cat*).

---

## 📊 2. Công thức gốc: BE + V3/ED

| Thì | Câu Chủ động (Active) | Câu Bị động (Passive = BE + V3) |
| :--- | :--- | :--- |
| **Hiện tại đơn** | S + V(s/es) + O | S + **am / is / are + V3/ed** + (by O) |
| **Hiện tại tiếp diễn** | S + am/is/are + V-ing + O | S + **am / is / are + BEING + V3/ed** |
| **Quá khứ đơn** | S + V2/ed + O | S + **was / were + V3/ed** + (by O) |
| **Hiện tại hoàn thành**| S + have/has + V3 + O | S + **have / has + BEEN + V3/ed** |
| **Tương lai đơn** | S + will + V + O | S + **will + BE + V3/ed** |
| **Modal Verbs** | S + can/must + V + O | S + **can / must + BE + V3/ed** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The house was built in 1995.* $\\rightarrow$ Ngôi nhà được xây trong quá khứ nên to be chia là *was* + V3 *built*.
* **Ví dụ 2:** *I had my hair cut yesterday.* $\\rightarrow$ Cấu trúc nhờ vả: *have something done (V3)*, tôi nhờ thợ cắt tóc cho mình chứ không tự cắt.
* **Ví dụ 3:** *It is said that he is very rich.* $\\rightarrow$ Bị động của động từ quan điểm ý kiến (*People say that...*).

---

## 💡 4. Cấu trúc Nhờ vả (Causative Form: Have / Get)

- **HAVE somebody DO something $\\rightarrow$ HAVE something DONE (V3)** (Nhờ ai làm gì $\\rightarrow$ Có cái gì được làm).
- **GET somebody TO DO something $\\rightarrow$ GET something DONE (V3)**.`,
    examples: [
      "The house was built in 1995. (Bị động quá khứ đơn)",
      "I had my hair cut yesterday. (Cấu trúc nhờ vả: have something done)",
      "It is reported that the accident was caused by fog. (Bị động khách quan)"
    ],
    quiz: [
      {
        question: "This ancient bridge ______ by the local government in 2020.",
        options: ["built", "was built", "is built", "has been built"],
        correct_index: 1,
        explanation: "Cây cầu được xây trong quá khứ có mốc thời gian rõ ràng (in 2020) → chia bị động quá khứ đơn: was built."
      },
      {
        question: "I need to have my laptop ______ because the screen is cracked.",
        options: ["repair", "to repair", "repaired", "repairing"],
        correct_index: 2,
        explanation: "Cấu trúc nhờ vả bị động: have + something + V3 (have my laptop repaired: mang laptop đi sửa)."
      },
      {
        question: "A new shopping mall ______ in our neighborhood at the moment.",
        options: ["is built", "is being built", "was built", "has built"],
        correct_index: 1,
        explanation: "Có 'at the moment' (ngay lúc này) → thì Hiện tại tiếp diễn ở thể bị động: is being built."
      }
    ]
  },
  {
    order_index: 6,
    title: "Câu trực tiếp – gián tiếp (Reported Speech)",
    book1_ref: "Chuyên đề 8, Phần 1-4, tr.171-185",
    book2_p1_ref: "Phần I, Chuyên đề 8, tr.51-55",
    book2_p2_ref: "Phần II, Chuyên đề 8, tr.179-184",
    theory_md: `## 🌟 1. Bản chất: Tường thuật lại lời của người khác

Để chuyển từ trực tiếp sang gián tiếp, bắt buộc phải thực hiện **3 BƯỚC ĐỔI**:
1. **Đổi Đại từ** (ngôi xưng hô).
2. **Lùi 1 Thì** (về quá khứ).
3. **Đổi Trạng từ chỉ thời gian và nơi chốn**.

---

## 📊 2. Bảng lùi thì & đổi trạng từ thần tốc

| Trực tiếp | Gián tiếp (Lùi 1 thì) | Trạng từ trực tiếp | Trạng từ gián tiếp |
| :--- | :--- | :--- | :--- |
| Hiện tại đơn (V1) | $\\rightarrow$ **Quá khứ đơn (V2)** | **now** | $\\rightarrow$ **then** |
| Hiện tại tiếp diễn | $\\rightarrow$ **Quá khứ tiếp diễn** | **today** | $\\rightarrow$ **that day** |
| Quá khứ đơn (V2) | $\\rightarrow$ **Quá khứ hoàn thành (had V3)** | **yesterday** | $\\rightarrow$ **the previous day** |
| Hiện tại hoàn thành | $\\rightarrow$ **Quá khứ hoàn thành (had V3)** | **tomorrow** | $\\rightarrow$ **the following day** |
| **will** | $\\rightarrow$ **would** | **this / here** | $\\rightarrow$ **that / there** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Nam said: "I am tired." $\\rightarrow$ Nam said that he was tired.* Đổi ngôi "I" thành "he", lùi thì "am" thành "was".
* **Ví dụ 2:** *She asked me: "Do you like coffee?" $\\rightarrow$ She asked me if I liked coffee.* Câu hỏi Yes/No mượn liên từ "if/whether", lùi thì "like" thành "liked".
* **Ví dụ 3:** *He asked: "Where do you live?" $\\rightarrow$ He asked me where I lived.* Giữ nguyên từ để hỏi "where", đưa về dạng trần thuật S + V.

---

> 💡 **CÂU HỎI TRONG LỜI NÓI GIÁN TIẾP:**
> Trong câu gián tiếp, câu hỏi biến thành câu trần thuật: **KHÔNG ĐẢO TRỢ ĐỘNG TỪ NỮA**, đưa về dạng khẳng định: S + V!`,
    examples: [
      "He said: 'I am playing games' → He said that he was playing games.",
      "She asked me: 'Are you hungry?' → She asked me if I was hungry.",
      "The police asked where he had been the previous night."
    ],
    quiz: [
      {
        question: "'I will visit my grandparents tomorrow,' said Linda. → Linda said that she ______ her grandparents the following day.",
        options: ["will visit", "would visit", "visited", "had visited"],
        correct_index: 1,
        explanation: "Khi chuyển sang gián tiếp có động từ trần thuật ở quá khứ (said), 'will' bắt buộc phải lùi thành 'would'."
      },
      {
        question: "He asked me: 'Where do you live?' → He asked me where ______.",
        options: ["did I live", "I lived", "do I live", "I do live"],
        correct_index: 1,
        explanation: "Trong câu hỏi gián tiếp Wh-question, câu đưa về dạng trần thuật S + V (không đảo trợ động từ did lên trước) → where I lived."
      },
      {
        question: "'Did you finish your homework?' my mother asked. → My mother asked me ______ my homework.",
        options: ["if I finished", "if I had finished", "whether had I finished", "did I finish"],
        correct_index: 1,
        explanation: "Câu hỏi Yes/No ở quá khứ đơn (Did you finish), chuyển sang gián tiếp dùng 'if' và lùi thì về Quá khứ hoàn thành (had finished)."
      }
    ]
  },
  {
    order_index: 7,
    title: "Mệnh đề quan hệ (Relative Clauses)",
    book1_ref: "Chuyên đề 9, Phần 1-5, tr.186-200",
    book2_p1_ref: "Phần I, Chuyên đề 9, tr.56-61",
    book2_p2_ref: "Phần II, Chuyên đề 9, tr.185-190",
    theory_md: `## 🌟 1. Bản chất: Mệnh đề quan hệ dùng để làm gì?

Mệnh đề quan hệ sinh ra để **bổ nghĩa, làm rõ cho một danh từ** đứng ngay trước nó.
- *Tôi thích cô gái.* + *Cô gái ngồi cạnh tôi.* $\\rightarrow$ Tôi thích cô gái **người mà** ngồi cạnh tôi (*I like the girl **who** sits next to me*).

---

## 📊 2. Bảng phân loại các Đại từ quan hệ cốt lõi

| Đại từ quan hệ | Thay thế cho | Chức năng trong mệnh đề | Ví dụ minh họa |
| :--- | :--- | :--- | :--- |
| **WHO** | Người | Làm **Chủ ngữ (S)** hoặc Tân ngữ | *The man **who** teaches us is kind.* |
| **WHOM** | Người | Chỉ làm **Tân ngữ (O)** (sau là S + V) | *The girl **whom** you met is Lan.* |
| **WHICH** | Vật, đồ vật | Làm Chủ ngữ hoặc Tân ngữ | *The car **which** is red is mine.* |
| **THAT** | Cả người và vật | Thay cho Who, Whom, Which trong câu **KHÔNG DẤU PHẨY** | *The book **that** I bought is cheap.* |
| **WHOSE** | Sở hữu | Đi kèm danh từ: **N1 + whose + N2** | *The boy **whose** bike was lost.* |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *The girl who is singing on stage is my sister.* $\\rightarrow$ "who" thay cho danh từ người "The girl" và làm chủ ngữ cho động từ *is singing*.
* **Ví dụ 2:** *The house which has a blue door belongs to Mr. Nam.* $\\rightarrow$ "which" thay cho danh từ chỉ vật "The house".
* **Ví dụ 3:** *Mr. Nam, whose son won the scholarship, is proud.* $\\rightarrow$ Giữa "Mr. Nam" và "son" là quan hệ sở hữu (con trai của ông Nam) nên dùng *whose*.

---

> ⚠️ **2 NGUYÊN TẮC BẤT DI BẤT DỊCH VỚI CHỮ "THAT":**
> 1. **KHÔNG DÙNG THAT sau DẤU PHẨY** (,).
> 2. **KHÔNG DÙNG THAT sau GIỚI TỪ** (*in that, of that* $\\rightarrow$ SAI).`,
    examples: [
      "The girl who is singing on stage is my sister. (Who thay thế cho người làm chủ ngữ)",
      "The house which has a blue door belongs to Mr. Brown. (Which thay thế cho vật)",
      "Mr. Nam, whose son won the scholarship, is very proud. (Whose chỉ sự sở hữu)"
    ],
    quiz: [
      {
        question: "My uncle, ______ car was stolen last week, has bought a new one.",
        options: ["who", "which", "whose", "that"],
        correct_index: 2,
        explanation: "Giữa 'My uncle' và 'car' có mối quan hệ sở hữu (chiếc xe CỦA chú tôi) → bắt buộc dùng whose. (Có dấu phẩy nên không dùng that)."
      },
      {
        question: "The man ______ you met at the airport yesterday is a famous professor.",
        options: ["which", "whom", "whose", "where"],
        correct_index: 1,
        explanation: "The man là người, đóng vai trò tân ngữ (bạn đã gặp ông ấy: you met him) → dùng whom (hoặc who)."
      },
      {
        question: "This is the hotel ______ we spent our summer vacation last year.",
        options: ["which", "where", "that", "whose"],
        correct_index: 1,
        explanation: "The hotel là nơi chốn, vế sau diễn tả hành động 'chúng tôi đã nghỉ mát TẠI ĐÓ' (in which) → dùng trạng từ quan hệ where."
      }
    ]
  },
  {
    order_index: 8,
    title: "Mệnh đề trạng ngữ & Liên từ",
    book1_ref: "Chuyên đề 10, Phần 1-6, tr.201-218",
    book2_p1_ref: "Phần I, Chuyên đề 10, tr.62-68",
    book2_p2_ref: "Phần II, Chuyên đề 10, tr.191-198",
    theory_md: `## 🌟 1. Bản chất liên từ trong tiếng Anh

Quy tắc sống còn:
- **Liên từ:** Đi kèm một **MỆNH ĐỀ (S + V)** (*Because it rained...*)
- **Giới từ:** Đi kèm một **CỤM DANH TỪ hoặc V-ING** (*Because of the rain...*)

---

## 📊 2. Bảng 2 cặp liên từ "kinh điển" hay thi nhất

| Đi với Mệnh đề (S + V) | Đi với Cụm danh từ / V-ing | Nghĩa |
| :--- | :--- | :--- |
| **Although / Even though / Though + S + V** | **Despite / In spite of + Noun / V-ing** | Mặc dù (Tương phản) |
| **Because / Since / As + S + V** | **Because of / Due to / Owing to + Noun / V-ing** | Bởi vì (Nguyên nhân) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *Although he was sick, he went to school.* $\\rightarrow$ "he was sick" có chủ ngữ và vị ngữ nên dùng liên từ *Although*.
* **Ví dụ 2:** *Because of the heavy rain, we cancelled the match.* $\\rightarrow$ "the heavy rain" là một cụm danh từ nên dùng giới từ *Because of*.
* **Ví dụ 3:** *The film was so boring that I fell asleep.* $\\rightarrow$ Cấu trúc: *so + Adj + that* (quá đến nỗi mà).

---

> ⚠️ **CẠM BẪY ĐỀ THI: KHÔNG DÙNG CẢ ALTHOUGH VÀ BUT:**
> Đã có **ALTHOUGH** thì **TUYỆT ĐỐI KHÔNG DÙNG BUT** trong cùng một câu!`,
    examples: [
      "Although he tried his best, he couldn't win the prize. (Although + S + V)",
      "Because of the traffic jam, we arrived late. (Because of + Cụm N)",
      "The movie was so interesting that I watched it twice. (So + Adj + that)"
    ],
    quiz: [
      {
        question: "______ the bad weather, the flight took off on schedule.",
        options: ["Although", "Despite", "Because", "In spite"],
        correct_index: 1,
        explanation: "'the bad weather' là cụm danh từ → dùng Despite mang nghĩa 'Mặc dù thời tiết xấu'. (In spite thiếu chữ 'of')."
      },
      {
        question: "We decided to stay at home ______ it was raining cats and dogs.",
        options: ["because", "because of", "despite", "although"],
        correct_index: 0,
        explanation: "Vế sau 'it was raining cats and dogs' là một mệnh đề đầy đủ S + V mang ý chỉ nguyên nhân → dùng because."
      },
      {
        question: "The tea was ______ hot that I couldn't drink it immediately.",
        options: ["such", "so", "too", "very"],
        correct_index: 1,
        explanation: "Cấu trúc: So + Adj + that + S + V (quá... đến nỗi mà). 'Hot' là tính từ nên đi với 'so'."
      }
    ]
  },
  {
    order_index: 9,
    title: "Cấu trúc So sánh (Comparisons)",
    book1_ref: "Chuyên đề 11, Phần 1-4, tr.219-232",
    book2_p1_ref: "Phần I, Chuyên đề 11, tr.69-74",
    book2_p2_ref: "Phần II, Chuyên đề 11, tr.199-204",
    theory_md: `## 🌟 1. Phân biệt Tính từ ngắn vs Tính từ dài

- **Tính từ ngắn:** Có **1 âm tiết** (*tall, fast*) hoặc **2 âm tiết tận cùng bằng: -y, -er, -ow, -le, -et** (*happy, clever, simple*).
- **Tính từ dài:** Có **từ 2 âm tiết trở lên** (*expensive, beautiful*).

---

## 📊 2. Bảng 3 dạng so sánh chuẩn

| Loại so sánh | Tính từ ngắn | Tính từ dài |
| :--- | :--- | :--- |
| **So sánh BẰNG** | **as + Adj + as** (*as tall as*) | **as + Adj + as** (*as expensive as*) |
| **So sánh HƠN** | **Adj-er + THAN** (*taller than*) | **MORE + Adj + THAN** (*more expensive than*) |
| **So sánh NHẤT** | **THE + Adj-est** (*the tallest*) | **THE MOST + Adj** (*the most expensive*) |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *My brother is taller than me.* $\\rightarrow$ "tall" là tính từ ngắn nên thêm đuôi -er thành *taller than*.
* **Ví dụ 2:** *This phone is more expensive than that one.* $\\rightarrow$ "expensive" là tính từ dài nên dùng *more + Adj + than*.
* **Ví dụ 3:** *The more you practice, the better you become.* $\\rightarrow$ Cấu trúc so sánh kép "Càng... càng": *The + so sánh hơn..., The + so sánh hơn...*

---

## 💡 4. So sánh kép: "CÀNG... CÀNG..." (Điểm 8+)

> 💡 **CÔNG THỨC:**
> **THE + So sánh hơn (S + V), THE + So sánh hơn (S + V)**
> - *The older you get, the wiser you become.*`,
    examples: [
      "My brother is taller than me. (So sánh hơn tính từ ngắn: Adj-er than)",
      "This smartphone is more expensive than that one. (So sánh hơn tính từ dài)",
      "The more you practice, the better you speak English. (So sánh kép: Càng... càng)"
    ],
    quiz: [
      {
        question: "The harder you work, ______ results you will achieve.",
        options: ["better", "the better", "the best", "best"],
        correct_index: 1,
        explanation: "Cấu trúc so sánh kép 'Càng... càng': The + so sánh hơn..., The + so sánh hơn... → The harder..., the better..."
      },
      {
        question: "Mount Everest is ______ mountain in the world.",
        options: ["the highest", "higher", "the most high", "highest"],
        correct_index: 0,
        explanation: "So sánh nhất với tính từ ngắn (high): The + Adj-est → the highest."
      },
      {
        question: "His English is getting ______ day by day.",
        options: ["good and good", "better and better", "more good", "best and best"],
        correct_index: 1,
        explanation: "Cấu trúc 'càng ngày càng...': So sánh hơn and So sánh hơn → better and better (ngày càng giỏi hơn)."
      }
    ]
  },
  {
    order_index: 10,
    title: "Câu giả định & Câu điều kiện (Conditionals)",
    book1_ref: "Chuyên đề 12, Phần 1-5, tr.233-250",
    book2_p1_ref: "Phần I, Chuyên đề 13, tr.75-80",
    book2_p2_ref: "Phần II, Chuyên đề 14, tr.205-212",
    theory_md: `## 🌟 1. Bản chất câu điều kiện: Lùi thì theo mức độ giả định

Càng giả định điều **phi thực tế**, động từ càng phải **lùi sâu về quá khứ**!

---

## 📊 2. Bảng 3 loại câu điều kiện căn bản

| Loại | Mức độ thực tế | Mệnh đề IF | Mệnh đề Chính |
| :--- | :--- | :--- | :--- |
| **Loại 1** | Có thể xảy ra ở **Hiện tại / Tương lai** | **Hiện tại đơn (V1)** | **will / can + V-bare** |
| **Loại 2** | Giả định **KHÔNG CÓ THẬT ở HIỆN TẠI** | **Quá khứ đơn (V2/ed)** *(to be dùng WERE)* | **would / could + V-bare** |
| **Loại 3** | Giả định **KHÔNG CÓ THẬT ở QUÁ KHỨ** | **Quá khứ hoàn thành (had V3)** | **would + HAVE + V3** |

---

## 💬 3. Ví dụ minh họa & Phân tích chi tiết

* **Ví dụ 1:** *If it rains tomorrow, I will stay at home.* $\\rightarrow$ Điều kiện loại 1 có thể xảy ra ở tương lai.
* **Ví dụ 2:** *If I were you, I would accept this job.* $\\rightarrow$ Điều kiện loại 2 giả định trái ngược hiện tại (tôi không thể là bạn), to be luôn dùng *were*.
* **Ví dụ 3:** *If she had caught the bus, she wouldn't have been late.* $\\rightarrow$ Điều kiện loại 3 tiếc nuối việc trong quá khứ (thực tế quá khứ cô ấy đã lỡ xe).

---

> ⚠️ **CẠM BẪY VỚI "UNLESS" (TRỪ KHI):**
> **UNLESS = IF... NOT**. Vì *Unless* đã mang nghĩa phủ định, nên trong mệnh đề Unless **KHÔNG DÙNG NOT**!`,
    examples: [
      "If you study hard, you will pass the exam. (Điều kiện loại 1 - có thật)",
      "If I were you, I would accept the job offer. (Điều kiện loại 2 - khuyên bảo)",
      "If she had caught the bus, she wouldn't have been late. (Điều kiện loại 3 - tiếc nuối)"
    ],
    quiz: [
      {
        question: "If he had listened to my advice yesterday, he ______ in trouble now.",
        options: ["wouldn't be", "wouldn't have been", "won't be", "isn't"],
        correct_index: 0,
        explanation: "Câu điều kiện trộn: Mệnh đề If có 'yesterday' (giả định quá khứ - loại 3: had listened), mệnh đề chính có 'now' (kết quả hiện tại - loại 2) → wouldn't be."
      },
      {
        question: "If I ______ a million dollars right now, I would buy a house on the beach.",
        options: ["have", "had", "had had", "will have"],
        correct_index: 1,
        explanation: "Giả định không có thật ở hiện tại (right now) → Câu điều kiện loại 2: Mệnh đề If chia Quá khứ đơn (had)."
      },
      {
        question: "Unless you ______ hard, you will not pass the final exam.",
        options: ["study", "don't study", "studied", "won't study"],
        correct_index: 0,
        explanation: "Unless = If... not. Mệnh đề Unless đã mang nghĩa phủ định nên động từ chia ở dạng khẳng định: Unless you study."
      }
    ]
  }
];
