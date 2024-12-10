import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from '../../models/userModel';
import { LoginService } from '../../services/login-service/login.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseModel } from '../../models/responseModel';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  usuarios: UserModel[] = [];

  formularioLogIn!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  // Metodo onInit se ejecuta al cargar componente, justo despues del constructor de la clase
  ngOnInit(): void {


    this.formularioLogIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }


  // Metodo para validar estado de formulario al intentar iniciar sesión
  submitForm() {
    console.log("testing daaaaamn")
    // if (this.formularioLogIn.valid) {
      
    //   console.log("testing daaaaamnaaaaaaaaaaaaaaaaaaaaa")

    //   this.loginService.login(this.formularioLogIn.get('email')!.value, this.formularioLogIn.get('password')!.value).subscribe({
    //     next: (response: ResponseModel) => {
    //       console.log(response.messageResponse);
    //       this.router.navigate(['/mangas']);
    //     },
    //     error: (err) => {
    //       console.error("Error en login: " + err);
    //     }
    //   });

    // } else {
    //   alert('Error al iniciar sesión')
    // }
  }

  // Metodo para validar credenciales
  // validateCredentials(): boolean {

  //   for (let element of this.usuarios) {
  //     if (this.formularioLogIn.get('email')!.value == element.correo && this.formularioLogIn.get('password')!.value == element.contrasena) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}
