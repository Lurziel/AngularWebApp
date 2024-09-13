import { Inject, Injectable, InjectionToken } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => sessionStorage,
});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly baseUrl = environment.apiUrl;

  SESSION_STORAGE_TOKEN = 'token';

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) { }

  async simpleLogin(username: string, password: string) {
    const data = {
      "username": username,
      "password": password
    }
    return axios.post(
      this.baseUrl + `/api/accounts/login`,
      data
    ).then(result => {
      if (result.status === 200) {
        this.storeToken(result.data.token)
      }
      return result.status
    }).catch(e => {
      console.log(e);
    })
  }
  
  isAuthenticated() {
      return this.getToken() !== null;
  }

  getToken() {
      return this.storage.getItem(this.SESSION_STORAGE_TOKEN);
  }

  clear(){
      this.storage.removeItem(this.SESSION_STORAGE_TOKEN);
  }

  private storeToken(token: string) {
      this.storage.setItem(this.SESSION_STORAGE_TOKEN,token);
  }

}
