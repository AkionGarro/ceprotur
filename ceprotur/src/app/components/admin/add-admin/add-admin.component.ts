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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.requiredTrue],
      email: ['', Validators.requiredTrue],
      usuario: ['', Validators.requiredTrue],
      password: ['', [Validators.requiredTrue, Validators.minLength(8)]],
      telefono: ['', Validators.requiredTrue],
    });
  }
  async onSubmit() {
    const response = await this.registerService.addAdmin(this.formulario.value);
    console.log(response);

    if (response) {
      this.formulario.reset();
      console.log('registrado');
    } else {
      console.log('Error al registrar');
    }
  }
}
