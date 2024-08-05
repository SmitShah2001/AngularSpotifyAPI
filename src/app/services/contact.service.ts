import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Example API endpoint

  constructor(private http: HttpClient) { }

  // Method to send contact information
  sendContactInfo(contactInfo: any): Observable<any> {
    return this.http.post(this.apiUrl, contactInfo);
  }

  // Example method to fetch data (optional)
  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}