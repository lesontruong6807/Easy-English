// Phase 2: Ngữ pháp cốt lõi (10 topics)
module.exports = [
  {
    order_index: 1,
    title: "Các thì trong tiếng Anh (Tenses)",
    book1_ref: "Chuyên đề 3, Phần 1-12, tr.77-110",
    book2_p1_ref: "Phần I, Chuyên đề 2, tr.20-27",
    book2_p2_ref: "Phần II, Chuyên đề 2, tr.147-154",
    theory_md: `## 🌟 1. Bản chất của "Thì" (Tenses) cho người mất gốc

Trong tiếng Việt: *"Hôm qua tôi ăn cơm, bây giờ tôi ăn cơm, ngày mai tôi cũng ăn cơm"*. Từ "ăn" giữ nguyên, ta chỉ thêm từ "hôm qua, ngày mai" để biểu thị thời gian.
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

## 💡 3. Thần chú phối thì kinh điển (Đề thi nào cũng có 1 câu)

> 💡 **CÔNG THỨC: HÀNH ĐỘNG ĐANG LÀM THÌ CÓ HÀNH ĐỘNG KHÁC XEN VÀO**
> - **Khi một hành động ĐANG XẢY RA (QKTD: was/were + V-ing)**
> - Thì một hành động khác **BẤT CHỢT XEN VÀO (QKĐ: V2/ed)**
> 👉 **THẦN CHÚ:** *While + Quá khứ tiếp diễn, Quá khứ đơn* (hoặc *When + Quá khứ đơn, Quá khứ tiếp diễn*).
> *Ví dụ:* While I **was taking** a bath, the phone **rang**. (Đang tắm thì chuông điện thoại réo).

---

> ⚠️ **CẠM BẪY ĐỀ THI: SINCE VÀ FOR:**
> - **SINCE + Mốc thời gian** (ví dụ: *since 2010, since last year, since I was young*).
>   👉 *Công thức vàng:* **HTHT + SINCE + QKĐ** (*I have lived here since I was born.*)
> - **FOR + Khoảng thời gian** (ví dụ: *for 3 years, for 5 months, for a long time*).
> - ❌ Lỗi sai hay gặp: Nhầm *since 3 years* (SAI $\\rightarrow$ phải là *for 3 years*).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "When the teacher came into the classroom, the students ______ noise."
> A. are making &nbsp;&nbsp;&nbsp;&nbsp; B. were making &nbsp;&nbsp;&nbsp;&nbsp; C. made &nbsp;&nbsp;&nbsp;&nbsp; D. have made
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Cấu trúc phối thì: Khi giáo viên bước vào lớp (*came* - QKĐ, hành động xen vào), thì học sinh **đang làm ồn** (*were making* - QKTD, hành động đang diễn ra).
> </details>`,
    examples: [
      "She usually walks to school, but today she is cycling. (Thói quen vs Đang diễn ra)",
      "When I arrived at the party, they were dancing. (Hành động xen vào vs Đang diễn ra)",
      "We have studied English for 5 years. (HTHT diễn tả việc kéo dài từ quá khứ đến nay)"
    ]
  },
  {
    order_index: 2,
    title: "Sự hòa hợp chủ ngữ – động từ (Subject-Verb Agreement)",
    book1_ref: "Chuyên đề 4, Phần 1-4, tr.111-125",
    book2_p1_ref: "Phần I, Chuyên đề 3, tr.28-33",
    book2_p2_ref: "Phần II, Chuyên đề 3, tr.155-160",
    theory_md: `## 🌟 1. Bản chất cốt lõi: "Chủ ngữ nào - Động từ nấy"

Nguyên tắc cơ bản nhất:
- **Chủ ngữ số ÍT $\\rightarrow$ Động từ số ÍT** (*He plays, The cat is*).
- **Chủ ngữ số NHIỀU $\\rightarrow$ Động từ số NHIỀU** (*They play, Cats are*).
Tuy nhiên, trong đề thi THPTQG, người ra đề sẽ cố tình "kéo dài" chủ ngữ bằng các cụm từ đệm để bạn nhìn nhầm danh từ đứng gần động từ nhất!

---

## 📊 2. Các quy tắc chia động từ đặc biệt buộc phải nhớ

| Cấu trúc Chủ ngữ | Quy tắc chia Động từ | Ví dụ minh họa |
| :--- | :--- | :--- |
| **S1 + as well as / together with / along with + S2** | Chia theo **S1** (Chủ ngữ đầu tiên) | *The teacher, together with his students, **is** coming.* (Chia theo The teacher - số ít) |
| **Either... or / Neither... nor / Not only... but also** | Chia theo **S2** (Chủ ngữ gần động từ nhất) | *Neither you nor he **knows** the truth.* (Chia theo he - số ít) |
| **Đại từ bất định:** *Everyone, Someone, Nobody, Each, Every...* | **LUÔN LUÔN CHIA SỐ ÍT** | *Everyone in the room **was** silent.* |
| **Khoảng cách, Thời gian, Tiền bạc, Cân nặng** | **LUÔN LUÔN CHIA SỐ ÍT** (coi là 1 khối thống nhất) | *Ten miles **is** a long distance.* <br> *100 dollars **is** too expensive.* |
| **The + Tính từ** (chỉ 1 tầng lớp người) | **LUÔN LUÔN CHIA SỐ NHIỀU** | *The rich **are** not always happy.* (The rich = những người giàu) |

---

> 💡 **THẦN CHÚ "BÊN GẦN - BÊN XA":**
> 1. Thấy **AS WELL AS, TOGETHER WITH, WITH**: Chia theo đứa **ĐỨNG ĐẦU TIÊN (XA ĐỘNG TỪ)**.
> 2. Thấy **OR, NOR, BUT ALSO**: Chia theo đứa **ĐỨNG GẦN ĐỘNG TỪ NHẤT**.

---

> ⚠️ **CẠM BẪY ĐỀ THI: "A NUMBER OF" VS "THE NUMBER OF":**
> Đây là câu hỏi kinh điển luôn xuất hiện:
> - **A number of + N số nhiều $\\rightarrow$ ĐỘNG TỪ SỐ NHIỀU** (*A number of students **are** absent* - mang nghĩa là "Nhiều học sinh").
> - **The number of + N số nhiều $\\rightarrow$ ĐỘNG TỪ SỐ ÍT** (*The number of students **is** increasing* - mang nghĩa là "Con số lượng học sinh").
> 👉 *Mẹo nhớ:* **A** (viết tắt của **A**LL $\\rightarrow$ Số nhiều) / **THE** (viết tắt của **THIỂU** $\\rightarrow$ Số ít).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "The manager, along with three assistants, ______ currently attending the conference."
> A. are &nbsp;&nbsp;&nbsp;&nbsp; B. is &nbsp;&nbsp;&nbsp;&nbsp; C. were &nbsp;&nbsp;&nbsp;&nbsp; D. have been
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Cụm "along with three assistants" chỉ là phần bổ nghĩa chêm vào. Chủ ngữ chính là **The manager** (số ít) $\\rightarrow$ động từ phải chia số ít là **is**!
> </details>`,
    examples: [
      "The teacher, together with her students, is (số ít) visiting the museum.",
      "A number of cars were parked outside vs The number of cars is increasing.",
      "Fifty dollars is (số ít - tiền bạc) too much for this shirt."
    ]
  },
  {
    order_index: 3,
    title: "To V vs V-ing (Động từ nguyên mẫu vs Danh động từ)",
    book1_ref: "Chuyên đề 5, Phần 1-5, tr.126-140",
    book2_p1_ref: "Phần I, Chuyên đề 4, tr.34-39",
    book2_p2_ref: "Phần II, Chuyên đề 4, tr.161-166",
    theory_md: `## 🌟 1. Bản chất: Khi 2 động từ đi liền nhau

Trong câu tiếng Anh, khi một động từ đi theo sau một động từ khác, động từ thứ hai **KHÔNG THỂ** để dạng nguyên thể không chia bừa bãi. Nó bắt buộc phải biến thành **To V** (To-infinitive) hoặc **V-ing** (Gerund).
Ví dụ: Ta không nói "I enjoy read", mà phải nói "I enjoy **reading**".

---

## 📊 2. Danh sách các động từ thông dụng nhất

| Nhóm | Các động từ điển hình cần thuộc lòng | Ví dụ minh họa |
| :--- | :--- | :--- |
| **Đi với V-ING** | *enjoy, avoid, mind, practice, suggest, consider, finish, admit, keep, deny* | - *She **enjoys reading** books.* <br> - *You should **avoid eating** fast food.* |
| **Đi với TO V** | *want, hope, decide, plan, promise, agree, refuse, afford, expect, intend* | - *He **decided to study** abroad.* <br> - *They **promised to help** us.* |
| **Đi với V-NGUYÊN THỂ (V-bare)** | Sau động từ khuyết thiếu (*can, must, should*) và cấu trúc: *make sb + V*, *let sb + V* | - *She **makes me laugh**.* <br> - *My parents **let me go** out.* |

---

## 💡 3. Các động từ đi với CẢ HAI nhưng ĐỔI NGHĨA HOÀN TOÀN

Đây là nhóm ăn điểm phân loại học sinh trong đề thi:

| Động từ | Đi với **TO V** | Đi với **V-ING** |
| :--- | :--- | :--- |
| **REMEMBER** | Nhớ **PHẢI LÀM** việc gì trong tương lai <br> *(Remember to lock the door!)* | Nhớ **ĐÃ LÀM** việc gì trong quá khứ <br> *(I remember locking the door.)* |
| **FORGET** | Quên **PHẢI LÀM** việc gì <br> *(Don't forget to do homework.)* | Quên việc **ĐÃ TỪNG LÀM** trong quá khứ <br> *(I'll never forget meeting her.)* |
| **STOP** | Dừng lại **ĐỂ LÀM** việc khác <br> *(He stopped to smoke - dừng đi để hút thuốc)* | **DỪNG HẲN** hành động đang làm <br> *(He stopped smoking - cai thuốc lá)* |
| **TRY** | **CỐ GẮNG** làm việc khó khăn <br> *(I try to pass the exam.)* | **THỬ** làm việc gì xem kết quả ra sao <br> *(Try adding some salt.)* |

> 💡 **MẸO NHỚ:**
> - **TO V:** Hướng về **TƯƠNG LAI** (Nhớ để làm, cố gắng để làm).
> - **V-ING:** Hướng về **QUÁ KHỨ** hoặc hành động đã và đang xảy ra.

---

> ⚠️ **CẠM BẪY "TO + V-ING":**
> Đa số chữ "to" đi với V nguyên mẫu, nhưng các cụm sau "to" là **GIỚI TỪ** nên bắt buộc phải cộng **V-ING**:
> - *look forward to + V-ing* (mong đợi làm gì)
> - *be / get used to + V-ing* (quen với việc gì)
> - *object to + V-ing* (phản đối làm gì)

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "I am really looking forward to ______ you at the ceremony tomorrow."
> A. see &nbsp;&nbsp;&nbsp;&nbsp; B. seeing &nbsp;&nbsp;&nbsp;&nbsp; C. to see &nbsp;&nbsp;&nbsp;&nbsp; D. saw
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Cấu trúc cố định: **look forward to + V-ing** (rất mong đợi việc gì). Rất nhiều bạn thấy chữ "to" tưởng chọn V nguyên mẫu là dính bẫy ngay!
> </details>`,
    examples: [
      "I avoided meeting him at the supermarket. (avoid + V-ing)",
      "He stopped smoking because it was bad for his health. (stop + V-ing: dừng hẳn)",
      "I am looking forward to hearing from you soon. (look forward to + V-ing)"
    ]
  },
  {
    order_index: 4,
    title: "Động từ khuyết thiếu (Modal Verbs)",
    book1_ref: "Chuyên đề 6, Phần 1-6, tr.141-155",
    book2_p1_ref: "Phần I, Chuyên đề 5, tr.40-44",
    book2_p2_ref: "Phần II, Chuyên đề 5, tr.167-172",
    theory_md: `## 🌟 1. Bản chất động từ khuyết thiếu (Modal Verbs)

Động từ khuyết thiếu (*can, could, may, might, must, should, will, would*) là những trợ động từ dùng để diễn tả **sự cho phép, khả năng, sự bắt buộc hoặc lời khuyên**.
**Quy tắc chung:** Sau modal verbs **LUÔN LUÔN LÀ V NGUYÊN THỂ (V-bare)**, không chia thì, không thêm s/es/ed!

---

## 📊 2. Bảng phân biệt các Modal Verbs hay thi nhất

| Từ | Nghĩa & Mức độ | Ví dụ minh họa | Lưu ý quan trọng |
| :--- | :--- | :--- | :--- |
| **Must** | Phải (Bắt buộc do người nói áp đặt hoặc nội tâm) | *You must stop at red lights.* | Phủ định: **Mustn't = CẤM** |
| **Have to** | Phải (Bắt buộc do luật lệ, ngoại cảnh khách quan) | *I have to wear uniform at school.* | Phủ định: **Don't have to = KHÔNG CẦN THIẾT** |
| **Should / Ought to** | Nên (Lời khuyên) | *You should go to bed early.* | Tương đương với *Had better* |
| **Can / Could** | Có thể (Khả năng hiện tại / quá khứ) | *She can speak English fluently.* | Thể hiện năng lực thực tế |
| **May / Might** | Có lẽ (Khả năng dự đoán 50% hoặc xin phép) | *It may rain tonight.* | Mức độ chắc chắn thấp hơn must |

---

## 💡 3. Điểm 8+: Modal Verbs trong quá khứ (Modal Perfect: Modal + Have + V3)

Đây là câu hỏi phân loại cực kỳ quen thuộc trong đề thi tốt nghiệp THPT:

| Cấu trúc | Ý nghĩa | Ví dụ |
| :--- | :--- | :--- |
| **Must have + V3** | **Chắc hẳn là đã** (Suy đoán 99% dựa trên bằng chứng ở quá khứ) | *The ground is wet. It **must have rained** last night.* (Đất ướt sũng, chắc chắn đêm qua đã mưa) |
| **Can't have + V3** | **Không thể nào đã** (Khẳng định một việc không thể xảy ra trong quá khứ) | *He **can't have stolen** the money, he was with me.* (Cậu ấy không thể nào ăn trộm được vì lúc đó đang ở cùng tôi) |
| **Should have + V3** | **Lẽ ra nên làm** (nhưng trong thực tế ĐÃ KHÔNG LÀM $\\rightarrow$ nuối tiếc) | *You **should have studied** harder for the exam.* (Lẽ ra em nên học chăm hơn - thực tế là lười nên rớt) |

---

> ⚠️ **CẠM BẪY ĐỀ THI: MUSTN'T VS DON'T HAVE TO:**
> - **Mustn't:** Mang nghĩa **CẤM ĐOÁN** (Làm là vi phạm pháp luật hoặc nguy hiểm: *You mustn't touch this wire*).
> - **Don't have to / Needn't:** Mang nghĩa **KHÔNG BẮT BUỘC / KHÔNG CẦN THIẾT** (Thích làm thì làm, không làm cũng chẳng sao: *Tomorrow is Sunday, so I don't have to get up early*).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "John's car is not outside his house. He ______ out."
> A. must go &nbsp;&nbsp;&nbsp;&nbsp; B. must have gone &nbsp;&nbsp;&nbsp;&nbsp; C. should go &nbsp;&nbsp;&nbsp;&nbsp; D. can go
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Có bằng chứng thực tế: "Xe của John không có ở ngoài nhà" $\\rightarrow$ suy đoán chắc chắn việc **đã xảy ra**: Cậu ấy chắc hẳn đã đi ra ngoài rồi $\\rightarrow$ dùng cấu trúc **must have + V3** (*must have gone*).
> </details>`,
    examples: [
      "You mustn't park your car here; it's illegal. (Mustn't = Cấm đỗ xe)",
      "The streets are wet; it must have rained last night. (Must have V3 = Chắc hẳn là đã)",
      "I should have listened to my mother's advice. (Should have V3 = Lẽ ra nên làm gì)"
    ]
  },
  {
    order_index: 5,
    title: "Câu bị động (Passive Voice)",
    book1_ref: "Chuyên đề 7, Phần 1-5, tr.156-170",
    book2_p1_ref: "Phần I, Chuyên đề 6, tr.45-50",
    book2_p2_ref: "Phần II, Chuyên đề 6, tr.173-178",
    theory_md: `## 🌟 1. Bản chất câu bị động: Khi nào dùng?

Trong đời sống, khi ta muốn **nhấn mạnh vào đối tượng bị tác động** (thay vì người thực hiện hành động), hoặc **không biết ai làm**, ta dùng câu bị động.
- *Chủ động:* Con mèo ăn con cá (*The cat ate the fish*).
- *Bị động:* Con cá **bị ăn** bởi con mèo (*The fish **was eaten** by the cat*).

---

## 📊 2. Công thức gốc của MỌI câu bị động: BE + V3/ED

Bất kể thì nào, câu bị động luôn phải có 2 thành phần: **Động từ TO BE (chia theo thì) + V3/ED**.

| Thì | Câu Chủ động (Active) | Câu Bị động (Passive = BE + V3) |
| :--- | :--- | :--- |
| **Hiện tại đơn** | S + V(s/es) + O | S + **am / is / are + V3/ed** + (by O) |
| **Hiện tại tiếp diễn** | S + am/is/are + V-ing + O | S + **am / is / are + BEING + V3/ed** |
| **Quá khứ đơn** | S + V2/ed + O | S + **was / were + V3/ed** + (by O) |
| **Hiện tại hoàn thành**| S + have/has + V3 + O | S + **have / has + BEEN + V3/ed** |
| **Tương lai đơn** | S + will + V + O | S + **will + BE + V3/ed** |
| **Modal Verbs** | S + can/must/should + V + O | S + **can / must / should + BE + V3/ed** |

---

## 💡 3. Các dạng bị động đặc biệt hay thi THPTQG

### Dạng 1: Bị động với động từ chỉ quan điểm, ý kiến (People say that...)
- *Chủ động:* People say that he is rich.
- *Bị động 1 (giả định):* **It is said that** he is rich.
- *Bị động 2 (chuyển chủ ngữ sau lên đầu):*
  - Cùng thì: He **is said to be** rich.
  - Khác thì (vế sau xảy ra trước vế trước): He is said **to have been** rich.

### Dạng 2: Cấu trúc Nhờ vả (Causative Form: Have / Get)
- **HAVE somebody DO something $\\rightarrow$ HAVE something DONE (V3)** (Nhờ ai làm gì $\\rightarrow$ có cái gì được làm).
- **GET somebody TO DO something $\\rightarrow$ GET something DONE (V3)**.
*Ví dụ:* I had the mechanic repair my car $\\rightarrow$ I had my car **repaired**.

---

> ⚠️ **LƯU Ý VỀ CÁC TỪ BỎ "BY":**
> Các đại từ bất định hoặc chung chung: *by people, by them, by someone, by everyone, by no one* $\\rightarrow$ **LUÔN LƯỢC BỎ**, không viết vào câu bị động!

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "This bridge ______ by the local government in 2020."
> A. built &nbsp;&nbsp;&nbsp;&nbsp; B. was built &nbsp;&nbsp;&nbsp;&nbsp; C. is built &nbsp;&nbsp;&nbsp;&nbsp; D. has been built
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> - Cây cầu không thể tự xây mà **được xây** $\\rightarrow$ Câu bị động (Be + V3).
> - Có mốc thời gian trong quá khứ "in 2020" $\\rightarrow$ chia thì Quá khứ đơn bị động: **was built**.
> </details>`,
    examples: [
      "The house was built in 1995. (Bị động quá khứ đơn)",
      "I had my hair cut yesterday. (Cấu trúc nhờ vả: have something done)",
      "It is reported that the accident was caused by fog. (Bị động khách quan)"
    ]
  },
  {
    order_index: 6,
    title: "Câu trực tiếp – gián tiếp (Reported Speech)",
    book1_ref: "Chuyên đề 8, Phần 1-4, tr.171-185",
    book2_p1_ref: "Phần I, Chuyên đề 8, tr.51-55",
    book2_p2_ref: "Phần II, Chuyên đề 8, tr.179-184",
    theory_md: `## 🌟 1. Bản chất: Tường thuật lại lời của người khác

- **Câu trực tiếp:** Trích dẫn nguyên văn lời nói của ai đó, đặt trong dấu ngoặc kép:
  *Nam said: "I am tired."*
- **Câu gián tiếp:** Ta kể lại lời Nam nói cho người thứ ba nghe:
  *Nam said that he was tired.*
👉 Để chuyển từ trực tiếp sang gián tiếp, bắt buộc phải thực hiện **3 BƯỚC ĐỔI**:
1. **Đổi Đại từ** (ngôi xưng hô cho hợp lý).
2. **Lùi 1 Thì** (về quá khứ).
3. **Đổi Trạng từ chỉ thời gian và nơi chốn**.

---

## 📊 2. Bảng lùi thì "thần tốc"

| Câu trực tiếp | Câu gián tiếp (Lùi về 1 bậc quá khứ) |
| :--- | :--- |
| Hiện tại đơn (V1/s/es) | $\\rightarrow$ **Quá khứ đơn (V2/ed)** |
| Hiện tại tiếp diễn (am/is/are + V-ing) | $\\rightarrow$ **Quá khứ tiếp diễn (was/were + V-ing)** |
| Quá khứ đơn (V2/ed) | $\\rightarrow$ **Quá khứ hoàn thành (had + V3)** |
| Hiện tại hoàn thành (have/has + V3) | $\\rightarrow$ **Quá khứ hoàn thành (had + V3)** |
| Tương lai đơn (**will**) | $\\rightarrow$ **would** |
| Can / May / Must | $\\rightarrow$ **could / might / had to** |

---

## 📊 3. Bảng biến đổi Trạng từ thời gian & nơi chốn

| Trực tiếp | Gián tiếp |
| :--- | :--- |
| **now** | $\\rightarrow$ **then** |
| **today / tonight** | $\\rightarrow$ **that day / that night** |
| **yesterday** | $\\rightarrow$ **the day before / the previous day** |
| **tomorrow** | $\\rightarrow$ **the next day / the following day** |
| **ago** | $\\rightarrow$ **before** |
| **this / these** | $\\rightarrow$ **that / those** |
| **here** | $\\rightarrow$ **there** |

---

> 💡 **CÂU HỎI TRONG LỜI NÓI GIÁN TIẾP:**
> - **Yes/No Question:** Dùng **IF** hoặc **WHETHER**:
>   *She asked me: "Do you like coffee?" $\\rightarrow$ She asked me **if I liked** coffee.*
> - **Wh-Question:** Giữ nguyên từ để hỏi (**What, Where, Why...**), và chuyển về dạng **KHẲNG ĐỊNH** (S + V, KHÔNG đảo trợ động từ lên trước nữa):
>   *He asked: "Where do you live?" $\\rightarrow$ He asked me **where I lived**.*

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** ' "I will visit my grandparents tomorrow," said Linda.'
> $\\rightarrow$ Linda said that she ______ her grandparents the following day.
> A. will visit &nbsp;&nbsp;&nbsp;&nbsp; B. would visit &nbsp;&nbsp;&nbsp;&nbsp; C. visited &nbsp;&nbsp;&nbsp;&nbsp; D. visits
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Động từ trần thuật ở quá khứ (*said*), nên ta phải lùi thì: **will** lùi thành **would**!
> </details>`,
    examples: [
      "He said: 'I am playing games' → He said that he was playing games.",
      "She asked me: 'Are you hungry?' → She asked me if I was hungry.",
      "The police asked where he had been the previous night."
    ]
  },
  {
    order_index: 7,
    title: "Mệnh đề quan hệ (Relative Clauses)",
    book1_ref: "Chuyên đề 9, Phần 1-5, tr.186-200",
    book2_p1_ref: "Phần I, Chuyên đề 9, tr.56-61",
    book2_p2_ref: "Phần II, Chuyên đề 9, tr.185-190",
    theory_md: `## 🌟 1. Bản chất: Mệnh đề quan hệ dùng để làm gì?

Mệnh đề quan hệ sinh ra để **bổ nghĩa, làm rõ cho một danh từ** đứng ngay trước nó, giúp gộp 2 câu đơn thành 1 câu ghép mượt mà.
- *Câu 1:* Tôi thích cô gái (*I like the girl*).
- *Câu 2:* Cô gái ngồi cạnh tôi (*The girl sits next to me*).
$\\rightarrow$ Ghép lại: Tôi thích cô gái **người mà** ngồi cạnh tôi (*I like the girl **who** sits next to me*).

---

## 📊 2. Bảng phân loại các Đại từ quan hệ cốt lõi

| Đại từ quan hệ | Thay thế cho | Chức năng trong mệnh đề quan hệ | Ví dụ minh họa |
| :--- | :--- | :--- | :--- |
| **WHO** | Người | Làm **Chủ ngữ (S)** hoặc Tân ngữ | *The man **who** is talking to Lan is my teacher.* |
| **WHOM** | Người | Chỉ làm **Tân ngữ (O)** (Sau Whom phải là S + V) | *The girl **whom** you met yesterday is my sister.* |
| **WHICH** | Vật, đồ vật, con vật | Làm Chủ ngữ hoặc Tân ngữ | *The car **which** was bought yesterday is red.* |
| **THAT** | Cả người và vật | Thay thế cho Who, Whom, Which trong câu **KHÔNG CÓ DẤU PHẨY** | *The book **that** I bought is very interesting.* |
| **WHOSE** | Sở hữu (của người/vật) | Đi kèm danh từ: **N1 + whose + N2** | *The boy **whose** bicycle was stolen is crying.* |

---

## 💡 3. Các Trạng từ quan hệ chỉ Nơi chốn, Thời gian, Lý do

- **WHERE** = in / at / on which: Thay thế cho nơi chốn (*The hotel **where** we stayed was great*).
- **WHEN** = in / on / at which: Thay thế cho thời gian (*I remember the day **when** we first met*).
- **WHY** = for which: Thay thế cho lý do (*That is the reason **why** he quit his job*).

---

> ⚠️ **2 NGUYÊN TẮC BẤT DI BẤT DỊCH VỚI CHỮ "THAT":**
> 1. **KHÔNG BAO GIỜ** dùng THAT sau **DẤU PHẨY** (,) (Mệnh đề quan hệ không xác định).
> 2. **KHÔNG BAO GIỜ** dùng THAT đứng ngay sau **GIỚI TỪ** (ví dụ: *in that, of that* $\\rightarrow$ SAI).
> 👉 *Gặp dấu phẩy hoặc giới từ: chỉ dùng **WHOM** (người) hoặc **WHICH** (vật)!*

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "My uncle, ______ car was stolen last week, has bought a new one."
> A. who &nbsp;&nbsp;&nbsp;&nbsp; B. which &nbsp;&nbsp;&nbsp;&nbsp; C. whose &nbsp;&nbsp;&nbsp;&nbsp; D. that
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: C**
> Giữa "My uncle" (chú tôi) và "car" (chiếc xe) có mối quan hệ sở hữu: Chiếc xe CỦA chú tôi bị trộm $\\rightarrow$ Bắt buộc phải dùng **whose**!
> (Loại D vì có dấu phẩy thì không dùng *that*).
> </details>`,
    examples: [
      "The girl who is singing on stage is my sister. (Who thay thế cho người làm chủ ngữ)",
      "The house which has a blue door belongs to Mr. Brown. (Which thay thế cho vật)",
      "Mr. Nam, whose son won the scholarship, is very proud. (Whose chỉ sự sở hữu)"
    ]
  },
  {
    order_index: 8,
    title: "Mệnh đề trạng ngữ & Liên từ",
    book1_ref: "Chuyên đề 10, Phần 1-6, tr.201-218",
    book2_p1_ref: "Phần I, Chuyên đề 10, tr.62-68",
    book2_p2_ref: "Phần II, Chuyên đề 10, tr.191-198",
    theory_md: `## 🌟 1. Bản chất liên từ trong tiếng Anh

Liên từ (Conjunctions) là "chất keo" dùng để nối 2 mệnh đề hoặc 2 ý tưởng lại với nhau (như: *nguyên nhân - kết quả, tương phản - nhượng bộ, thời gian, điều kiện*).
Quy tắc sống còn cần phân biệt:
- **Liên từ:** Đi kèm một **MỆNH ĐỀ (S + V)** (*Because it rained...*)
- **Giới từ:** Đi kèm một **CỤM DANH TỪ (Noun Phrase) hoặc V-ING** (*Because of the rain...*)

---

## 📊 2. Bảng 2 cặp liên từ "kinh điển" hay thi nhất

### Cặp 1: Mặc dù (Chỉ sự tương phản, đối lập)

| Đi với Mệnh đề (S + V) | Đi với Cụm danh từ / V-ing |
| :--- | :--- |
| **Although / Even though / Though + S + V** | **Despite / In spite of + Noun phrase / V-ing** |
| *Ví dụ:* **Although he was sick**, he went to school. | *Ví dụ:* **Despite his sickness**, he went to school. |

### Cặp 2: Bởi vì (Chỉ nguyên nhân - kết quả)

| Đi với Mệnh đề (S + V) | Đi với Cụm danh từ / V-ing |
| :--- | :--- |
| **Because / Since / As + S + V** | **Because of / Due to / Owing to + Noun phrase / V-ing** |
| *Ví dụ:* We stayed home **because it rained heavily**. | *Ví dụ:* We stayed home **because of the heavy rain**. |

---

## 💡 3. Cấu trúc quá... đến nỗi mà (So... that vs Such... that)

- **SO + Tính từ / Trạng từ + THAT + S + V**:
  *She was **so tired that** she fell asleep immediately.*
- **SUCH + (a/an) + Tính từ + Danh từ + THAT + S + V**:
  *It was **such a difficult exam that** nobody passed.*

---

> ⚠️ **CẠM BẪY ĐỀ THI: KHÔNG DÙNG CẢ ALTHOUGH VÀ BUT:**
> Trong tiếng Việt ta nói: *"Mặc dù... nhưng..."*.
> Nhưng trong tiếng Anh, đã có **ALTHOUGH** thì **TUYỆT ĐỐI KHÔNG CÓ BUT** trong cùng một câu!
> ❌ *Although he is poor, but he is honest.* (SAI)
> ✔️ *Although he is poor, he is honest.* (ĐÚNG)

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "______ the bad weather, the flight took off on schedule."
> A. Although &nbsp;&nbsp;&nbsp;&nbsp; B. Despite &nbsp;&nbsp;&nbsp;&nbsp; C. Because &nbsp;&nbsp;&nbsp;&nbsp; D. In spite
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> - "the bad weather" là một **Cụm danh từ** (Noun Phrase), không có động từ $\\rightarrow$ Loại A và C.
> - Loại D vì thiếu chữ "of" (phải là *In spite of*).
> - Chọn **Despite** mang nghĩa "Mặc dù thời tiết xấu, chuyến bay vẫn cất cánh đúng giờ".
> </details>`,
    examples: [
      "Although he tried his best, he couldn't win the prize. (Although + S + V)",
      "Because of the traffic jam, we arrived late. (Because of + Cụm N)",
      "The movie was so interesting that I watched it twice. (So + Adj + that)"
    ]
  },
  {
    order_index: 9,
    title: "Cấu trúc So sánh (Comparisons)",
    book1_ref: "Chuyên đề 11, Phần 1-4, tr.219-232",
    book2_p1_ref: "Phần I, Chuyên đề 11, tr.69-74",
    book2_p2_ref: "Phần II, Chuyên đề 11, tr.199-204",
    theory_md: `## 🌟 1. Phân biệt Tính từ ngắn vs Tính từ dài

Muốn so sánh đúng trong tiếng Anh, trước hết bạn phải phân loại được tính từ:
- **Tính từ ngắn:** Có **1 âm tiết** (*tall, fast, short, cold*) hoặc **2 âm tiết tận cùng bằng: -y, -er, -ow, -le, -et** (*happy, clever, narrow, simple, quiet*).
- **Tính từ dài:** Có **từ 2 âm tiết trở lên** (*expensive, beautiful, intelligent, modern*).

---

## 📊 2. Bảng 3 dạng so sánh chuẩn ngữ pháp

| Loại so sánh | Tính từ ngắn | Tính từ dài |
| :--- | :--- | :--- |
| **So sánh BẰNG** | **as + Adj + as** (*as tall as*) | **as + Adj + as** (*as beautiful as*) |
| **So sánh HƠN** | **Adj-er + THAN** (*taller than, happier than*) | **MORE + Adj + THAN** (*more expensive than*) |
| **So sánh NHẤT** | **THE + Adj-est** (*the tallest, the happiest*) | **THE MOST + Adj** (*the most expensive*) |

---

## 💡 3. So sánh kép: "CÀNG... CÀNG..." (Câu phân loại điểm 8+)

Công thức luôn xuất hiện trong câu viết lại câu hoặc trắc nghiệm:
> 💡 **CÔNG THỨC:**
> **THE + So sánh hơn (S + V), THE + So sánh hơn (S + V)**
> *(Càng... thì càng...)*
> - *The older you get, the wiser you become.* (Bạn càng già đi, bạn càng thông thái hơn).
> - *The more you study, the higher scores you will get.* (Càng học nhiều, điểm càng cao).

---

## 📊 4. Các tính từ bất quy tắc bắt buộc phải học thuộc

| Tính từ nguyên thể | So sánh HƠN | So sánh NHẤT |
| :---: | :---: | :---: |
| **good / well** (tốt) | **better** | **the best** |
| **bad / badly** (tệ) | **worse** | **the worst** |
| **many / much** (nhiều) | **more** | **the most** |
| **little** (ít) | **less** | **the least** |
| **far** (xa) | **farther / further** | **the farthest / furthest** |

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "The harder you work, ______ results you will achieve."
> A. better &nbsp;&nbsp;&nbsp;&nbsp; B. the better &nbsp;&nbsp;&nbsp;&nbsp; C. the best &nbsp;&nbsp;&nbsp;&nbsp; D. best
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: B**
> Cấu trúc so sánh kép "Càng... càng": *The + so sánh hơn..., The + so sánh hơn...*
> Vế đầu có *The harder*, vế sau bắt buộc phải có *The + better*.
> </details>`,
    examples: [
      "My brother is taller than me. (So sánh hơn tính từ ngắn: Adj-er than)",
      "This smartphone is more expensive than that one. (So sánh hơn tính từ dài)",
      "The more you practice, the better you speak English. (So sánh kép: Càng... càng)"
    ]
  },
  {
    order_index: 10,
    title: "Câu giả định & Câu điều kiện (Conditionals)",
    book1_ref: "Chuyên đề 12, Phần 1-5, tr.233-250",
    book2_p1_ref: "Phần I, Chuyên đề 13, tr.75-80",
    book2_p2_ref: "Phần II, Chuyên đề 14, tr.205-212",
    theory_md: `## 🌟 1. Bản chất: Câu điều kiện là gì?

Câu điều kiện (Conditional Sentences) gồm 2 vế:
- **Mệnh đề IF (Nếu):** Nêu ra điều kiện.
- **Mệnh đề chính (Thì):** Nêu ra kết quả.
Quy tắc lùi thì theo mức độ giả tưởng: Càng giả định điều **phi thực tế**, động từ càng phải **lùi sâu về quá khứ**!

---

## 📊 2. Bảng 3 loại câu điều kiện căn bản

| Loại | Mức độ thực tế | Mệnh đề IF | Mệnh đề Chính | Ví dụ |
| :--- | :--- | :--- | :--- | :--- |
| **Loại 1** | Có thể xảy ra ở **Hiện tại hoặc Tương lai** | **Hiện tại đơn (V1/s/es)** | **will / can / may + V-bare** | *If it rains, I **will stay** at home.* |
| **Loại 2** | Giả định **KHÔNG CÓ THẬT ở HIỆN TẠI** (ước gì bây giờ...) | **Quá khứ đơn (V2/ed)** *(to be dùng WERE cho mọi ngôi)* | **would / could + V-bare** | *If I **were** rich, I **would travel** the world.* |
| **Loại 3** | Giả định **KHÔNG CÓ THẬT ở QUÁ KHỨ** (tiếc nuối quá khứ) | **Quá khứ hoàn thành (had + V3)** | **would / could + HAVE + V3** | *If I **had studied**, I **would have passed**.* |

---

## 💡 3. Câu ước muốn với WISH / IF ONLY

- Ước cho **Hiện tại** (Trái ngược hiện tại): **S + wish + S + V2/ed** *(to be dùng WERE)*.
  *I wish I **were** taller.* (Ước gì bây giờ tôi cao hơn).
- Ước cho **Quá khứ** (Hối tiếc việc đã rồi): **S + wish + S + HAD + V3**.
  *I wish I **hadn't bought** this car.* (Ước gì hồi đó tôi không mua xe này).

---

> ⚠️ **CẠM BẪY VỚI "UNLESS" (TRỪ KHI):**
> **UNLESS = IF... NOT** (Trừ khi = Nếu không).
> Vì bản thân chữ *Unless* đã mang nghĩa phủ định, nên trong mệnh đề *Unless* **TUYỆT ĐỐI KHÔNG DÙNG NOT**!
> ❌ *Unless you don't study, you will fail.* (SAI)
> ✔️ *Unless you study, you will fail.* (ĐÚNG: Trừ khi em chịu học, nếu không em sẽ rớt).

---

> 🎯 **THỬ THÁCH THỰC CHIẾN:**
> **Câu hỏi:** "If he had listened to my advice yesterday, he ______ in trouble now."
> A. wouldn't be &nbsp;&nbsp;&nbsp;&nbsp; B. wouldn't have been &nbsp;&nbsp;&nbsp;&nbsp; C. won't be &nbsp;&nbsp;&nbsp;&nbsp; D. isn't
>
> <details>
> <summary>👉 Bấm xem đáp án & giải thích chi tiết</summary>
>
> **Đáp án đúng: A**
> **Đây là câu điều kiện trộn (Mixed Conditional):**
> - Mệnh đề If có "yesterday" $\\rightarrow$ giả định quá khứ dùng *had listened* (Loại 3).
> - Mệnh đề chính có chữ **"now"** (bây giờ) $\\rightarrow$ kết quả ở hiện tại phải dùng **would + V-bare** (*wouldn't be* - Loại 2).
> </details>`,
    examples: [
      "If you study hard, you will pass the exam. (Điều kiện loại 1 - có thật)",
      "If I were you, I would accept the job offer. (Điều kiện loại 2 - khuyên bảo)",
      "If she had caught the bus, she wouldn't have been late. (Điều kiện loại 3 - tiếc nuối)"
    ]
  }
];
