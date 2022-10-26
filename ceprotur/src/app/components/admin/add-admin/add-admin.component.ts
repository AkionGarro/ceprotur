import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

import { FormGroup, FormControl } from '@angular/forms';
import { Admin } from 'src/app/models/admin';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  formulario: FormGroup;
  constructor(public screen: ScreenSizeService, private registerService: RegisterService) { 
    this.formulario = new FormGroup({
      nameImput: new FormControl(),
      emailImput: new FormControl(),
      usuarioImput: new FormControl(),
      contraImput: new FormControl(),
      telImput: new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  async onSubmit() {
    const admin: Admin = {
      name: this.formulario.value.nameImput,
      email: this.formulario.value.emailImput,
      usuario: this.formulario.value.usuarioImput,
      password: this.formulario.value.contraImput,
      telefono: this.formulario.value.telImput
    };
    console.log(admin);
    const response = await this.registerService.addAdmin(admin);
    console.log(response);
    
    if(response){
      this.formulario.reset();
      console.log('registrado');
    }else{
      console.log('Error al registrar');
    }
  }

}
