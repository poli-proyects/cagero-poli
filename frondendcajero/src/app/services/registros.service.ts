import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  urlPer = 'http://localhost:3000/api/registro'
   home=   ' http://localhost:3000/api/home'
  constructor(
    private http : HttpClient
  ) { }

  getUser():Observable<any>{
    return this.http.get(this.home);

  }
  movimientos(documento : any):Observable<any>{
    return this.http.get(`${this.urlPer}/${documento}`)
  }

  
  retirarDinero(documento: any,valorRetiro : any){
    return this.http.post(this.urlPer+'/'+documento,valorRetiro)
    }

    
    consignarDiner(documento: any,valorRetiro : any){
      let retiro =  `${this.urlPer}/consignar`
      
      return this.http.post(retiro+'/'+documento,valorRetiro)

    }
    
  }


