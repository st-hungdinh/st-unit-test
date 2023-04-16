import { AuthStorageService } from './authStorage.service';
import { UserAuthService } from './userAuth.service';

const userAuthService = new UserAuthService();
const authStorage = new AuthStorageService();

describe('UserAuthService', () => {
  it('should return false if login is not successful', async () => {
    const setTokenSpy = jest.spyOn(authStorage, 'setToken');
    const result = await userAuthService.login(null);
    expect(setTokenSpy).toBeCalled();
    expect(setTokenSpy).toBeCalledTimes(0);
    expect(result).toBe(false);
  });

  it('should return true if login is successful', async () => {
    const setTokenSpy = jest.spyOn(authStorage, 'setToken');
    const result = await userAuthService.login({ username: 'test', password: 'test' });
    expect(setTokenSpy).toBeCalled();
    expect(setTokenSpy).toBeCalledTimes(1);
    expect(result).toBe(true);
  });
});
