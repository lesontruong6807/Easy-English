import json

translations = {
    # Phrasal Verbs & Idioms
    "give up": "Đừng bao giờ từ bỏ ước mơ của bạn.",
    "look after": "Cô ấy chăm sóc em trai nhỏ của mình.",
    "put off": "Họ đã hoãn cuộc họp cho đến tuần sau.",
    "carry out": "Cả nhóm đã thực hiện thí nghiệm một cách thành công.",
    "come up with": "Cô ấy vừa nghĩ ra một ý tưởng tuyệt vời.",
    "break the ice": "Anh ấy đã kể một câu chuyện cười để phá vỡ sự ngượng ngùng ban đầu.",
    "once in a blue moon": "Chúng tôi rất hiếm khi mới gặp nhau.",
    "hit the books": "Tôi phải vùi đầu vào học bài cho kỳ thi ngày mai thôi.",
    "cost an arm and a leg": "Chiếc xe hơi đó đắt đến cắt cổ.",
    "under the weather": "Hôm nay tôi cảm thấy hơi mệt mỏi trong người.",
    "spill the beans": "Cô ấy đã lỡ miệng làm lộ bí mật về bữa tiệc bất ngờ.",
    "piece of cake": "Bài kiểm tra tiếng Anh hôm qua dễ như ăn kẹo.",
    "burn the midnight oil": "Học sinh thường phải thức khuya học bài trước kỳ thi THPTQG.",
    "bite the bullet": "Tôi phải cắn răng chịu đựng và đối mặt với thực tế khó khăn.",
    "barking up the wrong tree": "Nếu bạn nghĩ tôi lấy chìa khóa của bạn thì bạn nhầm to rồi.",
    "call it a day": "Chúng ta đã hoàn thành rất nhiều việc rồi, hãy kết thúc một ngày làm việc thôi.",
    "on cloud nine": "Cô ấy đang ngập tràn trong hạnh phúc sau khi thi đỗ.",
    "see eye to eye": "Hai người bọn họ hiếm khi đồng tình với nhau về vấn đề này.",
    "cut corners": "Đừng làm tắt ăn bớt công đoạn khi đang học những điều cơ bản.",
    "face the music": "Anh ấy phải dũng cảm chấp nhận hình phạt cho lỗi lầm của mình.",

    # Collocations & Prepositions
    "make a decision": "Đã đến lúc chúng ta phải đưa ra quyết định rồi.",
    "take a photo": "Bạn có thể chụp giúp chúng tôi một bức ảnh được không?",
    "pay attention": "Xin vui lòng hãy chú ý lắng nghe trong giờ học.",
    "do homework": "Tôi luôn luôn làm bài tập về nhà sau bữa ăn tối.",
    "interested in": "Tôi rất có hứng thú với việc học tiếng Anh.",
    "good at": "Cậu ấy học rất giỏi môn toán.",
    "afraid of": "Cô ấy rất sợ những con nhện.",
    "depend on": "Thành công luôn phụ thuộc vào sự chăm chỉ nỗ lực.",

    # Reading Vocab & Adjectives
    "rapid": "Thành phố đã chứng kiến sự phát triển nhanh chóng trong những năm gần đây.",
    "increase": "Dân số đã gia tăng một cách đáng kể.",
    "wise": "Quyết định của cô ấy là vô cùng sáng suốt và khôn ngoan.",
    "admire": "Mọi người đều vô cùng ngưỡng mộ lòng dũng cảm của cô ấy.",
    "achieve": "Cô ấy đã nỗ lực làm việc chăm chỉ để đạt được những mục tiêu của mình.",

    # Education & School
    "compulsory": "Tiếng Anh là một môn học bắt buộc ở trường phổ thông.",
    "graduate": "Cô ấy sẽ tốt nghiệp trường trung học phổ thông vào năm tới.",
    "enroll": "Anh ấy đã đăng ký tham gia một khóa học tiếng Anh.",
    "extracurricular": "Nhà trường tổ chức rất nhiều hoạt động ngoại khóa bổ ích.",
    "education": "Giáo dục chất lượng mang đến vô vàn cơ hội tươi sáng.",
    "curriculum": "Chương trình giảng dạy của trường đã được đổi mới toàn diện.",
    "academic": "Cô ấy sở hữu một thành tích học tập rất đáng nể.",
    "scholarship": "Anh ấy đã xuất sắc giành được học bổng toàn phần để đi du học.",
    "illiteracy": "Xóa mù chữ là một mục tiêu quốc gia mang tính chiến lược.",

    # Environment
    "recycle": "Chúng ta nên tích cực tái chế các chai nhựa đã qua sử dụng.",
    "greenhouse effect": "Hiệu ứng nhà kính là nguyên nhân chính gây ra hiện tượng nóng lên toàn cầu.",
    "drought": "Đợt hạn hán kéo dài dai dẳng suốt nhiều tháng liền.",
    "endangered": "Hổ là một loài động vật quý hiếm đang đứng trước nguy cơ tuyệt chủng.",
    "environment": "Mỗi người chúng ta cần phải chung tay bảo vệ môi trường sống.",
    "pollution": "Ô nhiễm không khí là một vấn đề vô cùng nghiêm trọng ở các thành phố lớn.",
    "sustainable": "Phát triển bền vững là chìa khóa then chốt cho tương lai.",
    "biodiversity": "Bảo tồn sự đa dạng sinh học là điều hết sức cấp thiết.",
    "conservation": "Họ đang nỗ lực hết mình vì công cuộc bảo tồn động vật hoang dã.",

    # Technology
    "device": "Điện thoại thông minh là những thiết bị điện tử vô cùng hữu ích.",
    "upgrade": "Tôi cần phải nâng cấp máy tính của mình để phục vụ công việc.",
    "malfunction": "Chiếc máy in đã gặp sự cố trục trặc vào sáng nay.",
    "technology": "Công nghệ hiện đại đã làm thay đổi hoàn toàn cách chúng ta học tập.",
    "artificial intelligence": "Trí tuệ nhân tạo đang phát triển với tốc độ chóng mặt.",
    "digital": "Chúng ta đang sống và phát triển trong một kỷ nguyên số.",
    "innovation": "Sự đổi mới và sáng tạo là yếu tố sống còn cho thành công.",
    "cyberspace": "An toàn thông tin trên không gian mạng là điều vô cùng quan trọng.",

    # Health & Lifestyle
    "nutritious": "Các loại rau xanh chứa rất nhiều chất dinh dưỡng tốt cho cơ thể.",
    "obesity": "Béo phì đang dần trở thành một vấn đề sức khỏe phổ biến trong xã hội.",
    "immune system": "Tập thể dục đều đặn giúp tăng cường hệ miễn dịch của bạn.",
    "symptom": "Sốt cao là một triệu chứng thường gặp của bệnh cúm.",
    "well-being": "Sức khỏe tinh thần cũng quan trọng không kém gì sức khỏe thể chất.",

    # Society & Family
    "generation gap": "Thường có một khoảng cách thế hệ nhất định giữa cha mẹ và con cái.",
    "household": "Mỗi hộ gia đình đều nên thực hành tiết kiệm nguồn nước sạch.",
    "upbringing": "Cô ấy đã được gia đình nuôi dạy vô cùng nghiêm khắc từ nhỏ.",
    "extended family": "Họ sống quây quần trong một gia đình nhiều thế hệ cùng với ông bà.",
    "urbanization": "Quá trình đô thị hóa nhanh chóng đã thay đổi diện mạo của thành phố.",
    "convenient": "Mua sắm trực tuyến ngày nay rất tiện lợi và nhanh chóng.",
    "efficient": "Đây là một phương pháp học tập mang lại hiệu quả cao hơn nhiều."
}

with open("seed_vocab.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for w in data.get("words", []):
    word = w["word"].strip()
    if word in translations:
        w["example_vi"] = translations[word]

with open("seed_vocab.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("All vocab words updated with Vietnamese example translations!")
