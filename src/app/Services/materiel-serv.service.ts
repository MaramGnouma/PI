import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Matériels } from '../Models/matériels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaterielServService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getMatériels(): Observable<Matériels[]> {
    return this.http.get<Matériels[]>(`${this.apiUrl}/materiel/get/all`);
  }
  public getMatérielsBYID(id: number): Observable<Matériels> {
    return this.http.get<Matériels>(`${this.apiUrl}/materiel/get/${id}`);
  }

  public addMatériels(materiel: Matériels): Observable<Matériels> {
    return this.http.post<Matériels>(
      `${this.apiUrl}/materiel/addmateriel`,
      materiel
    );
  }

  public UpdateMatériels(
    materiel: Matériels,
    id: number
  ): Observable<Matériels> {
    return this.http.put<Matériels>(
      `${this.apiUrl}/materiel/update/${id}`,
      materiel
    );
  }
  public RemoveMatériels(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/materiel/delete/${id}`);
  }
}
