import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatégorieIMC } from '../Models/catégorie-imc';

@Injectable({
  providedIn: 'root'
})
export class CatagorieServService {
    private URL ='http://localhost:8060/categories';
  
    constructor(private http: HttpClient) {}
  
    public getCategories(): Observable<CatégorieIMC[]> {
      return this.http.get<CatégorieIMC[]>(`${this.URL}/get/all`);
    }
      
      getCategorieIMC(id: number): Observable<CatégorieIMC> {
        return this.http.get<CatégorieIMC>(`${this.URL}/get/${id}`);
      }

    

}
