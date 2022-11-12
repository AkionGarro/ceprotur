import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-created-services',
  templateUrl: './created-services.component.html',
  styleUrls: ['./created-services.component.css'],
})
export class CreatedServicesComponent implements OnInit {
  servicesUSer: any = [];
  constructor(private service: RegisterService) {}

  ngOnInit(): void {
    var formData: any = new FormData();
    formData.append('username', localStorage['localUser']);
    console.log(formData);
    this.service.getServices(formData).subscribe((res) => {
      console.log(res);
      this.servicesUSer = res;
      console.log(this.servicesUSer);
    });
  }

  detailsService(id: any) {
    console.log(id);
  }
}
