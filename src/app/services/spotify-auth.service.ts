import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private clientId = environment.CLIENTID;
  private clientSecret = environment.CLIENTSECRET;
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) { }

  getAccessToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
    });

    const body = 'grant_type=client_credentials';

    return this.http.post(this.tokenUrl, body, { headers });
  }
}

