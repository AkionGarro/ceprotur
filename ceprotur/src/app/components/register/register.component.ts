import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
  ) {
    console.log('Nombre: ' + name);
    console.log('Email: ' + email);
    console.log('Usuario: ' + usuario);
    console.log('Password: ' + password);
    console.log('Tipo de Usuario: ' + tipoUser);
    console.log('Direccion: ' + direccion);
    console.log('Telefono: ' + telefono);
    console.log('Sector: ' + sector);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}
