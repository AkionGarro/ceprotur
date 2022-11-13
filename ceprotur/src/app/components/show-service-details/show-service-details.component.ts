import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-show-service-details',
  templateUrl: './show-service-details.component.html',
  styleUrls: ['./show-service-details.component.css'],
})
export class ShowServiceDetailsComponent implements OnInit {
  id: any;
  currentService: any;
  constructor(private route: ActivatedRoute, public service: RegisterService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('var');
      var formData: any = new FormData();
      formData.append('id', this.id);
      this.service.getServicesById(formData).subscribe((res) => {
        console.log(res);
        this.currentService = res;
      });
    });
  }
}
