import { AuthStorageService } from './authStorage.service';

export class UserAuthService {
  constructor(private authStorage: AuthStorageService = new AuthStorageService()) {
    this.authStorage = authStorage;
  }

  fakeFetch(data: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('1234');
      }, 1000);
    });
  }

  async login(data: any): Promise<boolean> {
    if (!data) {
      return false;
    }
    const token = await this.fakeFetch(data);
    this.authStorage.setToken(token);
    return true;
  }
}
