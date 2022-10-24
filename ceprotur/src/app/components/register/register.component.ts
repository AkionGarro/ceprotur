import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

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
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {
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

  goLogin() {
    this.router.navigate(['/login']);
  }
  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.registerService.addUser(this.formulario.value);
    console.log(response);
  }
}
