# TTCS

# VẬN DỤNG PHƯƠNG PHÁP LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG XÂY DỰNG CẤU TRÚC NGĂN XẾP (STACK) ÁP DỤNG TÍNH GIÁ TRỊ BIỂU THỨC ĐẠI SỐ.

# PHÂN TÍCH BÀI TOÁN
><P>Các biểu thức đại số được biểu diễn dưới dạng trung tố (Infix). Tuy nhiên, để máy tính tính được giá trị của một biểu thức thì cần biểu diễn các biểu thức đại số từ trung tố sang một dạng khác là tiền tố hoặc hậu tố. Chuyển từ biểu thức trung tố (Infix) sang hậu tố (Postfix) và tính toán biểu thức hậu tố bằng cấu trúc Stack.<P>
  
# KÝ PHÁP NGHỊCH ĐẢO BA-LAN
  
><P>Khi lập trình, tính giá trị một biểu thức toán học là điều quá đỗi bình thường. Tuy nhiên, trong nhiều ứng dụng (như chương trình vẽ đồ thị hàm số chẳng hạn, trong đó chương trình cho phép người dùng nhập vào hàm số), ta cần phải tính giá trị của một biểu thức được nhập vào từ bàn phím dưới dạng một chuỗi. Với các biểu thức toán học đơn giản (như a+b) thì bạn có thể tự làm bằng các phương pháp tách chuỗi “thủ công”. Nhưng để “giải quyết” các biểu thức có dấu ngoặc, ví dụ như (a+b)*c + (d+e)*f ,  thì các phương pháp tách chuỗi đơn giản đều không khả thi.Trong tình huống này, ta phải dùng đến Ký Pháp Nghịch Đảo Ba Lan Để đơn giản cho việc minh họa, ta giả định rằng chuỗi biểu thức mà ta nhận được từ bàn phím chỉ bao gồm: các dấu mở ngoặc/đóng ngoặc; 4 toán tử cộng, trừ, nhân và chia (+, -, *, /); các toán hạng đều chỉ là các con số nguyên từ 0 đến 9; không có bất kỳ khoảng trắng nào giữa các ký tự.Quá trình tính toán giá trị của biểu thức hậu tố là đọc biểu thức từ trái sang phải, nếu gặp một toán hạng (con số hoặc biến) thì push toán hạng này vào ngăn xếp; nếu gặp toán tử, lấy hai toán hạng ra khỏi ngăn xếp (stack), tính kết quả, đẩy kết quả trở lại ngăn xếp. Khi quá trình kết thúc thì con số cuối cùng còn lại trong ngăn xếp chính là giá trị của biểu thức đó.
><P>Độ ưu tiên của các toán tử được xắp sếp theo thứ tự: Mức 1 là hai toán tử ‘(‘ và ‘)’, mức 2 là toán tử ‘+’ và ‘-’, mức 3 là toán tử ‘/’ và ‘*’, mức 4 là toán tử ‘^’.Các toán tử ở cùng mức có độ ưu tiên là như nhau.
><P>Nếu gặp một toán hạng (con số hoặc biến) thì ghi nó vào chuỗi kết quả (chuỗi kết quả là biểu thức trung tố). Nếu gặp dấu mở ngoặc, đưa nó vào ngăn xếp. Nếu gặp một toán tử (gọi là o1 ), thực hiện hai bước sau: Chừng nào còn có một toán tử o2 ở đỉnh ngăn xếp.Và độ ưu tiên của o1 nhỏ hơn hay bằng độ ưu tiên của o2 thì lấy o2 ra khỏi ngăn xếp và ghi vào kết quả, Push o1 vào ngăn xếp.Nếu gặp dấu đóng ngoặc thì cứ lấy các toán tử trong ngăn xếp ra và ghi vào kết quả cho đến khi lấy được dấu mở ngoặc ra khỏi ngăn xếp. Khi đã duyệt hết biểu thức trung tố, lần lượt lấy tất cả toán tử (nếu có) từ ngăn xếp ra và ghi vào chuỗi kết quả.


# CẤU TRÚC STACK
  
><P>Push: Thêm một phần tử vào đỉnh của ngăn xếp, số phần tử của ngăn xếp tăng lên 1.
><P>Pop: Xóa bỏ phần tử đầu tiên ở đỉnh của ngăn xếp, số phần tử của ngăn xếp giảm đi 1.
><P>Top: Lấy giá trị của phần tử đầu tiên ở đỉnh của ngăn xếp, số phần tử của ngăn xếp không thay đổi.
><P>IsEmpty: Kiểm tra ngăn xếp trống hay không. Ngăn xếp trống là ngăn xếp không có phần tử nào.
><P>IsFull: Kiểm tra ngăn xếp đã đầy hay chưa. Thao tác này không phải lúc nào cũng có.
><P>Size: Lấy số lượng phần tử stack đang có.


![Hình minh họa cấu trúc Stack](https://gochocit.com/wp-content/uploads/2021/11/minh-hoa-stack.png)

# PHẦN MỀM HỖ TRỢ VÀ NGÔN NGỮ

![Phần mềm Visual Studio Code](https://khuenguyencreator.com/wp-content/uploads/2021/05/c%C3%A0i-%C4%91%E1%BA%B7t-visual-studio-code.jpg)
![Ngôn ngữ javascript](https://mona.media/wp-content/uploads/2019/12/javascript-la-gi.jpg)

# KẾT QUẢ ĐẠT ĐƯỢC
><p>Vận dụng phương pháp lập trình hướng đối tượng xây dựng cấu trúc ngăn xếp (Stack) áp dụng tính giá trị biểu thức đại số
>. Sử dụng ngôn ngữ Javascript và môi trường của ứng dụng Visual Studio
>. Lập trình một giao diện đơn giản cho phép người dùng nhập vào một biều thức đại số bất kỳ, 
>kiểm tra nếu là biểu thức đại số thì tiền hành chuyển đổi, chuyển nó sang biểu thức hậu tố rồi tiến hành tính toán, 
>và hiện thị kết quả trên giao diện Web cho người dùng thấy.

# GIAO DIỆN CỦA CHƯƠNG TRÌNH
  
  ![Giao diện thành công](https://user-images.githubusercontent.com/83891825/148195264-c59eff3f-8e80-421f-81ee-409548e42edf.png)
  
  ![Giao diện thất bại](https://user-images.githubusercontent.com/83891825/148195350-012b3293-2030-422b-85fc-8bec912deff5.png)


 
