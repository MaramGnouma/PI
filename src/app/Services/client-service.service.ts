import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../Models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

 private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients/get/all`);
  }
  public getClientBYID(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/clients/get/${id}`);
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/clients/addclient`, client);
  }

  public UpdateClient(client: Client, id: number): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/clients/update/${id}`, client);
  }
  public RemoveClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clients/delete/${id}`);
  }
}