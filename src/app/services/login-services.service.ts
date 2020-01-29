import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  api = 'http://localhost:3300/login'

  constructor(private httpCliente: HttpClient) { }

  logar(dadosLogin) {
    return this.httpCliente.post(this.api, dadosLogin).pipe(
      map((resp: ResponseModel) => {
        localStorage.setItem('cmail-token', resp.token)
        return resp
      })
    )
  }
}
