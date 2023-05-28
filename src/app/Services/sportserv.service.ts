import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from '../Models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportservService {

  private apiUrl = 'http://localhost:8060/sport';

  constructor(private http: HttpClient) { }

  getAllSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.apiUrl}/get/all`);
  }

  getSportById(id: number): Observable<Sport> {
    return this.http.get<Sport>(`${this.apiUrl}/get/${id}`);
  }

  addSport(sport: Sport): Observable<any> {
    return this.http.post(`${this.apiUrl}/addsport`, sport);
  }

  updateSport(id: number, sport: Sport): Observable<Sport> {
    return this.http.put<Sport>(`${this.apiUrl}/update/${id}`, sport);
  }

  deleteSport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getSportsByType(type: string): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.apiUrl}/type/${type}`);
  }
}
