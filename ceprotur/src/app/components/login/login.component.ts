import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  user: any;
  contra: any;

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      usuarioImput: new FormControl(),
      contraImput: new FormControl(),
    });
    this.user = this.formulario.get('usuarioImput');
    this.contra = this.formulario.get('contraImput');
  }

  ngOnInit(): void {}

  login(){

  }
  goRegister() {
    this.router.navigate(['register']);
  }
  onSubmit(){
    console.log(this.formulario.value);
  }

}
