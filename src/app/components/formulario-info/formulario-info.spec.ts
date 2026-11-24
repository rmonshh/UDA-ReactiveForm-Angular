import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioInfo } from './formulario-info';

describe('FormularioInfo', () => {
  let component: FormularioInfo;
  let fixture: ComponentFixture<FormularioInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
