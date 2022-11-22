import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import {
  ref,
  Storage,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details-procedure',
  templateUrl: './details-procedure.component.html',
  styleUrls: ['./details-procedure.component.css'],
})
export class DetailsProcedureComponent implements OnInit {
  id: any;
  currentProcedure: any;
  file: any;
  fileRef: any;
  constructor(
    private route: ActivatedRoute,
    public service: RegisterService,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('var');
      var formData: any = new FormData();
      formData.append('idProcedure', this.id);
      this.service.getProcedureById(formData).subscribe((res) => {
        this.currentProcedure = res;
      });
    });
  }

  uploadFile($event: any) {
    this.file = $event.target.files[0];
  }

  sendToFire() {
    if (this.file != null) {
      this.fileRef = ref(
        this.storage,
        'services/' +
          localStorage['currentServiceId'].slice(1, -1) +
          '/' +
          localStorage['currentPhase'] +
          '/' +
          this.id +
          '/' +
          this.file.name
      );
      uploadBytes(this.fileRef, this.file).then((snapshot) => {
        console.log(snapshot);
        Swal.fire({ icon: 'success', title: 'Archivo subido' });
        this.router.navigate(['/created-services']);
      });
    }
  }
}
