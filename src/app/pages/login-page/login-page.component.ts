import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private formBuilder: FormBuilder = inject(FormBuilder)
  private auth: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  formulario: FormGroup = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  })

  iniciarSession() {
    if (this.formulario.invalid) return;

    this.auth.verificarUserAndPass(
      this.formulario.controls['user'].value,
      this.formulario.controls['password'].value)


    /* const user: User = {
      user: this.formulario.controls['user'].value,
      password: this.formulario.controls['password'].value,
      id?:null
    }

    this.auth.loginUser(user.user, user.password) */
  }
}
