import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const url_api =environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private httpClient:HttpClient) { }
  cySendMailHostinger(message:string): Observable<any> {

    const httpOptionsLogin = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        }
      )
    };
    let data_mail={
      body_mail: message,
      secretKeyCharlies: environment.secretKeyCharlies
    }
    return this.httpClient.post<any>(`${url_api}/mail.php`,data_mail , httpOptionsLogin)
  }
}
