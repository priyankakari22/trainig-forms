
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Http, Response  } from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class FormtService {
 private  url:string ="http://localhost:4200/formt";

  constructor(private http: HttpClient) {   }
  getformt():Observable<any>{
    return this.http.get<any>(this.url);
    
  }
  
  }
