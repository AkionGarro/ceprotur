import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Admin } from 'src/app/models/admin';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    public screen: ScreenSizeService,
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.requiredTrue],
      email: ['', Validators.requiredTrue],
      username: ['', Validators.requiredTrue],
      password: ['', [Validators.requiredTrue, Validators.minLength(8)]],
      telephone: ['', Validators.requiredTrue],
    });
  }
  onSubmit() {
    var formData: any = new FormData();
    formData.append('name', this.formulario.value.name);
    formData.append('email', this.formulario.value.email);
    formData.append('username', this.formulario.value.username);
    formData.append('password', this.formulario.value.password);
    formData.append('telephone', this.formulario.value.telephone);
    console.log(formData);
    this.registerService.registerAdmin(formData).subscribe((data) => {
      if (data != null) {
        alert('Usuario registrado');
        this.router.navigate(['/admin']);
      } else {
        alert('Error al registrar usuario');
      }
    });
  }
}
