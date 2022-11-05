import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  servicesCreated: any = [];
  constructor(private service: RegisterService) {}

  ngOnInit(): void {
    this.service.getAllServices().subscribe((res) => {
      console.log(res);
      this.servicesCreated = res;
      console.log(this.servicesCreated);
    });
  }
}
