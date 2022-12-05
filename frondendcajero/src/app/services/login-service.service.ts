import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  ulrlogin  ='http://localhost:3000/api/login'
  public token : String |any;

  constructor(
    private http : HttpClient,
    private jwtHelper : JwtHelperService
  ) { }

  login(credenciales : any):Observable<any>{
    return this.http.post(this.ulrlogin,credenciales);
  }


  isPermis():boolean{
    this.token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(this.token) ||!localStorage.getItem('token')){
      return false;

    }
    return true;
  }
}
