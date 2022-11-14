import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   server_address:string="api"
  constructor(private http:HttpClient) { }

  getBlog(){
    return this.http.get(`${this.server_address}/aboutMaths`)
  }
}
