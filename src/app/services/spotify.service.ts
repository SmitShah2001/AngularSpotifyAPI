// src/app/services/spotify.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SpotifyAuthService } from './spotify-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient, private authService: SpotifyAuthService) { }

  // Fetch new releases
  getNewReleases(): Observable<any> {
    return this.authService.getAccessToken().pipe(
      switchMap((tokenResponse) => {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${tokenResponse.access_token}`
        });
        return this.http.get(`${this.baseUrl}/browse/new-releases`, { headers });
      })
    );
  }

}
