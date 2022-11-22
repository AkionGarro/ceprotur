import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import {
  ref,
  Storage,
  uploadBytes,
  getDownloadURL,
  listAll,
} from '@angular/fire/storage';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details-procedure',
  templateUrl: './details-procedure.component.html',
  styleUrls: ['./details-procedure.component.css'],
})
export class DetailsProcedureComponent implements OnInit {
  id: any;
  currentProcedure: any = new Object();
  file: any;
  fileRef: any;
  files: any = [];
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
        console.log(this.currentProcedure);
      });
    });
    this.getFiles();
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

  getFiles() {
    var url =
      'services/' +
      localStorage['currentServiceId'].slice(1, -1) +
      '/' +
      localStorage['currentPhase'] +
      '/' +
      this.id;
    const listRef = ref(this.storage, url);
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((urlFile) => {
            console.log(urlFile);
            this.files.push({ name: itemRef.name, url: urlFile });
          });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      })
      .finally(() => {
        console.log(this.files);
      });
  }

  openFile(file: any) {
    window.open(file.url, '_blank');
  }
}
