import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiBaseUrl = 'http://localhost:3000/api';
  private tripsUrl = `${this.apiBaseUrl}/trips`;

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  getTrip(tripCode: string): Observable<Trip> {
    const url = `${this.tripsUrl}/${tripCode}`;
    return this.http.get<Trip>(url);
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, formData);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    const url = `${this.tripsUrl}/${formData.code}`;
    return this.http.put<Trip>(url, formData);
  }

  deleteTrip(tripCode: string): Observable<any> {
    const url = `${this.tripsUrl}/${tripCode}`;
    return this.http.delete<any>(url);
  }
}