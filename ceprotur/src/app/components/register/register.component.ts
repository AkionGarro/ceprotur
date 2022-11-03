import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  tipoUser: any = [
    { nombre: 'Empresa' },
    { nombre: 'Grupo Organizado' },
    { nombre: 'Profesional de Turismo' },
  ];

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userType: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      tourismSector: ['', Validators.required],
    });
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
  async onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert('formulario invalido');
      return;
    }
    alert('Success');

    console.log(this.registerForm.value);
    const response = await this.registerService.addUser(
      this.registerForm.value
    );
    console.log(response);
    this.goLogin();
  }
}
