import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Admin } from 'src/app/models/admin';
import Swal from 'sweetalert2';

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
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userType: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      tourismSector: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      Swal.fire('Intente nuevamente', 'Error al crear el usuario', 'error');
      return;
    } else {
      var formData: any = new FormData();
      formData.append('name', this.registerForm.value.name);
      formData.append('email', this.registerForm.value.email);
      formData.append('username', this.registerForm.value.username);
      formData.append('password', this.registerForm.value.password);
      formData.append('userType', this.registerForm.value.userType);
      formData.append('address', this.registerForm.value.address);
      formData.append('telephone', this.registerForm.value.telephone);
      formData.append('tourismSector', this.registerForm.value.tourismSector);
      this.registerService.registerUser(formData).subscribe((data) => {
        console.log(data);
        if (data != null) {
          Swal.fire(
            'Bienvenido a Ceprotur',
            'Usuario creado con éxito',
            'success'
          );
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/register']);
        }
      });
    }
  }
}
