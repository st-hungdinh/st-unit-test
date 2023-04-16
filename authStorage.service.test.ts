import { AuthStorageService } from './authStorage.service';

const authStorage = new AuthStorageService();

describe('Test setToken func', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should set token', () => {
    authStorage.setToken('token');
    expect(localStorage.setItem).toBeCalled();
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.getItem('token')).toBe('token');
  });

  it('should set data', () => {
    const data = JSON.stringify({ id: 'test' });
    authStorage.setToken(data);
    expect(localStorage.getItem('token')).toStrictEqual(data);
  });
});

describe('Test getToken func', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should get token', () => {
    authStorage.setToken('token');
    expect(authStorage.getToken()).toBe('token');
  });

  it('should get data', () => {
    const data = JSON.stringify({ id: 'test' });
    authStorage.setToken(data);
    expect(authStorage.getToken()).toStrictEqual(data);
  });
});

describe('Test removeToken func', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should remove token', () => {
    authStorage.setToken('token');
    authStorage.removeToken();
    expect(localStorage.removeItem).toBeCalled();
    expect(localStorage.removeItem).toBeCalledTimes(1);
    expect(localStorage.getItem('token')).toBe(null);
  });
});
