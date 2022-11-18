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
  constructor(
    private route: ActivatedRoute,
    public service: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('var');
      var formData: any = new FormData();
      formData.append('id', this.id);
      this.service.getServicesById(formData).subscribe((res) => {
        this.currentService = res;
        localStorage.setItem(
          'currentServiceId',
          JSON.stringify(this.currentService['id'])
        );
      });
    });
  }
  goStart() {
    this.router.navigate(['phaseView/', 'start']);
  }
  goPlanning() {
    this.router.navigate(['phaseView/', 'planning']);
  }
  goEvaluation() {
    this.router.navigate(['phaseView/', 'evaluation']);
  }
  goNegotiation() {
    this.router.navigate(['phaseView/', 'negotiation']);
  }
  goExecution() {
    this.router.navigate(['phaseView/', 'execution']);
  }
  goClosure() {
    this.router.navigate(['phaseView/', 'closure']);
  }
}
