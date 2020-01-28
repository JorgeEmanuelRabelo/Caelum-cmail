import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  }

  mensagemError = '';

  constructor(
    private httpCliente: HttpClient,
    private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(form: NgForm) {
    console.log(this.login);
    console.log(form.invalid);
    if (form.valid) {
      this.httpCliente.post('http://localhost:3300/login', this.login).
        subscribe((resp: any) => {
          console.log(resp);
          localStorage.setItem('cmail-token', resp.token);
          setTimeout(() => {
            this.roteador.navigate(['/inbox']);
          }),
            (error) => {
              console.log(error);
              form.form.markAllAsTouched();
            }
        });
    } else
      form.form.markAllAsTouched();
  }



}
