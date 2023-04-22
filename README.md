## Description:
- Hãy nêu các bước viết unit test
- Hãy nêu các thành phần cơ bản có trong 1 unit test
- Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không ?
## Implementation:
Hãy nêu các bước viết unit test:

- Xác định tất cả các trường hợp có thể xảy ra
- Chỉ định các tham số và kết quả mong đợi cho từng trường hợp
- Viết Unit test
- Chạy lệnh kiểm tra các Unit test đã viết
- Xem kết quả trả về và đánh giá kết quả

Các thành phần cơ bản có trong 1 unit test:
Test suit
Block test
Test case
Action
Assert

Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không?

- Case 1: Đầu vào là mảng
  - Mảng rỗng
    - [] -> true
  - Mảng chứa dữ liệu là số
    - [1] -> true
    - [1,2] -> true
    - [1,2,3] -> true
    - [2,3,1] -> false
    - [1,2,2] -> true
    - [2,2,1] -> false
  - Mảng chứa dữ liệu không phải là số
    - [''] -> false
    - ['a'] -> false
    - ['1'] -> false
    - [1,''] -> false
    - [true,false] -> false
    - [() => {}] -> false
    - [NaN] -> false
    - [{},{}] -> false
    - [undefined] -> false
    - [null] -> false
    - [[]] -> false
- Case 2: Đầu vào không phải là mảng  
  - Đầu vào là số -> false
  - Đầu vào là chuỗi -> false
  - Đầu vào là object -> false
  - Đầu vào là null -> false
  - Đầu vào là undefined -> false
  - Đầu vào là boolean -> false
  - Đầu vào là function -> false
  - Đầu vào là symbol -> false
  - Đầu vào là NaN -> false
