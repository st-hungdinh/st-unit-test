import { AuthStorageService } from './authStorage.service';

describe('Test AuthStorageService', () => {
  const keyItem = 'token';

  const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
  const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
  const removeItemMock = jest.spyOn(Storage.prototype, 'removeItem');

  const authStorageService = new AuthStorageService();

  describe('Test Storage function has been called', () => {
    it('Should set token called', () => {
      authStorageService.setToken('abcd1234');
      expect(setItemMock).toHaveBeenCalled();
      expect(setItemMock).toHaveBeenCalledWith(keyItem, 'abcd1234');
    });

    it('Should get token called', () => {
      authStorageService.getToken();
      expect(getItemMock).toHaveBeenCalled();
      expect(getItemMock).lastCalledWith(keyItem);
    });

    it('Should remove token called', () => {
      authStorageService.removeToken();
      expect(removeItemMock).toHaveBeenCalled();
      expect(removeItemMock).lastCalledWith(keyItem);
    });
  });

  describe('Test Storage function has been called with correct params', () => {
    it('Should return correct value when add new item', () => {
      authStorageService.setToken('abcd1234');
      expect(setItemMock).toHaveBeenCalled();
      expect(setItemMock).toHaveBeenCalledWith(keyItem, 'abcd1234');
      const token = authStorageService.getToken();
      expect(getItemMock).toHaveBeenCalled();
      expect(getItemMock).lastCalledWith(keyItem);
      expect(token).toEqual('abcd1234');
    });

    it('Should return null when remove item', () => {
      authStorageService.removeToken();
      expect(removeItemMock).toHaveBeenCalled();
      expect(removeItemMock).lastCalledWith(keyItem);
      const token = authStorageService.getToken();
      expect(token).toEqual(null);
    });
  });
});
