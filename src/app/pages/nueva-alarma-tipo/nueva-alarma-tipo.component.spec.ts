import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAlarmaTipoComponent } from './nueva-alarma-tipo.component';

describe('NuevaAlarmaTipoComponent', () => {
  let component: NuevaAlarmaTipoComponent;
  let fixture: ComponentFixture<NuevaAlarmaTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevaAlarmaTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaAlarmaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
