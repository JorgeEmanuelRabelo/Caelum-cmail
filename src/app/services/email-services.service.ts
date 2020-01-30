import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';

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
    return this.httpCliente.post<Email>(this.api, api, { headers: this.cabecalho }).
      pipe(
        map((resp: any) => {
          return new Email({
            destinatario: resp.to,
            assunto: resp.subject,
            conteudo: resp.content,
            dataDeEnvio: resp.created_at,
            id: resp.id
          })
        })
      )
  }

  listar() {
    return this.httpCliente.get(this.api, { headers: this.cabecalho }).
      pipe<Email[]>(
        map((resp: any[]) => {
          return resp.map(
            emailApi => new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.created_at,
              id: emailApi.id
            })
          )
        })
      );
  }

  deletar(id) {
    return this.httpCliente.delete(`${this.api}/${id}`, { headers: this.cabecalho });
  }


}