import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
          this.setCurrentUser(user);
        }
      })
    );
  }

  getUser(username: string) {
    return this.http.get(this.baseUrl + '/users/' + username);
  }

  setCurrentUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
