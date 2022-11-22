import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProcedureComponent } from './details-procedure.component';

describe('DetailsProcedureComponent', () => {
  let component: DetailsProcedureComponent;
  let fixture: ComponentFixture<DetailsProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
