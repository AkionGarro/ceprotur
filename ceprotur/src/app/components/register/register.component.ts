import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  formulario: FormGroup;
  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nameImput: new FormControl(),
      emailImput: new FormControl(),
      usuarioImput: new FormControl(),
      contraImput: new FormControl(),
      tipoUserImput: new FormControl(),
      ubicacionImput: new FormControl(),
      telImput: new FormControl(),
      sectorImput: new FormControl(),
    });
  }

  ngOnInit(): void {}

  tryUser(tipoUser: String) {
    console.log(tipoUser);
  }
  register(
    name: String,
    email: String,
    usuario: String,
    password: String,
    tipoUser: String,
    direccion: String,
    telefono: String,
    sector: String
  ) {}

  goLogin() {
    this.router.navigate(['/login']);
  }
  onSubmit() {
    console.log(this.formulario.value);
  }
}
