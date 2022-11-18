import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';
import { ref, Storage, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-new-procedure',
  templateUrl: './new-procedure.component.html',
  styleUrls: ['./new-procedure.component.css'],
})
export class NewProcedureComponent implements OnInit {
  formService!: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private location: Location,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    this.formService = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formService.invalid) {
      Swal.fire('Petición Incompleta', 'Verifique los campos', 'error');
      return;
    } else {
      var formData: any = new FormData();
      formData.append('description', this.formService.value.description);
      formData.append('name', this.formService.value.name);
      formData.append('id', localStorage['currentServiceId']);
      formData.append('category', localStorage['currentPhase']);

      this.registerService.newPhaseProcedure(formData).subscribe((res) => {
        Swal.fire(
          'Petición creada con exito',
          'ID:' + res['idProcedure'],
          'success'
        );
        console.log(res);
        this.location.back();
      });
    }
  }

  uploadFile($event: any) {
    const file = $event.target.files[0];
    console.log(file);
    const fileRef = ref(this.storage, 'files/' + file.name);
    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
}
