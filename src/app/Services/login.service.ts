import { Injectable } from '@angular/core';
import { User } from '../admin/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/adminUsers';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }  

  


  getAdmin(): Observable<User[]> {
    return this.http.get<User[]>(URL);
  }

  postProducatdata(data: any){
    return this.http.post<any>(URL, data);
  }
  

  updateInfos(id:number, p:User):Observable<User>{
    return this.http.put<User>(URL+"/"+id,p);
    }

    updatePass(id:number, p:User):Observable<User>{
      return this.http.patch<User>(URL+"/"+id,p);
      }
  
      
  /*  modifUser(user: Admin): Observable<Admin> {
      return this.http.put<Admin>(URL+ '/'+user.id,user);
    }*/

    login(login:string, pwd:string):Observable<User[]>{
      return this.http.get<User[]>(URL+"?username="+login+"&password="+pwd);
    }
    
    deleteProducatdata(id: number){
      return this.http.delete(`http://localhost:3000/admin/${id}`);
    }


}
