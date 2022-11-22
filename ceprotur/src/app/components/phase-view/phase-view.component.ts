import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-phase-view',
  templateUrl: './phase-view.component.html',
  styleUrls: ['./phase-view.component.css'],
})
export class PhaseViewComponent implements OnInit {
  procedures: any;
  phase: any;
  fecha: any;
  msj = 'Agendar reunión';
  hora: any;
  agendar = false;
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let agenda =
      type +
      ': ' +
      event.value?.getDate() +
      '/' +
      (Number(event.value?.getMonth()) + 1) +
      '/' +
      event.value?.getFullYear();
    this.events.pop;
    this.fecha = agenda;
    console.log(agenda);
  }

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

  agendarR() {
    this.agendar = !this.agendar;
    if (this.msj == 'Agendar reunión') {
      this.msj = 'Terminar de agendar';
    } else {
      this.msj = 'Agendar reunión';
    }
  }

  addAgenda(hora: any) {
    this.events.push(`${this.fecha} - Hora: ${hora.value}`);

    // var formData: any = new FormData();
    // formData.append('fecha', this.fecha);
    // formData.append('hora', this.hora);
    // formData.append('procedureId', localStorage['currentProcedureId']);
    // this.service.addAgenda(formData).subscribe((res) => {
    //   console.log(res);
    // });
  }
  detailsProcedure(id: any) {
    localStorage.setItem('currentProcedureId', id);
    console.log(id);
    this.router.navigate(['/detailsProcedure', id]);
  }
}
