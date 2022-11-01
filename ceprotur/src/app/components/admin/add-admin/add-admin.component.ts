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
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
<<<<<<< Updated upstream
  formulario!: FormGroup;
  constructor(
    public screen: ScreenSizeService,
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {}
=======

  formulario: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public screen: ScreenSizeService, 
    private registerService: RegisterService,
    private _snackBar: MatSnackBar
    ) { 
      this.formulario = new FormGroup({
      nameImput: new FormControl(),
      emailImput: new FormControl(),
      usuarioImput: new FormControl(),
      contraImput: new FormControl(),
      telImput: new FormControl(),
    });
  }
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    } else {
=======
      this._snackBar.open("Se ha creado el nuevo administrador con éxito", "Cerrar", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 7000 //en 10s se cierra si no se hizo manualmente
      });
    }else{
>>>>>>> Stashed changes
      console.log('Error al registrar');
    }
  }
}
