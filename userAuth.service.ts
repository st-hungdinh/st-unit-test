import { AuthStorageService } from './authStorage.service';

export class UserAuthService {
  constructor(private authStorage: AuthStorageService = new AuthStorageService()) {
    this.authStorage = authStorage;
  }

  fakeFetch(user: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.email && user.name) {
          resolve({
            token: 'abcd1234',
            user: {
              name: user.name,
              email: user.email
            }
          });
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }

  async login(user: any): Promise<boolean> {
    if (!user) {
      return false;
    }
    try {
      const response = await this.fakeFetch(user);
      if (response?.token) {
        this.authStorage.setToken(response.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  logout(): boolean {
    this.authStorage.removeToken();
    return true;
  }
}
