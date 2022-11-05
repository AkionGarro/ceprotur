import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedServicesComponent } from './created-services.component';

describe('CreatedServicesComponent', () => {
  let component: CreatedServicesComponent;
  let fixture: ComponentFixture<CreatedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
