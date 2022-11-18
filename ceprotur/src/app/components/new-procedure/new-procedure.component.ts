import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-procedure',
  templateUrl: './new-procedure.component.html',
  styleUrls: ['./new-procedure.component.css'],
})
export class NewProcedureComponent implements OnInit {
  formService!: FormGroup;
  submitted = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
