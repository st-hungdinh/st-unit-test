// - Chức năng đăng nhập:
// - Case 1: User đăng nhập thành công
//   - User token được lưu vào `localStorage` với key là `token`.
// - Case 2: User đăng nhập thất bại
//   - User token không được lưu vào `localStorage` với key là `token`.
// - Chức năng đăng xuất:
// - Case 1: User đăng xuất thành công
//   - User token được xóa khỏi `localStorage` với key là `token`.
// - Case 2: User đăng xuất thất bại
//   - User token không được xóa khỏi `localStorage` với key là `token`.

import { AuthStorageService } from './authStorage.service';
import { UserAuthService } from './userAuth.service';

const userAuthService = new UserAuthService();

const userMock = {
  name: 'Hung Dinh S.',
  email: 'hung.dinh@supremetech.vn'
};
const tokenMock = 'user_token';

describe('Test login function', () => {
  const setTokenMock = jest.spyOn(AuthStorageService.prototype, 'setToken');
  const fakeFetchMock = jest.spyOn(UserAuthService.prototype, 'fakeFetch');

  beforeEach(() => {
    setTokenMock.mockClear();
    fakeFetchMock.mockClear();
  });

  it('Should return true when user login successfully', async () => {
    fakeFetchMock.mockResolvedValueOnce({ token: tokenMock });
    const result = await userAuthService.login(userMock);
    expect(result).toEqual(true);
    expect(fakeFetchMock).toHaveBeenCalled();
    expect(setTokenMock).toHaveBeenCalled();
    expect(setTokenMock).toHaveBeenCalledWith(tokenMock);
  });

  it('Should return false when user login failed', async () => {
    fakeFetchMock.mockResolvedValueOnce({});
    const result = await userAuthService.login({});
    expect(result).toEqual(false);
    expect(fakeFetchMock).toHaveBeenCalled();
    expect(setTokenMock).not.toHaveBeenCalled();
  });
});

describe('Test logout function', () => {
  const removeTokenMock = jest.spyOn(AuthStorageService.prototype, 'removeToken');

  it('Should return true when user logout successfully', async () => {
    const result = userAuthService.logout();
    expect(result).toEqual(true);
    expect(removeTokenMock).toHaveBeenCalled();
  });
});
