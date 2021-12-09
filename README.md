# TTCS
Họ Và Tên: Đinh Văn Bảo
MSSV: 61133384
Lớp: 61.CNTT-1

BÁO CÁO LẦN 1

I.Vận dụng phương pháp lập trình hướng đối tượng xây dựng cấu trúc ngăn xếp (Stack) áp dụng tính giá trị biểu thức đại số.

1)Phân tích bài toán.
- Các biểu thức đại số được biểu diễn dưới dạng trung tố (Infix). Tuy nhiên, để máy tính tính được giá trị của một biểu thức thì cần biểu diễn các biểu thức đại số từ trung tố sang một dạng khác là tiền tố hoặc hậu tố. Chuyển từ biểu thức trung tố (Infix) sang hậu tố (Postfix) và tính toán biểu thức hậu tố bằng kỹ thuật Stack.
- 
2)Tìm hiểu giải thuật.
- Thuật toán chuyển từ trung tố sang hậu tố
1.Khởi tạo Stack rỗng.
2.Khởi tạo 2 chuỗi x và token; i, j lần lượt là index của Infix và Postfix.
3.Duyệt vòng lặp for từ i = 1 cho đến cuối chuỗi Infix:
Nếu Infix[i] là toán hạng thì đưa vào Postfix.
Nếu Infix[i] là toán tử thì Push vào ngăn xếp S.
Nếu Infix[i] là “)” thì Pop vào ngăn xếp S (lấy giá trị trên đỉnh của S) sau đó đưa vào Postfix.
+Output: Postfix là biểu thức hậu tố.
-Tính giá trị biểu thức hậu tố
+Duyệt biểu thức dạng chuỗi từ trái sang phải:
+Dùng hàm isdigit để kiểm tra:
  Nếu là toán hạng thì dùng Push() đưa vào ngăn xếp S.
  Nếu là toán tử thì Pop() 2 toán hạng trong ngăn xếp S ra, sau đó tính toán giá trị của chúng dựa vào toán tử này, sau đó Push() lại vào S.
  Thực hiện cho đến khi gặp kí tự \0 kết thúc chuỗi.
  Kết quả của biểu thức chính là phần tử còn lại cuối cùng trong ngăn xếp S.
  
3)Tìm hiểu công cụ lập trình.
	-Visual Studio Code là một trình soạn thảo mã nguồn nhẹ nhưng mạnh mẽ, chạy trên máy tính để bàn của bạn và có sẵn cho Windows, macOS và Linux. Nó đi kèm với hỗ trợ tích hợp cho JavaScript, TypeScript và Node.js và có một hệ sinh thái mở rộng phong phú cho các ngôn ngữ khác (chẳng hạn như C ++, C #, Java, Python, PHP, Go) và thời gian chạy (chẳng hạn như .NET và Unity) . Bắt đầu hành trình của bạn với VS Code bằng các video giới thiệu này.


