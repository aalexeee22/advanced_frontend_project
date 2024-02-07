import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AutentificareService {
  _url='http://localhost:3000/auten';
  constructor(private  _http: HttpClient) { }
  auten(user: User ){
    return this._http.post<any>(this._url, user);
  }
}
