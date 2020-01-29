import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { LoginServicesService } from 'src/app/services/login-services.service';

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
    private loginService: LoginServicesService,
    private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(form: NgForm) {
    if (form.valid) {
      this.loginService.logar(this.login).
        subscribe(() => { this.roteador.navigate(['/inbox']) },
          (responseError: HttpErrorResponse) => {
            this.mensagemError = responseError.error.message;
            form.form.markAllAsTouched();
            console.log(this.mensagemError.includes('User not found') || this.mensagemError.includes('Invalid'))
          }
        )
    } else
      form.form.markAllAsTouched();
  }



}
