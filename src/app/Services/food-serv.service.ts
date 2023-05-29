import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food } from '../Models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodServService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getfoods(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/food/get/all`);
  }
  public getfoodsBYID(id: number): Observable<Food> {
    return this.http.get<Food>(`${this.apiUrl}/food/get/${id}`);
  }

  public addfoods(food: Food): Observable<Food> {
    return this.http.post<Food>(`${this.apiUrl}/food/addfood`, food);
  }

  public Updatefoods(materiel: Food, id: number): Observable<Food> {
    return this.http.put<Food>(`${this.apiUrl}/food/update/${id}`, materiel);
  }
  public Removefoods(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/food/delete/${id}`);
  }

  public getFoodsByType(type: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/food/type/${type}`);
  }
  

  
}
