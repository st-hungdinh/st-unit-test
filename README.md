# Description:
- Viết Unit Test cho class **`AuthStorageService`** ở ``authStorage.sevice.ts`` (kiểm tra localStorage có được gọi và arguments truyền vào có như kỳ vọng hay không)(mock localStorage)
- Tạo một class bất kì, bên trong có sử dụng method các method của **`AuthStorageService`**, viết Unitest cho class vừa tạo(kiểm tra các method của AuthStorageService có được gọi và arguments truyền vào có như kỳ vọng hay không)(mock AuthStorageService)
# Implementation:
- Viết Unit Test cho class **`AuthStorageService`** ở ``authStorage.sevice.ts`` (kiểm tra localStorage có được gọi và arguments truyền vào có như kỳ vọng hay không)(mock localStorage)
  - Case 1: Kiểm tra các function trong `localStorage` được gọi.
    - Kiểm tra `localStorage.setItem` được gọi với đúng `key` và `value` truyền vào.
    - Kiểm tra `localStorage.getItem` được gọi với đúng `key` truyền vào.
    - Kiểm tra `localStorage.removeItem` được gọi với đúng `key` truyền vào.
  - Case 2: Kiểm tra các function trong `localStorage` được gọi và trả về đúng giá trị.
    - Kiểm tra `localStorage.setItem` được gọi với đúng `key` và `value` truyền vào.
    - Kiểm tra `localStorage.getItem` được gọi với đúng `key` truyền vào và trả về giá trị đúng.
    - Kiểm tra `localStorage.removeItem` được gọi với đúng `key` truyền vào.