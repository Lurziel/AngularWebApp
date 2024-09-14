import { Inject, Injectable, InjectionToken } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly baseUrl = environment.apiUrl;
  private helper = new JwtHelperService();

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
  
  isAuthenticated(): boolean {
      return this.getToken() !== null;
  }

  getToken(): string | null {
    return this.storage.getItem(this.SESSION_STORAGE_TOKEN);
  }

  clear():void {
      this.storage.removeItem(this.SESSION_STORAGE_TOKEN);
  }

  isTokenExpired(): boolean{
    const token = this.storage.getItem(this.SESSION_STORAGE_TOKEN);
    return token === null ? true : this.helper.isTokenExpired(token)
  }

  private storeToken(token: string):void {
      this.storage.setItem(this.SESSION_STORAGE_TOKEN,token);
  }

}
