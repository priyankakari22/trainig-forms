import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormRService {
  private  url:string ="http://localhost:4200/formr";
  constructor(private http:HttpClient) { }
  
  getformr():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
