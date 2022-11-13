import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

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
      serviceDescription: ['', Validators.required],
      companyDescription: ['', Validators.required],
      serviceType: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formService.invalid) {
      Swal.fire('Petición Incompleta', 'Verifique los campos', 'error');
      return;
    } else {
      var formData: any = new FormData();
      formData.append(
        'serviceDescription',
        this.formService.value.serviceDescription
      );
      formData.append(
        'companyDescription',
        this.formService.value.companyDescription
      );
      formData.append('serviceType', this.formService.value.serviceType);
      formData.append('username', localStorage['localUser']);
      this.registerService.createServiceWithUser(formData).subscribe((res) => {
        Swal.fire('Petición creada con exito', 'ID:' + res['Id'], 'success');
        console.log(res);
        this.router.navigate(['/home']);
      });
    }
  }
}
