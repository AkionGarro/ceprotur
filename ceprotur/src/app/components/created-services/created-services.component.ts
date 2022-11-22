import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-created-services',
  templateUrl: './created-services.component.html',
  styleUrls: ['./created-services.component.css'],
})
export class CreatedServicesComponent implements OnInit {
  servicesUSer: any = [];
  constructor(private service: RegisterService, private router: Router, public screen: ScreenSizeService) {}

  ngOnInit(): void {
    this.screen.isUser = true;
    var formData: any = new FormData();
    formData.append('username', localStorage['localUser']);
    console.log('USUARIOO -> ' , localStorage['localUser']);
    console.log(formData);
    this.service.getServices(formData).subscribe((res) => {
      console.log(res);
      this.servicesUSer = res;
      console.log(this.servicesUSer);
    });
  }

  detailsService(id: any) {
    this.router.navigate(['/detailsService', id]);
  }
}
