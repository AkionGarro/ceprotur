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

  formulario!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nameImput: ['', Validators.required],
      emailImput: ['', [Validators.required, Validators.email]],
      usuarioImput: ['', Validators.required],
      contraImput: ['', [Validators.required, Validators.minLength(8)]],
      tipoUserImput: ['', Validators.required],
      ubicacionImput: ['', Validators.required],
      telImput: ['', Validators.required],
      sectorImput: ['', Validators.required],
    });
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
  async onSubmit() {
    this.submitted = true;
    if (this.formulario.invalid) {
      alert('formulario invalido');
      return;
    }
    alert('Success');

    console.log(this.formulario.value);
    const response = await this.registerService.addUser(this.formulario.value);
    console.log(response);
    this.goLogin();
  }
}
