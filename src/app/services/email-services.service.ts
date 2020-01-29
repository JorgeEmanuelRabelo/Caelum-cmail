import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = "http://localhost:3300/emails";
  cabecalho = new HttpHeaders({ Authorization: localStorage.getItem('cmail-token') })

  constructor(private httpCliente: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }) {
    const api = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    return this.httpCliente.post(this.api, api, { headers: this.cabecalho })
  }


}