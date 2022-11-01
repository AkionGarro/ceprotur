import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formlogin!: FormGroup;
  user: any;
  contra: any;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formlogin = this.formBuilder.group({
      usuarioImput: ['', Validators.required],
      contraImput: ['', [Validators.required]],
    });
  }

  goRegister() {
    this.router.navigate(['register']);
  }
<<<<<<< Updated upstream
  onSubmit() {
    this.submitted = true;
    if (this.formlogin.invalid) {
      alert('Error al iniciar sesión');
      return;
    }
    this.router.navigate(['home']);
    console.log(this.formlogin.value);
=======
  onSubmit(){
    console.log(this.formulario.value);
  }

  goIngresar() {
    this.user = this.formulario.value.usuarioImput;
    this.contra = this.formulario.value.contraImput;

    console.log(this.user);
    console.log(this.contra);

    //aquí se hace la consulta a la base de datos para ver si el usuario y contraseña son correctos
    // y retorna al usuario, admin o error según corresponda
    // luego en los if se redirige a la página correspondiente

    if (this.user == 'admin' && this.contra == 'admin') {
      this.router.navigate(['admin']);
    } else if(this.user == 'user' && this.contra == 'user'){
      this.router.navigate(['users']);
    }else{
      console.log('Error al iniciar sesión, el usuario o contraseña son incorrectos');
    }
>>>>>>> Stashed changes
  }
}
