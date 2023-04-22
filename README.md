# Description:
- Ở một của hàng có bán nhiều loại trái cây, hiện đang có một chương trình khuyến mãi khi mua hàng, mỗi loại trái cây sẽ có khuyến mãi riêng trên từng sản phẩm và trên tổng số lượng của sản phảm đó(lấy discount cao nhất để áp dụng, ví dụ: táo có giá là 5.000 mua 1 được giảm 5%, mua từ 2 trở lên được giảm 10%, thì khi mua 3 quả thì tổng tiền phải trả là 3 * 5.000 * (100 - 10)%). Viết một chuơng trinh (không cần UI) giúp của hàng trên tính tổng số tiền phải thanh toán trên mỗi hoá đơn mua hàng.(Các chức năng cơ bản, thêm, sửa, xoá sp vào đơn hàng, thanh toán)(Yêu câu viết Unit test).

# Implementation:
- Thêm sản phẩm vào giỏ hàng
- Cập nhật số lương sản phẩm trong giỏ hàng
- Xoá sản phẩm ra khỏi giỏ hàng
- Thanh toán đơn hàng