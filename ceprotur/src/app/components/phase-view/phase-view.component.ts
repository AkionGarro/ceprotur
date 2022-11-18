import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-phase-view',
  templateUrl: './phase-view.component.html',
  styleUrls: ['./phase-view.component.css'],
})
export class PhaseViewComponent implements OnInit {
  procedures: any;
  phase: any;

  constructor(
    private route: ActivatedRoute,
    public service: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.phase = params.get('var');
      var formData: any = new FormData();
      formData.append('phase', this.phase);
      formData.append('serviceId', localStorage['currentServiceId']);
      this.service.getProceduresByPhase(formData).subscribe((res) => {
        this.procedures = res;
        console.log(this.procedures);
      });
    });
  }

  newProcedure() {
    localStorage.setItem('currentPhase', this.phase);
    this.router.navigate(['/newProcedure']);
  }
}
