import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../users/users';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(credentials): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    console.log(credentials);
    return this.httpClient.post('/api/auth/signin', credentials, headers);

  }

  register(user: IUser): Observable<any> {
    return this.httpClient.post('/api/auth/signup', user, headers);
  }
}
