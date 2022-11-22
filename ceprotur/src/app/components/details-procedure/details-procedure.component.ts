import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-details-procedure',
  templateUrl: './details-procedure.component.html',
  styleUrls: ['./details-procedure.component.css'],
})
export class DetailsProcedureComponent implements OnInit {
  id: any;
  currentProcedure: any;
  constructor(
    private route: ActivatedRoute,
    public service: RegisterService,
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
  }
}
