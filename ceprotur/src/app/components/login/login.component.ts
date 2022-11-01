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
  onSubmit() {
    this.submitted = true;
    if (this.formlogin.invalid) {
      alert('Error al iniciar sesión');
      return;
    }
    this.router.navigate(['home']);
    console.log(this.formlogin.value);
  }
}
