import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
})
export class CreateServiceComponent implements OnInit {
  formService!: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formService = this.formBuilder.group({
      descripcionNecesidad: ['', Validators.required],
      descripcionEmpresa: ['', Validators.required],
      tipoServicio: ['', Validators.required],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.formService.invalid) {
      alert('formulario invalido');
      return;
    }
    alert('Success');

    console.log(this.formService.value);
    const response = await this.registerService.addService(
      this.formService.value
    );
    console.log(response);
    this.router.navigate(['home']);
  }
}
