import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUserUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(formData: any): Observable<any>{

    return this.http.post(baseUserUrl + 'login', formData)

  }
}
