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
import { userLogin } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formlogin!: FormGroup;
  userLog: userLogin = {
    name: '',
    password: '',
  };
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RegisterService
  ) {}

  ngOnInit(): void {
    this.formlogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  goRegister() {
    this.router.navigate(['register']);
  }
  onSubmit() {
    this.submitted = true;
    var formData: any = new FormData();

    if (this.formlogin.invalid) {
      Swal.fire('Intente nuevamente', 'Error iniciar sesión', 'error');
      return;
    } else {
      formData.append('name', this.formlogin.value.user);
      formData.append('password', this.formlogin.value.password);
      this.service.getUserLogin(formData).subscribe((data) => {
        if (data != null) {
          localStorage.setItem('localUser', data.username);
          if (data['access'] == 'admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['created-services']);
          }
        } else {
          alert('Error al iniciar sesión');
        }
      });
    }
  }
}
