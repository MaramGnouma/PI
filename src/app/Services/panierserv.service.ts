import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from '../Models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierservService {

  private apiUrl = 'http://localhost:8060/panier'; // Remplacez cette URL par votre URL d'API

  constructor(private http: HttpClient) { }

  getAllPanier(): Observable<Panier[]> {
    return this.http.get<Panier[]>(this.apiUrl);
  }

  getPanierById(id: number): Observable<Panier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Panier>(url);
  }

  createPanier(panier: Panier): Observable<Panier> {
    return this.http.post<Panier>(this.apiUrl, panier);
  }

  deletePanier(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updatePanier(panier: Panier, id: number): Observable<Panier> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Panier>(url, panier);
  }
}