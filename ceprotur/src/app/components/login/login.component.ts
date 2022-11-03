import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Service } from 'src/app/models/service';
import { RegisterService } from 'src/app/services/register.service';

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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RegisterService
  ) {}

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
    this.service.getUserAPI().subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });

    this.submitted = true;
    if (this.formlogin.invalid) {
      alert('Error al iniciar sesión');
      return;
    }
    this.router.navigate(['home']);
    console.log(this.formlogin.value);
  }
}
