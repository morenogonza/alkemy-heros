import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../services/validator.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showButton: boolean = false;

  get emailMsg(): string {
    const errores = this.miFormulario.get('email')?.errors;

    if (errores?.['required']) {
      return '* El email es obligatorio';
    } else if (errores?.['pattern']) {
      return '* El valor ingresado no es de tipo Email';
    }

    return '';
  }

  miFormulario: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      email: '',
      password: '',
    });
  }

  campoInvalido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  login() {
    this.miFormulario.markAllAsTouched();
    const { email, password } = this.miFormulario.value;

    if (this.miFormulario.valid) {
      this.showButton = true;
      this.authService.login(email, password).subscribe(
        (token) => {
          console.log('TOKEN', token);
          this.router.navigateByUrl('/home'), (this.showButton = false);
        },
        ({ error }) => {
          Swal.fire('Error', error.error, 'error'), (this.showButton = false);
        }
      );
    }
  }
}
